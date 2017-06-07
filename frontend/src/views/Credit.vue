<template>
  <div class="credit">
    <el-row :gutter="20">
      <el-col :span="3">
        <LeftNav :navArr="navArr"></LeftNav>
      </el-col>
      <el-col class="g-container-right" :span="21" v-if="isLogin">
        <div class="head-box">
          <el-autocomplete
            class="search-input"
            v-model="inputCnt"
            icon="search"
            :fetch-suggestions="querySearch"
            placeholder="请输入会员姓名/编号/手机号"
            :trigger-on-focus="false"
            @select="handleSelect"
            :on-icon-click="handleIconClick"
          ></el-autocomplete>
          <el-button class="btn-add" @click="resetList(1)" type="primary">显示全部<i class="el-icon-menu el-icon--right"></i></el-button>
          <el-button class="btn-batch" type="primary">批量录入<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button type="text">批量模版下载</el-button>
        </div>

        <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 800px"

              >
              <el-table-column
                type="index"
                width="80">
              </el-table-column>
              <el-table-column
                fixed
                prop="name"
                label="姓名"
                width="100">
              </el-table-column>
              <el-table-column
                prop="number"
                label="编号"
                width="100">
              </el-table-column>
              <el-table-column
                prop="credit"
                label="积分总额"
                width="150">
              </el-table-column>
              <el-table-column
                prop="date"
                label="更新日期"
                >
              </el-table-column>
              </el-table-column>
              <el-table-column label="操作" width="180" fixed="right">
                <template scope="scope">
                  <el-button @click="handleCredit(scope.$index, scope.row)"
                    size="small"
                    type="primary"
                    >报积分</el-button>
                  <el-button @click="handleCredit(scope.$index, scope.row, false)"
                    size="small"
                    type="danger"
                    >恢复积分</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>

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
import LeftNav from '@/components/LeftNav';

import {getCreditList, getCreditItem, getCreditRecommend, modifyCredit} from '@/api/credit';

export default {
  name: 'credit',
  data () {
    return {
      //分页器-当前页
      currentPage: 1,
      //分页器-总页数 1页 = 10
      totalPage: 100,
      //左边导航栏
      navArr: [
        {
          text: '报积分',
          icon: 'el-icon-message',
          routeto: '/credit'
        }
      ],
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
  props: ['isLogin'],
  components: {
    LeftNav
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
        getCreditRecommend(_queryString)
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
    /**
     * 搜索框查询按钮
     */
    handleIconClick () {
    },
    /**
     * 搜索框处理选中建议项
     * @param  {[Object]} item [选中项]
     */
    handleSelect (item) {
      let id = item.id;
      //请求单个用户信息
      getCreditItem(id)
      .then(({data}) => {
        this.tableData = new Array(data.credit);
        this.totalPage = data.totalPage ? data.totalPage * 10 : 10;
      });
    },
    //入库和出库, state：是入库还是出库，默认为入库
    handleCredit (index, row, state = true) {
      let _state = state,
        tips = _state ? '请输入报积分量（正整数）' : '请输入恢复积分量（正整数）',
        type = _state ? 'success' : 'warning',
        message = _state ? '报积分量： ' : '恢复积分量： ';

      this.$prompt(tips, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\d+$/,
        inputErrorMessage: '积分量格式不正确, 必须是数字'
      }).then(({ value }) => {
        //这里发送请求
        modifyCredit({value, _state})
        .then(() => {
          if (_state && +value > +row.credit) {
            this.$message({
              type: 'error',
              message: '操作失败，积分余额不足'
            });
            return;
          }

          this.tableData = [
            ...this.tableData.slice(0, index),
            {
              ...row,
              credit: _state ? +row.credit - value : +row.credit + +value
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
      getCreditList(currentPage)
      .then(({data}) => {
        this.tableData = data.creditList;
        this.totalPage = data.totalPage * 10;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.credit {
    .head-box {
    padding: 0 0 10px 0;

    .btn-add, .btn-batch {
        margin-left: 20px
    }
  }
}
</style>
