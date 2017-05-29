<template>
  <div class="goods-dialog">
    <el-dialog  title="修改商品信息" custom-class="modify-dialog" :visible.sync="dialogFormVisible" :before-close="handleToggleFormVisible">
      <el-form :inline="true" :model="goodsform" ref="goodsform" :rules="rules">
          <el-form-item label="名称" label-width="100px" prop="name">
            <el-input v-model="goodsform.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="编号" label-width="100px" prop="number">
            <el-input v-model="goodsform.number" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="价格" label-width="100px" prop="price">
            <el-input v-model="goodsform.price" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="积分折算率" label-width="100px" prop="price">
            <el-input v-model="goodsform.price" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="积分" label-width="100px" prop="price">
            <el-input v-model="goodsform.credit" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="特殊商品" label-width="100px" prop="isSpecial">
            <el-radio-group v-model="goodsform.isSpecial">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="类别" label-width="100px" prop="goodsType">
            <el-select class="user-type" v-model="goodsform.goodsType" @change="handleUserTypeChange">
              <el-option label="a" value="a"></el-option>
              <el-option label="b" value="b"></el-option>
            </el-select>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleToggleFormVisible">取 消</el-button>
        <el-button type="primary" @click="handleSubmit('goodsform')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'goods-modify-dialog',
  data () {
    return {
      //表单数据
      goodsform: {
        number: '',
        name: '',
        standard: '',
        price: '',
        converRate: '',
        credit: '',
        isSpecial: 1,
        goodsType: ''
      },
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
        standard: [
          {
            required: true, message: '请填写规格', trigger: 'blur'
          }
        ],
        price: [
          {
            required: true, message: '请填写价格', trigger: 'blur'
          }
        ],
        converRate: [
          {
            required: true, message: '请填写积分折算率', trigger: 'blur'
          }
        ],
        credit: [
          {
            required: true, message: '请填写积分', trigger: 'blur'
          }
        ],
        isSpecial: [
          {
            required: true, message: '请填写特殊商品', trigger: 'blur'
          }
        ],
        goodsType: [
          {
            required: true, message: '请填写类别', trigger: 'blur'
          }
        ]
      }
    }
  },
  props: [
    //是否弹窗添加会员表单
    'dialogModifyFormVisible'
  ],
  computed: {
    dialogFormVisible () {
      return this.dialogModifyFormVisible;
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
      this.resetForm('goodsform');
      this.$bus.emit('toggleGoodsModifyFormVisible');
    },
    //重置表单
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    //提交登陆信息
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.handleToggleFormVisible();
          //这里写请求
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

  .user-type {
    width: 169px;
  }
}
</style>
