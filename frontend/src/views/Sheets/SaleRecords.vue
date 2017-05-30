<template>
  <div class="sale-records">
    <div class="head-box">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
          <el-col :span="6">
            <el-form-item label="会员">
              <el-input v-model="searchForm.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="商品">
              <el-input v-model="searchForm.goodsName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="商品类别">
              <el-select v-model="searchForm.goodsType" placeholder="请选择商品类型">
                <el-option label="xxx1" value="xxx1"></el-option>
                <el-option label="xxx2" value="xxx2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="折扣方式">
              <el-select v-model="searchForm.discountWay" placeholder="请选择商品类型">
                <el-option label="xxx1" value="xxx1"></el-option>
                <el-option label="xxx2" value="xxx2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="14">
            <el-form-item label="交易时间">
                <el-col :span="9" style="padding-left: 0; padding-right: 0;">
                  <el-date-picker type="date" placeholder="选择开始日期" v-model="searchForm.payTimeBegin"></el-date-picker>
                </el-col>
                <el-col class="line" :span="1" style="margin-right: 10px;">-</el-col>
                <el-col :span="9" style="padding-left: 0; padding-right: 0;">
                  <el-date-picker type="date" placeholder="选择结束日期" v-model="searchForm.payTimeEnd"></el-date-picker>
                </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="1" :offset="6">
            <el-button type="primary">搜索</el-button>
          </el-col>
      </el-form>
    </div>

    <el-row>
      <el-col :span="24">
        <el-table
          :data="tableData"
          style="width: 100%"
          >
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="order"
            label="订单编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="discountWay"
            label="折扣类别"
            width="100">
          </el-table-column>
          <el-table-column
            prop="goods"
            label="商品名称"
            width="100">
          </el-table-column>
          <el-table-column
            prop="payTime"
            label="支付时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="payWay"
            label="支付方式"
            width="100">
          </el-table-column>
          <el-table-column
            prop="price"
            label="金额"
            width="100">
          </el-table-column>
          <el-table-column
            prop="credit"
            label="所获积分"
            >
          </el-table-column>
          <el-table-column label="操作" width="100" fixed="right">
              <template scope="scope">
                <el-button
                  size="small"
                  >打印发票</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <div class="sum">
      <span class="title">合计金额：</span>
      <span class="content">¥293849</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sale-records',
  data () {
    return {
      searchForm: {
        // 用户名称
        userName: '',
        // 商品
        goodsName: '',
        // 商品类别
        goodsType: '',
        // 折扣方式
        discountWay: '',
        //交易时间
        payTimeBegin: '',
        payTimeEnd: ''
      },
      //表格数据
      tableData: [{
        name: '王小虎',
        order: '012232323',
        discountWay: '全价',
        goods: '麦芽',
        payTime: '2016-6-6 23:23:23',
        payWay: '微信',
        price: '232323',
        credit: '7500'
      }, {
        name: '王小虎',
        order: '012232323',
        discountWay: '全价',
        goods: '麦芽',
        payTime: '2016-6-6 23:23:23',
        payWay: '微信',
        price: '232323',
        credit: '7500'
      }, {
        name: '王小虎',
        order: '012232323',
        discountWay: '半价',
        goods: '麦芽',
        payTime: '2016-06-06 23:23:23',
        payWay: '微信',
        price: '232323',
        credit: '7500'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sum {
  margin-top: 16px;
  padding-left: 16px;
  font-size: 16px;
  line-height: 48px;
  border-radius: 4px;
  background: #fff;

  .title {

  }
  .content {
    margin-left: 16px;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
