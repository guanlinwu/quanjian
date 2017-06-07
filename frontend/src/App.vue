<template>
  <div id="app">
    <head-box :isLogin="isLogin"></head-box>
    <div class="g-container" v-if="isLogin">
      <keep-alive><router-view :isLogin="isLogin"></router-view></keep-alive>
    </div>
  </div>
</template>

<script>
import Head from '@/components/HeadBox/index';

export default {
  name: 'app',
  data () {
    return {
      // 全局登录状态
      isLogin: false
    }
  },
  components: {
    'head-box': Head
  },
  created () {
    //设置登录全局状态
    this.$bus.on('setLogin', this.setLogin);
  },
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
  min-height: 964px;
  background: #D3DCE6;
}

.g-container-right {
  padding: 10px 0 30px 0;
}

/*分页器*/
.u-pagination {
  margin: 16px 0 0 0;
  text-align: center;
}

/*搜索框*/
.search-input {
  width: 230px;
}
</style>
