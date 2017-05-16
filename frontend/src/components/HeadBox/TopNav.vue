／**
 主导航栏组件
*／
<template>
  <div class="top-nav">
      <el-menu  :default-active="dactiveIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <router-link to="/"><el-menu-item index="1">会员管理</el-menu-item></router-link>
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
      activeIndex: '1'
    }
  },
  computed: {
    dactiveIndex: function () {
      let hash = window.location.hash,
        path = hash.match(/#\/(\w*)/)[1];
      /**
      根据地址的hash，计算出对应哪个导航是活跃的
       */
      switch (path) {
        case '':
          return '1';
        case 'sale':
          return '2';
        case 'credit':
          return '3';
        case 'goods':
          return '4';
        case 'sheets':
          return '5';
        case 'manage':
          return '6';
        default:
          return '1';
      }
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$router);
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
