<template>
  <div class="first-recharge">
    <el-row :gutter="20">
        <el-col :span="6">
          <div class="user-search-box e-pick">
            <h3 class="title">充值信息</h3>
            <div class="pay-box">
              <el-form :model="payForm" ref="payForm" label-width="80px" label-position="left">
                <el-form-item :style="{marginBottom: '10px'}" label="支付方式" prop="payWay"
                  :rules="[
                    { required: true, message: '请选择支付方式', trigger: 'blur' },
                  ]"
                >
                  <el-select size="small" class="select-pay-type" v-model="payForm.payWay">
                    <el-option label="现金" value="xianjin"></el-option>
                    <el-option label="微信支付" value="weixin"></el-option>
                    <el-option label="支付宝" value="zhifubao"></el-option>
                    <el-option label="银行卡" value="bandcard"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :style="{marginBottom: '10px'}" label="加盟金额" label-width="100px" prop="price"
                  :rules="[
                    { required: true, message: '请输入加盟金额', trigger: 'blur' },
                  ]"
                >
                  <el-input size="small" placeholder="请输入加盟金额" v-model="payForm.price" auto-complete="off" type=number></el-input>
                </el-form-item>
              </el-form>
              <ul class="pay-info-list">
                <li class="item">
                  <span>账单金额</span>
                  <p class="price"><span class="yuan">¥</span>673</p>
                </li>
              </ul>
              <div class="pay-action">
                <el-button class="btn-pay" type="success">收款</el-button>
              </div>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'first-recharge',
  data () {
    return {
      //搜索出用户数据
      userData: [
        {
          title: '编号:',
          content: '0002323'
        },
        {
          title: '姓名:',
          content: '新旺角'
        },
        {
          title: '会员加盟余额:',
          content: '2002320',
          isMoney: true
        },
        {
          title: '积分总额:',
          content: '80023'
        },
        {
          title: '会员身份:',
          content: '累积会员'
        },
        {
          title: '累积消费金额:',
          content: '23233',
          isMoney: true
        }
      ],
      //支付表单
      payForm: {
        //支付方式
        payWay: '',
        //金额
        price: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.first-recharge {
  margin: 16px 16px 0 0;
  padding: 16px;
  min-height: 768px;
  background: #fff;

  // 用户搜索模块
  .user-search-box {
    margin-right: 16px;
    border: 1px solid #d3dce6;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;

    &.e-pick {
      border: none;

      .content-list {
        border: 1px solid #d3dce6;
      }
    }

    h3.title {
      margin-bottom: 14px;
      font-size: 16px;
      line-height: 36px;
      font-weight: 300;
    }

    .user-search-input {
      display: inline-block;
      width: 90%;
      margin-bottom: 16px;
    }
  }
  //支付内容
  .pay-box {
    margin-top: 16px;

    .btn-pay {
      width: 76px;
      // height: 30px;
      // line-height: 30px;
      margin: 0 12px;
    }
  }

  .pay-info-list {
    padding-left: 8px;

    .item {
      position: relative;
      padding: 11px 12px 11px 80px;
      margin-bottom: 8px;
      font-size: 14px;
      color: #48576a;
      line-height: 1;

      >span {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      >p {
        text-align: right;
        font-weight: 600;

        &.price {
          color: #8b572a;
        }
      }

      .yuan {
        margin-right: 4px;
      }
    }
  }
}
</style>
