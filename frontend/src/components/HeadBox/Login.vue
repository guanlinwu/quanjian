<template>
  <div class="login">
    <p v-if="isLogin">{{this.user.name}}</p>
    <el-button v-else type="text" @click="dialogVisible = true">登陆</el-button>

    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      :before-close="resetForm('loginForm')"
      size="tiny" class="login-form"
      >
      <h3 class="title">登陆</h3>
      <el-form :label-position="labelPosition" :rules="rules" label-width="20px" :model="loginForm" ref="loginForm">
        <el-form-item label=" " required prop="name">
          <el-input v-model="loginForm.name" placeholder="请输入账号或者姓名"></el-input>
        </el-form-item>
        <el-form-item label=" " required prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="resetForm('loginForm', 'close')">取 消</el-button>
        <el-button size="small" type="primary" @click="handleSubmitLogin('loginForm')" @keyup.enter="handleSubmitLogin">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      //是否登陆
      isLogin: false,
      //用户信息
      user: {
        name: ''
      },
      //是否显示登录框
      dialogVisible: false,
      //登录框输入框对齐方式
      labelPosition: 'right',
      //登陆表单的信息
      loginForm: {
        name: '',
        password: ''
      },
      //表单匹配规则
      rules: {
        name: [
          {
            required: true, message: '请填写账号或者姓名', trigger: 'blur'
          }
        ],
        password: [
          {
            required: true, message: '请填写密码', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    //提交登陆信息
    handleSubmitLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.dialogVisible = false;
          console.log(this.loginForm.name);
          console.log(this.loginForm.password);

          //这里发送请求，并且把返回的用户名显示在页面上
          this.isLogin = true;
          this.user.name = this.loginForm.name;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //取消或关闭重置登陆表单验证
    resetForm (formName, status) {
      console.log(status)
      if (status !== undefined && status === 'close') {
        this.dialogVisible = false;
      }
      !!this.$refs[formName] && this.$refs[formName].resetFields();
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
        font-size: 14px;
        color: #20a0ff;
        line-height: 60px;
    }
    > .el-button {
      line-height: 60px;
      display: inline-block;
      height: 60px;
      padding: 0 16px 0 0;
    }
}

.login-form {
    .title {
      font-size: 26px;
      font-weight: 300;
      padding-bottom: 32px;
    }
}

</style>
