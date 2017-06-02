<template>
  <div class="user-dialog">
    <el-dialog title="添加会员信息" :visible.sync="dialogFormVisible" :before-close="handleToggleFormVisible">
      <el-form :inline="true" :model="userform" ref="userform" :rules="rules">
          <el-form-item label="姓名" label-width="110px" prop="name">
            <el-input v-model="userform.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="编号" label-width="110px" prop="number" required>
            <el-input v-model="userform.number" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="会员身份" label-width="110px" prop="userType">
            <el-select class="select-user-type" v-model="userform.userType" @change="handleUserTypeChange">
              <el-option label="充值会员" value="chongzhi"></el-option>
              <el-option label="累积会员" value="leiji"></el-option>
            </el-select>
          </el-form-item>
          <!-- 判断累积会员还是充值会员 -->
          <el-form-item v-if="isLeiJi" key='accumulateLevel' :disabled="isLeiJi" label="累积级别" label-width="110px" prop="accumulateLevel">
            <el-input v-model="userform.accumulateLevel" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item v-else key='joinMoney' label="会员加盟总额" label-width="110px" prop="joinMoney">
            <el-input v-model="userform.joinMoney" auto-complete="off" type=number></el-input>
          </el-form-item>
          <!-- 判断累积会员还是充值会员 end -->
          <el-form-item label="联系方式" label-width="110px" prop="phone">
            <el-input v-model="userform.phone" auto-complete="off" type=number></el-input>
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
import {createUser} from '@/api/user';

export default {
  name: 'user-add-dialog',
  data () {
    return {
      //表单数据
      userform: {
        name: '',
        number: '',
        joinMoney: '',
        userType: '',
        phone: '',
        accumulateLevel: ''
      },
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
    'dialogAddFormVisible'
  ],
  computed: {
    dialogFormVisible () {
      return this.dialogAddFormVisible;
    }
  },
  methods: {
    //处理select表单选中值发生变化
    handleUserTypeChange (item) {
      console.log(item);
      this.isLeiJi = item === 'leiji';
    },
    //处理显示弹窗
    handleToggleFormVisible () {
      this.resetForm('userform');
      this.$bus.emit('toggleAddFormVisible');
    },
    //重置表单
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    //提交登陆信息
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //这里写请求
          createUser({
            ...this.userform
          })
          .then(({data}) => {
            console.log(data);
            this.handleToggleFormVisible();
            this.$notify({
              showClose: true,
              message: `创建会员${this.userform.name}成功`,
              type: 'success'
            });
          }, (error) => {
            this.$notify({
              showClose: true,
              message: '创建失败，请重新尝试',
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
<style lang="scss" scoped>
.select-user-type {
  width: 169px;
}
</style>
