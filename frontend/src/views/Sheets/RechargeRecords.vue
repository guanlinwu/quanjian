<template>
  <div class="recharge-records">
    <div class="head-box">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
        <el-col :span="5">
          <el-form-item label="会员">
            <el-input v-model="searchForm.userName"></el-input>
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
        <el-col :span="1">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-form>
    </div>

    <el-row>
      <el-col :span="24">
        <el-table
          :data="tableData"
          style="width: 850px"
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
            prop="price"
            label="充值金额"
            width="150">
          </el-table-column>
          <el-table-column
            prop="type"
            label="充值方式"
            width="150">
          </el-table-column>
          <el-table-column
            prop="resultPrice"
            label="充值后余额"
            width="150">
          </el-table-column>
          <el-table-column
            prop="date"
            label="充值时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="manage"
            label="操作员">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <div class="sum">
      <span class="title">合计充值金额：</span>
      <span class="content">¥293849</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recharge-records',
  data () {
    return {
      searchForm: {
        // 会员
        userName: '',
        //交易时间
        payTimeBegin: '',
        payTimeEnd: ''
      },
      //表格数据
      tableData: [{
        //姓名
        name: 'xxx',
        //方式
        type: '首次加盟',
        //金额
        price: '3500',
        // 收入金额
        resultPrice: '232323',
        // 统计日期
        date: '2016-06-06',
        // 操作员
        manage: 'xxx'
      }, {
        //姓名
        name: 'xxx',
        //方式
        type: '首次加盟',
        //金额
        price: '3500',
        // 收入金额
        resultPrice: '232323',
        // 统计日期
        date: '2016-06-06',
        // 操作员
        manage: 'xxx'
      }, {
        //姓名
        name: 'xxx',
        //方式
        type: '首次加盟',
        //金额
        price: '3500',
        // 收入金额
        resultPrice: '232323',
        // 统计日期
        date: '2016-06-06',
        // 操作员
        manage: 'xxx'
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
