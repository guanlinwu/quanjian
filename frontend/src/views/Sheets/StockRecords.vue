<template>
  <div class="stock-records">
    <div class="head-box">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
        <el-col :span="5">
          <el-form-item label="商品">
            <el-input v-model="searchForm.goodsName"></el-input>
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
          style="width: 800px"
          >
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="变更日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="goodsNumber"
            label="产品编码"
            width="120">
          </el-table-column>
          <el-table-column
            prop="goodsName"
            label="产品名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="changeType"
            label="变更类型"
            width="120">
          </el-table-column>
          <el-table-column
            prop="changeNumber"
            label="变更数量">
          </el-table-column>
          <el-table-column
            prop="latestStock"
            label="变更后库存">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'stock-records',
  data () {
    return {
      searchForm: {
        // 商品
        goodsName: '',
        //交易时间
        payTimeBegin: '',
        payTimeEnd: ''
      },
      //表格数据
      tableData: [{
        date: '2016-06-06',
        goodsNumber: '23213213',
        goodsName: '麦芽精',
        changeType: '出库',
        changeNumber: '-2',
        latestStock: '222'
      }, {
        date: '2016-06-06',
        goodsNumber: '23213213',
        goodsName: '麦芽精',
        changeType: '入库',
        changeNumber: '22',
        latestStock: '22322'
      }, {
        date: '2016-06-06',
        goodsNumber: '23213213',
        goodsName: '麦芽精',
        changeType: '入库',
        changeNumber: '22',
        latestStock: '22322'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
