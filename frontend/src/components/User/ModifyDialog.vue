<template>
  <div class="user-dialog">
    <el-dialog @open="initOpen" title="修改会员信息" custom-class="modify-dialog" :visible.sync="dialogFormVisible" :before-close="handleToggleFormVisible">
      <el-form :inline="true" :model="selfform" ref="userform" :rules="rules" :label-position="labelPosition">
          <el-form-item label="姓名" label-width="120px" prop="name">
            <el-input v-model="selfform.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="编号" label-width="120px" prop="number" required>
            <el-input v-model="selfform.number" auto-complete="off" type=number></el-input>
          </el-form-item>
         <el-form-item label="积分" label-width="120px" prop="credit" required>
            <el-input v-model="selfform.credit" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item key='accumulateLevel' :disabled="isLeiJi" label="累积级别" label-width="120px" prop="accumulateLevel">
            <el-input v-model="selfform.accumulateLevel" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item key='joinMoney' label="会员加盟总额"  label-width="120px" prop="joinMoney">
            <el-input v-model="selfform.joinMoney" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="会员身份" label-width="120px" prop="userType">
            <el-select class="select-user-type" v-model="selfform.userType" @change="handleUserTypeChange">
              <el-option label="充值会员" value="充值会员"></el-option>
              <el-option label="累积会员" value="累积会员"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="会员加盟余额" label-width="120px" prop="joinMoneyRest" required>
            <el-input v-model="selfform.joinMoneyRest" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="累积消费金额" label-width="120px" prop="accumulateCost" required>
            <el-input v-model="selfform.accumulateCost" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="累积消费级别" label-width="120px" prop="accumulateLevel" required>
            <el-input v-model="selfform.accumulateLevel" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="联系方式" label-width="120px" prop="phone">
            <el-input v-model="selfform.phone" auto-complete="off" type=number></el-input>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleToggleFormVisible">取 消</el-button>
        <el-button type="primary" @click="handleSubmit('userform')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {modifyUser} from '@/api/user';

export default {
  name: 'user-modify-dialog',
  data () {
    return {
      // //表单数据
      // userform: {
      //   number: '',
      //   name: '',
      //   credit: '',
      //   userType: '',
      //   joinMoney: '',
      //   joinMoneyRest: '',
      //   accumulateCost: '',
      //   accumulateLevel: '',
      //   date: '',
      //   phone: ''
      // },
      selfform: {},
      labelPosition: 'right',
      //是否是累积会员
      isLeiJi: false,
      //表单匹配规则
      rules: {
        name: [
          {
            required: true, message: '请填写账号或者姓名', trigger: 'blur'
          }
        ],
        number: [
          {
            required: true, message: '请填写编号', trigger: 'blur'
          }
        ],
        accumulateLevel: [
          {
            required: true, message: '请填写累积级别', trigger: 'blur'
          }
        ],
        joinMoney: [
          {
            required: true, message: '请填写会员加盟总额', trigger: 'blur'
          }
        ],
        userType: [
          {
            required: true, message: '请选择会员身份', trigger: 'change'
          }
        ],
        phone: [
          {
            required: false, trigger: 'blur'
          }
        ]
      }
    }
  },
  props: [
    //是否弹窗添加会员表单
    'dialogModifyFormVisible',
    //表单数据
    'userform'
  ],
  computed: {
    dialogFormVisible () {
      return this.dialogModifyFormVisible;
    }
  },
  methods: {
    // 打开弹窗进行数据初始化
    initOpen () {
      this.selfform = Object.assign({}, this.userform);
      console.log(this.selfform)
      console.log(`initOpen`)
    },
    //处理select表单选中值发生变化
    handleUserTypeChange (item) {
      console.log(item);
    },
    //处理显示弹窗
    handleToggleFormVisible () {
      this.resetForm('userform');
      this.$bus.emit('toggleModifyFormVisible');
    },
    //重置表单 取消了重置表单，因为会影响数据
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    //提交登陆信息
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //这里写请求
          modifyUser({
            ...this.selfform
          })
          .then(({data}) => {
            this.$notify({
              showClose: true,
              message: `修改会员${this.selfform.name}成功`,
              type: 'success'
            });
            //修改会员信息后，在页面直接更新数据
            this.$bus.emit('updateModifyUsers', Object.assign({}, this.selfform));
            this.handleToggleFormVisible();
          }, (error) => {
            this.$notify({
              showClose: true,
              message: '修改失败，请重新尝试',
              type: 'error'
            });
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.user {
  .modify-dialog.el-dialog {
      width: 55%;
  }

  .select-user-type {
    width: 169px;
  }
}
</style>
