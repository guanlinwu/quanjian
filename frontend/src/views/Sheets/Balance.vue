<template>
  <div class="balance">
    <div class="head-box">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
        <el-col :span="5">
          <el-form-item label="操作员">
            <el-input v-model="searchForm.manage"></el-input>
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
          style="width: 450px"
          >
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="统计日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="price"
            label="收入"
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
      <span class="title">合计收入金额：</span>
      <span class="content">¥293849</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'balance',
  data () {
    return {
      searchForm: {
        // 操作员
        manage: '',
        //交易时间
        payTimeBegin: '',
        payTimeEnd: ''
      },
      //表格数据
      tableData: [{
        // 统计日期
        date: '2016-06-06',
        // 收入金额
        price: '232323',
        // 操作员
        manage: 'xxx'
      }, {
        // 统计日期
        date: '2016-06-06',
        // 收入金额
        price: '232323',
        // 操作员
        manage: 'xxx'
      }, {
        // 统计日期
        date: '2016-06-06',
        // 收入金额
        price: '232323',
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
