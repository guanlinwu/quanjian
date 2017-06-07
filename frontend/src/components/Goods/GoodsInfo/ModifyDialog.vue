<template>
  <div class="goods-dialog">
    <el-dialog  title="修改商品信息" custom-class="modify-dialog" :visible.sync="dialogFormVisible" :before-close="handleToggleFormVisible"  @open="initOpen">
      <el-form :inline="true" :model="selfform" ref="selfform" :rules="rules">
          <el-form-item label="名称" label-width="100px" prop="name">
            <el-input v-model="selfform.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="编号" label-width="100px" prop="number">
            <el-input v-model="selfform.number" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="价格" label-width="100px" prop="price">
            <el-input v-model="selfform.price" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="类别" label-width="100px" prop="goodsType">
            <el-select class="user-type" v-model="selfform.goodsType" @change="handleUserTypeChange">
              <el-option label="a" value="a"></el-option>
              <el-option label="b" value="b"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="规格" label-width="100px" prop="standard">
            <el-input v-model="selfform.standard" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="积分" label-width="100px" prop="price">
            <el-input v-model="selfform.credit" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="积分折算率" label-width="100px" prop="price">
            <el-input v-model="selfform.price" auto-complete="off" type=number></el-input>
          </el-form-item>
          <el-form-item label="特殊商品" label-width="100px" prop="isSpecial">
            <el-radio-group v-model="selfform.isSpecial">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleToggleFormVisible">取 消</el-button>
        <el-button type="primary" @click="handleSubmit('selfform')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {modifyGoods} from '@/api/goods';

export default {
  name: 'goods-modify-dialog',
  data () {
    return {
      //表单数据
      selfform: {},
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
    'dialogModifyFormVisible',
    'goodsform'
  ],
  computed: {
    dialogFormVisible () {
      return this.dialogModifyFormVisible;
    }
  },
  methods: {
    // 打开弹窗进行数据初始化
    initOpen () {
      this.selfform = Object.assign({}, this.goodsform);
    },
    //处理select表单选中值发生变化
    handleUserTypeChange (item) {
      console.log(item);
    },
    //处理显示弹窗
    handleToggleFormVisible () {
      this.resetForm('selfform');
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
          //这里写请求
          modifyGoods({
            ...this.selfform
          })
          .then(({data}) => {
            this.$notify({
              showClose: true,
              message: `修改会员${this.selfform.name}成功`,
              type: 'success'
            });
            //修改会员信息后，在页面直接更新数据
            this.$bus.emit('updateModifyGoods', Object.assign({}, this.selfform));
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
<style lang="scss" scoped>
.modify-dialog.el-dialog {
    width: 55%;
}

.user-type {
  width: 169px;
}
</style>
