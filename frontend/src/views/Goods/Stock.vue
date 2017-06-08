<template>
  <div class="stock">
    <div class="head-box">
        <el-autocomplete
          class="inline-input"
          v-model="inputCnt"
          icon="search"
          :fetch-suggestions="querySearch"
          placeholder="请输入产品名称/编号"
          :trigger-on-focus="false"
          @select="handleSelect"
          :on-icon-click="handleIconClick"
        ></el-autocomplete>
        <el-button class="btn-add" @click="resetList(1)" type="primary">显示全部<i class="el-icon-menu el-icon--right"></i></el-button>
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

          <!--分页器-->
          <div class="u-pagination">
            <el-pagination
              :current-page="currentPage"
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
              :total="totalPage">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import {getStockList, getStockItem, getStockRecommend, modifyStock} from '@/api/stock';

export default {
  name: 'stock',
  data () {
    return {
      //分页器-当前页
      currentPage: 1,
      //分页器-总页数 1页 = 10
      totalPage: 100,
      //搜索框内容
      inputCnt: '',
      //搜索框查询建议列表数据
      recommends: [],
      searchTag: {
        timeout: 1000,
        timer: null
      },
      //表格数据
      tableData: []
    }
  },
  created () {
    //请求加载数据
    this.fetchList(this.currentPage);
  },
  methods: {
    /**
     * 搜索框查询建议
     * @param  {[String]}   queryString [搜索字段]
     * @param  {Function} cb          [回调函数]
     * @return
     */
    querySearch (queryString, cb) {
      /**
       * [获取请求建议并且显示数据]
       * @param  {[String]} queryString [搜索字段]
       */
      const getRecommends = (queryString) => {
        let _queryString = queryString;
        getStockRecommend(_queryString)
        .then(({data}) => {
          this.recommends = data.recommends;
          /**
           * 调用 callback 返回建议列表的数据
           */
          cb(this.recommends);
        });
      };

      let _timeout = this.searchTag.timeout;

      if (this.searchTag.timeout === null) {

        this.searchTag.timeout = setTimeout(getRecommends, _timeout);
      } else {
        clearTimeout(this.searchTag.timeout);
        this.searchTag.timeout = setTimeout(getRecommends, _timeout);
      }
    },
    //搜索框查询按钮
    handleIconClick () {
    },
    /**
     * 搜索框处理选中建议项
     * @param  {[Object]} item [选中项]
     */
    handleSelect (item) {
      let id = item.id;
      //请求单个用户信息
      getStockItem(id)
      .then(({data}) => {
        this.tableData = new Array(data.stock);
        this.totalPage = data.totalPage ? data.totalPage * 10 : 10;
      });
    },
    //入库和出库, state：是入库还是出库，默认为入库
    handleDelivery (index, row, state = true) {
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
        //这里发送请求
        modifyStock({value, _state})
        .then(() => {
          if (!_state && +value > +row.stock) {
            this.$message({
              type: 'error',
              message: '操作失败，库存不足'
            });
            return;
          }

          this.tableData = [
            ...this.tableData.slice(0, index),
            {
              ...row,
              stock: !_state ? +row.stock - value : +row.stock + +value
            },
            ...this.tableData.slice(index + 1)
          ];
          //成功提示
          this.$message({
            type: type,
            message: message + value
          });
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
        /**
     * 分页器-页面变换的时候
     * @param  {[Number]} val [跳转页码]
     */
    handleCurrentChange (val) {
      if (!(val > this.totalPage / 10)) {
        this.currentPage = val;
        //请求加载数据
        this.fetchList(this.currentPage);
      }
    },
    /**
     * 显示全部信息，把当前页重置为第一页，把搜索框的内容清空
     * @param  {[Number]} page [跳转页]
     */
    resetList (page) {
      this.inputCnt = '';
      this.currentPage = page;
      this.fetchList(this.currentPage);
    },
    /**
     * 请求页数，获取用户数据列表并更新
     * @param  {[Number]} currentPage [当前页]
     */
    fetchList (currentPage) {
      getStockList(currentPage)
      .then(({data}) => {
        this.tableData = data.stockList;
        this.totalPage = data.totalPage * 10;
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
