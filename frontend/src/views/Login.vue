<template>
  <div class="login">
    <el-row :gutter="20">
      登录
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      //左边导航栏
      navArr: [
        {
          text: '基本信息',
          icon: 'el-icon-message',
          routeto: '/manage'
        }
      ],
      //表格数据
      tableData: [{
        number: '0123',
        name: '王小虎',
        authority: '管理员'
      }, {
        number: '0123',
        name: '王小虎',
        authority: '操作员'
      }, {
        number: '0123',
        name: '王小虎',
        authority: '操作员'
      }]
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
