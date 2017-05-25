／**
 头部组件： logo，主导航，登陆状态
*／
<template>
    <section class="head-box">
        <el-row>
        <el-col :span="3" :offset="3">
        <div class="logo">
            <img src="../../assets/quanjian_logo.png">
        </div>
        </el-col>
        <el-col :span="16">
            <TopNav></TopNav>
        </el-col>
            <el-col :span="2">
                <Login :isLogin="isLogin"></Login>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import TopNav from './TopNav.vue';
import Login from './Login.vue';

export default {
  name: 'head-box',
  components: {
    TopNav,
    Login
  },
  props: ['isLogin'],
  data () {
    return {
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
</style>
