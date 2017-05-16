<template>
  <div class="login">
    <p v-if="isLogin">xxx</p>
    <p v-else>登陆</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isLogin: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
    > p {
        padding-right: 16px;
        text-align: right;
        font-size: 16px;
        color: #20a0ff;
        line-height: 60px;
    }
}
</style>
