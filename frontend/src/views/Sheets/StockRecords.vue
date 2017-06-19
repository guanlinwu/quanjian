<template>
  <div class="stock-records">
    <div class="head-box">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
        <el-form-item class="form-item" label="商品" label-width="40px">
          <el-autocomplete
            v-model="searchForm.goodsName"
            :fetch-suggestions="querySearchGoods"
            placeholder="产品名称/编号"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item class="form-item" label="交易时间">
          <el-date-picker type="date" placeholder="选择开始日期" v-model="searchForm.payTimeBegin"></el-date-picker>
          <span>-</span>
          <el-date-picker type="date" placeholder="选择结束日期" v-model="searchForm.payTimeEnd"></el-date-picker>
        </el-form-item>
        </el-col>
        <el-button @click="search" type="primary" style="float: right;margin-right: 16px;">搜索</el-button>
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
import {getGoodsRecommend} from '@/api/goods';

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
      }],
      goodsRecommends: [],
      searchTag: {
        timeout: 1000,
        timer: null
      }
    }
  },
  methods: {
     /**
     * 搜索框查询建议
     * @param  {[String]}   queryString [搜索字段]
     * @param  {Function} cb          [回调函数]
     * @return
     */
    querySearchGoods (queryString, cb) {
      /**
       * [获取请求建议并且显示数据]
       * @param  {[String]} queryString [搜索字段]
       */
      const getRecommends = (queryString) => {
        let _queryString = queryString;
        getGoodsRecommend(_queryString)
        .then(({data}) => {
          this.goodsRecommends = data.recommends;
          /**
           * 调用 callback 返回建议列表的数据
           */
          cb(this.goodsRecommends);
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
    /**
     * 搜索框处理选中建议项
     * @param  {[Object]} item [选中项]
     */
    handleSelect (item) {
      this.searchTag.timeout = null;
      console.log(item)
    },
    search () {
      console.log('搜索字段为 ' + JSON.stringify(this.searchForm));
      alert('搜索字段为 ' + JSON.stringify(this.searchForm));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form-item {
  display: inline-block;

}
.select {
  width: 169px;
}
</style>
