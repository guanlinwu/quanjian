<template>
  <div class="half">
    <div v-if="!isBilling" class="billing-start">
      <el-button size="large" class="btn-billing" type="primary">开单</el-button>
    </div>
    <div v-else>
      <el-tabs v-model="activeName" :style="{minHeight: '768px'}" type="border-card" @tab-click="handleTabClick">
        <el-tab-pane label="产品选择" name="goodsChoose">

          <el-row>
            <el-col :span="5">
              <div class="user-search-box">
                <h3 class="title">会员选择</h3>
                <el-autocomplete
                  class="user-search-input"
                  v-model="inputUserCnt"
                  size="small"
                  icon="search"
                  :fetch-suggestions="queryUserSearch"
                  placeholder="请输入产品名称"
                  :trigger-on-focus="false"
                  @select="handleUserSelect"
                  :on-icon-click="handleIconUserClick"
                ></el-autocomplete>

                <UserCard :userData="userData"></UserCard>
              </div>
            </el-col>

            <el-col :span="19">
              <div class="head-box">
                <el-select v-model="type" placeholder="请选择产品分类" class="select">
                  <el-option
                    v-for="item in typeArr"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-autocomplete
                v-model="inputCnt"
                icon="search"
                :fetch-suggestions="querySearch"
                placeholder="请输入产品名称"
                :trigger-on-focus="false"
                @select="handleSelect"
                :on-icon-click="handleIconClick"
              ></el-autocomplete>
              </div>

              <el-row>
                <el-col :span="24">
                  <el-table
                  :data="goodsTable"
                  style="width: 100%"
                  >
                  <!--<el-table-column
                    type="index"
                    width="50">
                  </el-table-column>-->
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
                    prop="standard"
                    label="规格"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="单价"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="converRate"
                    label="积分折算率"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="credit"
                    label="积分"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="isSpecial"
                    label="特殊商品"
                    >
                  </el-table-column>
                    </el-table-column>
                    <el-table-column label="操作" width="80" fixed="right">
                      <template scope="scope">
                        <el-button @click="handleAddGoods(scope.$index, scope.row)"
                          size="small"
                          type="primary"
                          >添加</el-button>

                      </template>
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
            </el-col>

          </el-row>
        </el-tab-pane>



        <el-tab-pane name="pickCard">
          <span slot="label">
            选购车
            <el-badge :value="badgeNum" :max="99" class="badge">
            </el-badge>
          </span>

          <el-row>
            <el-col :span="5">
              <div class="user-search-box e-pick">
                <h3 class="title">会员信息</h3>
                <UserCard :userData="userData"></UserCard>
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
                      <p>6778</p>
                    </li>
                    <li class="item">
                      <span>账单金额</span>
                      <p class="price"><span class="yuan">¥</span>673</p>
                    </li>
                    <li class="item">
                      <span>折后金额</span>
                      <p class="price"><span class="yuan">¥</span>622</p>
                    </li>
                  </ul>
                  <div class="pay-action">
                    <el-button class="btn-pay" type="success">收款</el-button>
                    <el-button class="btn-pay" type="danger">清空</el-button>
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
                  :data="pickGoodsTable"
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
// import UserSearchBox from '@/components/Sale/UserSearchBox';
import UserCard from '@/components/Sale/UserCard';

export default {
  name: 'half',
  data () {
    return {
      //是否正在开单
      isBilling: true,
      //当前活跃tab名称
      activeName: 'goodsChoose',
      //产品搜索框内容
      inputCnt: '',
      //产品搜索框查询建议列表数据
      recommends: [
        { 'value': '2222' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ],
      //用户搜索框内容
      inputUserCnt: '',
      //用户搜索框查询建议列表数据
      recommendsUser: [
        { 'value': '2222' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ],
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
      //产品类型选择select表单数据
      typeArr: [{
        value: '选项1',
        label: '1'
      }, {
        value: '选项2',
        label: '2'
      }, {
        value: '选项3',
        label: '3'
      }, {
        value: '选项4',
        label: '4'
      }, {
        value: '选项5',
        label: '5'
      }],
      //产品类型
      type: '',
      //支付表单
      payForm: {
        //支付方式
        payWay: '',
        //是否累积
        isLeiji: 1
      },
      //产品选择表格数据
      goodsTable: [{
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '是',
        goodsType: '本草'
      }, {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '是',
        goodsType: '本草'
      }, {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '是',
        goodsType: '本草'
      }],
      //选购车选购产品信息
      pickGoodsTable: [{
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        goodsType: '本草',
        saleNum: 5
      },
      {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '400',
        converRate: '0.9',
        credit: '200',
        goodsType: '本草',
        saleNum: 1
      },
      {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '140',
        converRate: '0.9',
        credit: '200',
        goodsType: '本草',
        saleNum: 2
      },
      {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '140',
        converRate: '0.9',
        credit: '200',
        goodsType: '本草',
        saleNum: 2
      },
      {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '140',
        converRate: '0.9',
        credit: '200',
        goodsType: '本草',
        saleNum: 2
      },
      {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '140',
        converRate: '0.9',
        credit: '200',
        goodsType: '本草',
        saleNum: 2
      }]
    }
  },
  components: {
    UserCard
  },
  computed: {
    //小标点数量
    badgeNum () {
      return this.pickGoodsTable.length;
    }
  },
  methods: {
    handleTabClick (tab, event) {
      console.log(tab);
    },
    //搜索框查询建议
    querySearch (queryString, cb) {
      // 调用 callback 返回建议列表的数据
      cb(this.recommends);
    },
    //搜索框查询按钮
    handleIconClick () {
    },
    //搜索框处理选中建议项
    handleSelect (item) {
      console.log(item);
    },
    //用户搜索框查询建议
    queryUserSearch (queryString, cb) {
      // 调用 callback 返回建议列表的数据
      cb(this.recommendsUser);
    },
    //用户搜索框查询按钮
    handleIconUserClick () {
    },
    //用户搜索框处理选中建议项
    handleUserSelect (item) {
      console.log(item);
    },
    //添加商品
    handleAddGoods (index, row) {
      console.log(row)
    },
    //从选购车删除商品
    handleDeletePickGoods (index, row) {
      console.log(row)
    },
    //处理选购车项产品数量
    handleSaleNum (value) {
      console.log(value);
      // console.log(this.pickGoodsTable);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.half {
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
    margin-top: 10px;
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
