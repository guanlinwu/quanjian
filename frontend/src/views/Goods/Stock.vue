<template>
  <div class="stock">
    <div class="head-box">
          <el-autocomplete
            class="inline-input"
            v-model="inputCnt"
            icon="search"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
            :on-icon-click="handleIconClick"
          ></el-autocomplete>
          <el-button class="btn-batch" type="primary">批量入库<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button type="text">批量模版下载</el-button>
        </div>

        <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 500px"
              >
              <el-table-column
                type="index"
                width="50">
              </el-table-column>
              <el-table-column
                fixed
                prop="name"
                label="名称"
                width="100">
              </el-table-column>
              <el-table-column
                prop="number"
                label="编号"
                width="100">
              </el-table-column>
              <el-table-column
                prop="stock"
                label="商品库存"
                >
              </el-table-column>

              <el-table-column label="操作" width="140" fixed="right">
                <template scope="scope">
                  <el-button @click="handleDelivery(scope.$index, scope.row)"
                    size="small"
                    type="primary"
                    >入库</el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelivery(scope.$index, scope.row, false)"
                    >出库</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      //搜索框内容
      inputCnt: '',
      //搜索框查询建议列表数据
      recommends: [
        { 'value': '三全鲜食（北新泾店）' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ],
      //表格数据
      tableData: [{
        number: '0123',
        name: 'xxx',
        stock: '3453'
      }, {
        number: '0123',
        name: 'xxx',
        stock: '3453'
      }, {
        number: '0123',
        name: 'xxx',
        stock: '3453'
      }]
    }
  },
  methods: {
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
    //入库和出库, state：是入库还是出库，默认为入库
    handleDelivery (insex, row, state = true) {
      let _state = state,
        tips = _state ? '请输入入库的库存量（正整数）' : '请输入出库的库存量（正整数）',
        type = _state ? 'success' : 'warning',
        message = _state ? '入库量： ' : '出库量： ';

      this.$prompt(tips, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\d+$/,
        inputErrorMessage: '库存变动量格式不正确, 必须是数字'
      }).then(({ value }) => {
        this.$message({
          type: type,
          message: message + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.stock {
  .head-box {
    padding: 0 0 10px 0;

    .btn-add, .btn-batch {
        margin-left: 20px
    }
  }

}
</style>
