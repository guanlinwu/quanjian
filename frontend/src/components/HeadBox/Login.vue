<template>
  <div class="login">
    <div class="name-box" v-if="isLogin"><a>{{this.user.name}}</a><a  @click="loginOut">退出</a></div>
    <el-button v-else type="text" @click="dialogVisible = true">登录</el-button>

    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      :before-close="beforeClose"
      size="tiny" class="login-form"
      >
      <h3 class="title">登录</h3>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" :label-position="labelPosition" label-width="60px">
        <el-form-item label="账号" prop="name">
          <el-input v-model="loginForm.name" placeholder="请输入账号或者姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="resetForm('loginForm', 'close')">取 消</el-button>
        <el-button size="small" type="primary" @click="handleSubmitLogin('loginForm')" @keyup.enter="handleSubmitLogin('loginForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {authenticate, getUsers} from '@/api/manager';

export default {
  name: 'login',
  data () {
    return {
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
          { required: true, message: '请填写密码', trigger: 'blur' }
        ]
      }
    }
  },
  props: ['isLogin'],
  created () {
    /**
     * 绑定事件
     */
    this.$bus.on('showLoginForm', () => {
      this.dialogVisible = true;
    });
  },
  // updated () {
  //   console.log('updated....');
  //   console.log(this.isLogin);
  //   if (this.isLogin) {
  //     getUsers().then((result) => {
  //       console.log(result);
  //       this.user.name = result.name;
  //     }, (error) => {
  //       //token过期，则设置App.vue的组件的isLogin属性为false
  //       this.$bus.emit('setLogin', false);
  //       //移除过期的token
  //       this.$publicCore.removeToken();
  //       //弹窗登录
  //       this.$publicCore.showLogin();
  //     });
  //   }
  //   console.log('updated....');
  // },
  watch: {
    isLogin () {
      console.log('isLogin ' + this.isLogin);
      if (this.isLogin) {
        getUsers().then((result) => {
          console.log(result);
          this.user.name = result.name;
        }, (error) => {
          //token过期，则设置App.vue的组件的isLogin属性为false
          this.$bus.emit('setLogin', false);
          //移除过期的token
          this.$publicCore.removeToken();
          //弹窗登录
          this.$publicCore.showLogin();
        });
      }
    }
  },
  methods: {
    //提交登陆信息
    handleSubmitLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          authenticate({
            userNameOrEmailAddress: this.loginForm.name,
            password: this.loginForm.password
          }).then((result) => {
            console.log(result);
            this.dialogVisible = false;
            this.user.name = this.loginForm.name;
            //设置App.vue的组件的isLogin属性为true
            this.$bus.emit('setLogin', true);
            this.$notify({
              showClose: true,
              message: this.loginForm.name + ' 登录成功',
              type: 'success'
            });
          }, (error) => {
            console.log(error);
            this.$notify({
              showClose: true,
              message: '账号或密码不正确，请重新输入',
              type: 'error'
            });
          });
        } else {
          console.log('error submit!!');
          this.$notify({
            showClose: true,
            message: '请按照要求填写',
            type: 'error'
          });
          return false;
        }
      });
    },
    //取消或关闭重置登陆表单验证
    resetForm (formName, status) {
      if (status !== undefined && status === 'close') {
        this.dialogVisible = false;
      }
      !!this.$refs[formName] && this.$refs[formName].resetFields();
    },
    beforeClose () {
      this.resetForm('loginForm', 'close');
    },
    //退出登录
    loginOut () {

      this.$confirm('确认退出登录？')
      .then(_ => {
        //token过期，则设置App.vue的组件的isLogin属性为false
        this.$bus.emit('setLogin', false);
        //移除过期的token
        this.$publicCore.removeToken();
        //弹窗登录
        this.$publicCore.showLogin();
      })
      .catch(_ => {});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
    .name-box {
        text-align: right;
        font-size: 14px;
        color: #20a0ff;
        line-height: 60px;

        >a {
            display: inline-block;
            padding-right: 16px;
            cursor: pointer;
        }
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
