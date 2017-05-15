<template>
    <section class="header">
        <el-row>
        <el-col :span="3" :offset="3">
        <div class="logo">
            <img src="../assets/quanjian_logo.png">
        </div>
        </el-col>
        <el-col :span="12">
            <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">会员管理</el-menu-item>
            <el-menu-item index="2">商品销售</el-menu-item>
            <el-menu-item index="3">积分管理</el-menu-item>
            <el-menu-item index="4">商品管理</el-menu-item>
            <el-menu-item index="5">报表统计</el-menu-item>
        </el-menu>
        </el-col>
            <el-col :span="6">
                <div>
                    登陆状态
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
    // background: #eef1f6;
}
.logo {
    height: 60px;
    
    img {
        display: inline-block;
        height: 50px;
        margin-top: 5px;
    }
}

.el-menu {
    background: #fff;
}

.el-menu--horizontal .el-menu-item:not(.is-active) {
    color: #8B572A;
}
</style>
