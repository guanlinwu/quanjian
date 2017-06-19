<template>
  <div class="recharge-records">
    <div class="head-box">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
        <el-form-item class="form-item"  label="会员" label-width="40px">
          <el-autocomplete
              v-model="searchForm.userName"
              :fetch-suggestions="querySearchUser"
              placeholder="用户名称/编号/手机号"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
        </el-form-item>
        <el-form-item class="form-item" label="交易时间">
          <el-date-picker type="date" placeholder="选择开始日期" v-model="searchForm.payTimeBegin"></el-date-picker>
          <span>-</span>
          <el-date-picker type="date" placeholder="选择结束日期" v-model="searchForm.payTimeEnd"></el-date-picker>
        </el-form-item>
        <el-button @click="search" type="primary" style="float: right;margin-right: 16px;">搜索</el-button>
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
      <span class="content">¥{{sum}}</span>
    </div>
  </div>
</template>

<script>
import {getUsersRecommend} from '@/api/user';
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
        price: '3222500',
        // 收入金额
        resultPrice: '323',
        // 统计日期
        date: '2016-06-06',
        // 操作员
        manage: 'xxx'
      }],
      userRecommends: [],
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

  .title {

  }
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
