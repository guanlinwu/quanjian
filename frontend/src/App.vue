<template>
  <div id="app">
    <head-box :isLogin="isLogin"></head-box>
    <div class="g-container">
      <router-view :isLogin="isLogin"></router-view>
    </div>
  </div>
</template>

<script>
import Head from '@/components/HeadBox/index';

export default {
  name: 'app',
  data () {
    return {
      isLogin: false
    }
  },
  components: {
    'head-box': Head
  },
  created () {
    this.$bus.on('setLogin', this.setLogin);
  },
  // computed: {
  //   isLogin() {
  //     return this.$publicCore.isLogin()
  //   }
  // },
  mounted () {
    //通过获取本地存储token的存在判断是否登录
    this.isLogin = this.$publicCore.isLogin();
    //如果没有登录，则弹出登录模态框
    !this.isLogin && this.$publicCore.showLogin();
  },
  methods: {
    setLogin (boolean) {
      this.isLogin = boolean;
    }
  }
}
</script>

<style>
@import 'styles/base.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

.g-container {
  width: 100%;
  height: 964px;
  background: #D3DCE6;
}

.g-container-right {
  padding: 10px 0 0 0;
}

/*分页器*/
.u-pagination {
  margin: 16px 0 0 0;
  text-align: center;
}
</style>
