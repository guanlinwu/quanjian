／**
 主导航栏组件
*／
<template>
  <div class="top-nav">
      <el-menu  :default-active="dactiveIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <router-link to="/user"><el-menu-item index="1">会员管理</el-menu-item></router-link>
        <router-link to="/sale"><el-menu-item index="2">商品销售</el-menu-item></router-link>
        <router-link to="/credit"><el-menu-item index="3">积分管理</el-menu-item></router-link>
        <router-link to="/goods"><el-menu-item index="4">商品管理</el-menu-item></router-link>
        <router-link to="/sheets"><el-menu-item index="5">报表统计</el-menu-item></router-link>
        <router-link to="/manage"><el-menu-item index="6">管理人员</el-menu-item></router-link>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'top-nav',
  data () {
    return {
    }
  },
  computed: {
    dactiveIndex: function () {
      /**
      根据地址的hash，计算出对应哪个导航是活跃的
       */
      console.log(this.$route);
      let path = this.$route.name,
        index = '1';
      console.log(/sale/.test(path))
      switch (true) {
        case /user/.test(path):
          index = '1';
          break;
        case /sale/.test(path):
          index = '2';
          break;
        case /credit/.test(path):
          index = '3';
          break;
        case /goods/.test(path):
          index = '4';
          break;
        case /sheets/.test(path):
          index = '5';
          break;
        case /manage/.test(path):
          index = '6';
          break;
        default:
          index = '1';
      }

      return index;
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
.el-menu {
    background: #fff;

    .el-menu-item {
        &.is-active{
            border-bottom: 5px solid #20a0ff;
        }
    }
}

.el-menu--horizontal .el-menu-item:not(.is-active) {
    color: #8B572A;
}
</style>
