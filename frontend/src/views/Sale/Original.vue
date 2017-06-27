<template>
  <div class="original">
    <div v-if="!isBilling" class="billing-start">
      <el-button size="large" class="btn-billing" type="primary">开单</el-button>
    </div>
    <div v-else>
      <el-tabs v-model="activeName" :style="{minHeight: '768px'}" type="border-card" @tab-click="handleTabClick">
        <el-tab-pane label="产品选择" name="goodsChoose">
          <GoodsChoose :pickGoods="pickGoods"></GoodsChoose>
        </el-tab-pane>

        <el-tab-pane name="pickCard">
          <span slot="label">
            选购车-半价
            <el-badge :value="badgeNum" :max="99" class="badge">
            </el-badge>
          </span>

          <el-row>
            <el-col :span="5">
              <div class="user-search-box e-pick">
                <h3 class="title">会员信息</h3>
                <UserCard v-if="Object.keys(this.userData).length > 0" :userData="userData"></UserCard>
                <div class="pay-box">
                  <el-form :model="payForm" ref="payForm" label-width="80px" label-position="left">
                    <el-form-item :style="{marginBottom: '10px'}" label="支付方式" prop="payWay"
                      :rules="[
                        { required: true, message: '请选择支付方式', trigger: 'blur' }
                      ]"
                    >
                      <el-select size="small" class="select-pay-type" v-model="payForm.payWay">
                        <el-option label="现金" value="xianjin"></el-option>
                        <el-option label="微信支付" value="weixin"></el-option>
                        <el-option label="支付宝" value="zhifubao"></el-option>
                        <el-option label="银行卡" value="bandcard"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :style="{marginBottom: '10px'}" label="是否累积" label-width="80px" prop="isLeiji" required>
                      <el-radio-group v-model="payForm.isLeiji">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                  <ul class="pay-info-list">
                    <li class="item">
                      <span>赠送积分</span>
                      <p>{{payinfo.credit}}</p>
                    </li>
                    <li class="item">
                      <span>账单金额</span>
                      <p class="price"><span class="yuan">¥</span>{{payinfo.totalPrice}}</p>
                    </li>
                    <!--<li class="item">
                      <span>折后金额</span>
                      <p class="price"><span class="yuan">¥</span>{{payinfo.discountPrice}}</p>
                    </li>-->
                  </ul>
                  <div class="pay-action">
                    <el-button class="btn-pay" @click="settle" type="success">收款</el-button>
                    <el-button class="btn-pay" @click="clear" type="danger">清空</el-button>
                  </div>
                </div>
              </div>
            </el-col>

            <el-col :span="19">
              <div class="head-box">
                <h3 class="title">
                  选购产品信息
                </h3>
              </div>

              <el-row>
                <el-col :span="24">
                  <el-table
                  :data="pickGoods"
                  max-height="500"
                  style="width: 100%"
                  >
                    <el-table-column
                      type="index"
                      width="50">
                    </el-table-column>
                    <el-table-column
                      fixed
                      prop="name"
                      label="名称"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="number"
                      label="编号"
                      width="80">
                    </el-table-column>
                    <el-table-column
                      prop="price"
                      label="单价"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="credit"
                      label="积分"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="resultPrice"
                      label="小计"
                      width="100">
                      <template scope="scope">
                        {{scope.row.saleNum * scope.row.price}}
                      </template>
                    </el-table-column>
                    <el-table-column label="数量">
                      <template scope="scope">
                        <el-input-number class="input-number" v-model="scope.row.saleNum" @change="handleSaleNum" :min="1" size="small"></el-input-number>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" width="80" fixed="right">
                      <template scope="scope">
                        <el-button @click="handleDeletePickGoods(scope.$index, scope.row)"
                          size="small"
                          type="danger"
                          >移除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
            </el-col>
          </el-row>


        </el-tab-pane>
      </el-tabs>


    </div>
  </div>
</template>

<script>
import GoodsChoose from '@/components/Sale/GoodsChoose';
import UserCard from '@/components/Sale/UserCard';

export default {
  name: 'half',
  data () {
    return {
      //是否正在开单
      isBilling: true,
      //当前活跃tab名称
      activeName: 'goodsChoose',

      //搜索出用户数据
      userData: {},
      //支付表单
      payForm: {
        //支付方式
        payWay: '',
        //是否累积
        isLeiji: 1
      },
      //选购车选购产品信息
      pickGoods: [],

      //赠送积分
      credit: 0
    }
  },
  components: {
    GoodsChoose,
    UserCard
  },
  created () {
    this.$bus.on('setUserData', this.setUserData);
    this.$bus.on('addPickGoods', this.addPickGoods);
  },
  computed: {
    //小标点数量
    badgeNum () {
      return this.pickGoods.length;
    },
    //账单金额 折后金额 赠送积分
    payinfo () {
      let totalPrice = 0,
        discountPrice = 0,
        credit = 0;

      this.pickGoods.forEach((item, index) => {
        totalPrice += item.price * item.saleNum;
        credit += item.credit * item.converRate * item.saleNum;
      });

      discountPrice = totalPrice / 2;

      return {
        totalPrice,
        discountPrice,
        credit
      };
    }
  },
  methods: {
    //tab
    handleTabClick (tab, event) {
      console.log(tab);
    },
    //从选购车删除商品
    handleDeletePickGoods (index, row) {
      this.$message({
        message: `成功添加 ${this.pickGoods[index].name}`,
        type: 'success',
        duration: 1500
      });
      this.pickGoods.splice(index, 1);
    },
    //处理选购车项产品数量
    handleSaleNum (value) {
      // console.log(value);
      // console.log(this.pickGoods);
    },
    setUserData (userData) {
      this.userData = userData;
    },
    addPickGoods (item) {
      let hasIt = false,
        number = item.number;

      this.pickGoods.forEach((_item, index, pickGoodsArray) => {
        let _number = _item.number;
        /**
         * 如果已经存在
         */
        if (number === _number) {
          let newItem = {
            ...pickGoodsArray[index],
            saleNum: _item.saleNum + 1
          }
          this.pickGoods.splice(index, 1, newItem);
          hasIt = true;
        }
      });

      /**
       * 如果没有存在
       */
      !hasIt && this.pickGoods.push({
        ...item,
        saleNum: 1
      });

      this.$message({
        message: `成功添加 ${item.name}`,
        type: 'success',
        duration: 1500
      });
    },
    //清空
    clear () {
      this.pickGoods = [];
    },
    //收款
    settle () {
      let discountPrice = this.payinfo.discountPrice;
      discountPrice > 0 ? this.$message({
        message: `收款成功， 折后金额${this.payinfo.discountPrice}`,
        type: 'success',
        duration: 1500
      }) : this.$message({
        message: `金额为0，请添加商品到选购车哦！`,
        type: 'error',
        duration: 1500
      });
      this.clear();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.original {
  padding: 16px 16px 0 0;

  // 开单模块
  .billing-start {
    padding-top: 100px;
    text-align: center;

    .btn-billing {
      width: 90px;
      height: 120px;
      font-size: 18px;
      border-radius: 50%;
    }
  }

  .head-box {
    padding-bottom: 16px;

    .title {
      font-size: 16px;
      line-height: 36px;
      font-weight: 300;
    }
  }
  // 小标点
  .badge {
    transform: translate(-10px, -10px);
  }

  // 产品分类选择
  .select {
    margin-right: 16px;
    width: 160px;
  }

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

  //计数器
  .input-number {
    // margin-top: 10px;
  }

  .select-pay-type {
    width: 120px;
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
