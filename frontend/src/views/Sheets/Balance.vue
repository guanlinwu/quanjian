<template>
  <div class="balance">
    <div class="head-box">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
        <el-form-item class="form-item" label="操作员" label-width="60px">
          <el-autocomplete
              v-model="searchForm.manage"
              :fetch-suggestions="querySearchManager"
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
      <span class="content">¥{{sum}}</span>
    </div>
  </div>
</template>

<script>
import {getManagersRecommend} from '@/api/manager';
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
    querySearchManager (queryString, cb) {
      /**
       * [获取请求建议并且显示数据]
       * @param  {[String]} queryString [搜索字段]
       */
      const getRecommends = (queryString) => {
        let _queryString = queryString;
        getManagersRecommend(_queryString)
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
