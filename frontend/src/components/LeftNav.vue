／**
 主导航栏组件
*／
<template>
  <div class="left-nav-box">
    <el-menu default-active="0" class="el-menu-vertical-demo left-nav" @select="handleSelect">
        <router-link  v-for="(item, index) in navArr" :key="index" :to="item.routeto"><el-menu-item :index="(index+1).toString()"><i :class="item.icon"></i>{{item.text}}</el-menu-item></router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'left-nav',
  data () {
    return {
//   navArr: [
//       {
//           text: '导航一',
//           icon: 'el-icon-message',
//           routeto: '/user'
//       }
//   ]
    }
  },
  props: ['navArr'],
  created () {
    console.log(this.navArr);
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
.left-nav {
    height: 918px;

    .router-link-active {
        .el-menu-item {
            color: #20a0ff;
            background: #d3dce6;
        }
    }
}
</style>
