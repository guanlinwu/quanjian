<template>
    <div class="goods-choose">
      <el-row>
        <el-col :span="5">
          <div class="user-search-box">
            <h3 class="title">会员选择</h3>
            <el-autocomplete
              class="user-search-input"
              v-model="inputUserCnt"
              size="small"
              icon="search"
              :fetch-suggestions="querySearchUser"
              placeholder="请输入会员名称"
              :trigger-on-focus="false"
              @select="handleUserSelect"
              :on-icon-click="handleIconUserClick"
            ></el-autocomplete>

            <UserCard v-if="Object.keys(this.userData).length > 0" :userData="userData"></UserCard>
          </div>
        </el-col>

        <el-col :span="19">
          <div class="head-box">
            <el-select v-model="type" placeholder="请选择产品分类" class="select">
              <el-option
                v-for="item in typeArr"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-autocomplete
            v-model="inputCnt"
            icon="search"
            :fetch-suggestions="querySearch"
            placeholder="请输入产品名称"
            :trigger-on-focus="false"
            @select="handleSelect"
            :on-icon-click="handleIconClick"
          ></el-autocomplete>
          <el-button class="btn-add" @click="resetList(1)" type="primary">显示全部商品<i class="el-icon-menu el-icon--right"></i></el-button>
          </div>

          <el-row>
            <el-col :span="24">
              <el-table
              :data="goodsTable"
              style="width: 100%"
              >
              <!--<el-table-column
                type="index"
                width="50">
              </el-table-column>-->
              <el-table-column
                fixed
                prop="name"
                label="名称"
                width="120">
              </el-table-column>
              <el-table-column
                prop="number"
                label="编号"
                width="80">
              </el-table-column>
              <el-table-column
                prop="standard"
                label="规格"
                width="100">
              </el-table-column>
              <el-table-column
                prop="price"
                label="单价"
                width="100">
              </el-table-column>
              <el-table-column
                prop="converRate"
                label="积分折算率"
                width="100">
              </el-table-column>
              <el-table-column
                prop="credit"
                label="积分"
                width="100">
              </el-table-column>
              <el-table-column
                prop="isSpecial"
                label="特殊商品"
                >
                <template scope="scope">
                  <el-tag v-if="scope.row.isSpecial === '1'" type="primary">是</el-tag>
                  <el-tag v-else type="danger">否</el-tag>
                </template>
              </el-table-column>
                </el-table-column>
                <el-table-column label="操作" width="80" fixed="right">
                  <template scope="scope">
                    <el-button @click="handleAddGoods(scope.$index, scope.row)"
                      size="small"
                      type="primary"
                      >添加</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
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
    </div>
</template>

<script>
import {getUsersRecommend, getUsersItem} from '@/api/user';
import {getGoodsList, getGoodsRecommend, getGoodsItem} from '@/api/goods';
import UserCard from '@/components/Sale/UserCard';

export default {
  name: 'goods-choose',
  components: {
    UserCard
  },
  data () {
    return {
       //分页器-当前页
      currentPage: 1,
      //分页器-总页数 1页 = 10
      totalPage: 10,
      //用户搜索框内容
      inputUserCnt: '',
      //用户搜索框查询建议列表数据
      recommendsUser: [],
      //产品搜索框内容
      inputCnt: '',
      //产品搜索框查询建议列表数据
      recommends: [
        { 'value': '2222' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ],
      userRecommends: [],
      goodsRecommends: [],
      searchTag: {
        timeout: 1000,
        timer: null
      },
      //搜索出用户数据
      userData: [],
      //产品选择表格数据
      goodsTable: [],
      //产品类型选择select表单数据
      typeArr: [{
        value: '选项1',
        label: '1'
      }, {
        value: '选项2',
        label: '2'
      }, {
        value: '选项3',
        label: '3'
      }, {
        value: '选项4',
        label: '4'
      }, {
        value: '选项5',
        label: '5'
      }],
      //产品类型
      type: ''
    }
  },
  props: [
    'pickGoods'
  ],
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
    //用户搜索框查询按钮
    handleIconUserClick () {
    },
    //用户搜索框处理选中建议项
    handleUserSelect (item) {
      let id = item.id;
      getUsersItem(id).then(({data}) => {
        this.userData = data.users;
        this.$bus.emit('setUserData', data.users);
      });
    },
    //搜索框查询建议
    querySearch (queryString, cb) {
      /**
       * [获取请求建议并且显示数据]
       * @param  {[String]} queryString [搜索字段]
       */
      const getRecommends = (queryString) => {
        let _queryString = queryString;
        getGoodsRecommend(_queryString)
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
      getGoodsItem(id)
      .then(({data}) => {
        this.goodsTable = new Array(data.goods);
        this.totalPage = data.totalPage ? data.totalPage * 10 : 10;
      });
    },
    //添加商品 重点
    handleAddGoods (index, row) {
      this.$bus.emit('addPickGoods', row);
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
     * 显示全部会员，把当前页重置为第一页，把搜索框的内容清空
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
      getGoodsList(currentPage)
      .then(({data}) => {
        this.goodsTable = data.goodsList;
        this.totalPage = data.totalPage * 10;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head-box {
  padding-bottom: 16px;

  .title {
    font-size: 16px;
    line-height: 36px;
    font-weight: 300;
  }

  .btn-add, .btn-batch {
    margin-left: 20px
  }
}

// 产品分类选择
.select {
  margin-right: 16px;
  width: 160px;
}

// 用户搜索模块
.user-search-box {
  margin-right: 16px;
  border: 1px solid #d3dce6;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;

  h3.title {
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 36px;
    font-weight: 300;
  }

  .user-search-input {
    display: inline-block;
    width: 90%;
    margin-bottom: 16px;
  }
}
</style>
