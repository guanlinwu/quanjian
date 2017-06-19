<template>
  <div class="sale-records">
    <div class="head-box">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
          <el-form-item class="form-item" label="会员">
              <el-autocomplete
              v-model="searchForm.userName"
              :fetch-suggestions="querySearchUser"
              placeholder="用户名称/编号/手机号"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item class="form-item" label="商品">
            <el-autocomplete
              v-model="searchForm.goodsName"
              :fetch-suggestions="querySearchGoods"
              placeholder="产品名称/编号"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item class="form-item" label="商品类别">
            <el-select class="select" v-model="searchForm.goodsType" placeholder="请选择商品类型">
              <el-option label="xxx1" value="xxx1"></el-option>
              <el-option label="xxx2" value="xxx2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="form-item" label="折扣方式">
            <el-select class="select" v-model="searchForm.discountWay" placeholder="请选择商品类型">
              <el-option label="xxx1" value="xxx1"></el-option>
              <el-option label="xxx2" value="xxx2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="交易时间" class="form-item">
            <el-date-picker type="date" placeholder="选择开始日期" v-model="searchForm.payTimeBegin"></el-date-picker>
            <span>-</span>
            <el-date-picker type="date" placeholder="选择结束日期" v-model="searchForm.payTimeEnd"></el-date-picker>
          </el-form-item>
          <el-button style="float: right;margin-right: 16px;" @click="search" type="primary">搜索</el-button>
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
      <span class="content">¥{{sum}}</span>
    </div>
  </div>
</template>

<script>
import {getUsersRecommend} from '@/api/user';
import {getGoodsRecommend} from '@/api/goods';

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
      }],
      userRecommends: [],
      goodsRecommends: [],
      searchTag: {
        timeout: 1000,
        timer: null
      }
    }
  },
  computed: {
    sum () {
      let _sum = 0;
      this.tableData.forEach((item) => {
        _sum += +item.price;
      });
      return _sum;
    }
  },
  methods: {
    /**
     * 搜索框查询建议
     * @param  {[String]}   queryString [搜索字段]
     * @param  {Function} cb          [回调函数]
     * @return
     */
    querySearchUser (queryString, cb) {
      /**
       * [获取请求建议并且显示数据]
       * @param  {[String]} queryString [搜索字段]
       */
      const getRecommends = (queryString) => {
        let _queryString = queryString;
        getUsersRecommend(_queryString)
        .then(({data}) => {
          this.userRecommends = data.recommends;
          /**
           * 调用 callback 返回建议列表的数据
           */
          cb(this.userRecommends);
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
.sum {
  margin-top: 16px;
  padding-left: 16px;
  font-size: 16px;
  line-height: 48px;
  border-radius: 4px;
  background: #fff;

  .content {
    margin-left: 16px;
    font-size: 18px;
    font-weight: 600;
  }
}
.form-item {
  display: inline-block;

}
.select {
  width: 169px;
}

</style>
