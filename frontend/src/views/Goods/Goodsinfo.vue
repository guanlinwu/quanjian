<template>
  <div class="goods-info">
    <el-row>
      <el-col :span="4">
        <Type></Type>
      </el-col>
      <el-col :span="20">
        <div class="head-box">
          <el-autocomplete
            class="search-input"
            v-model="inputCnt"
            icon="search"
            :fetch-suggestions="querySearch"
            placeholder="请输入产品名称/编号"
            :trigger-on-focus="false"
            @select="handleSelect"
            :on-icon-click="handleIconClick"
          ></el-autocomplete>
          <el-button class="btn-add" @click="resetList(1)" type="primary">显示全部会员<i class="el-icon-menu el-icon--right"></i></el-button>
          <el-button class="btn-add" @click="dialogAddFormVisible = true" type="primary">添加产品<i class="el-icon-plus el-icon--right"></i></el-button>
          <el-button class="btn-batch" type="primary">批量录入<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button type="text">批量模版下载</el-button>
        </div>

        <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 100%"
              >
              <el-table-column
                type="index"
                width="80">
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
                width="100">
                <template scope="scope">
                  <el-tag v-if="scope.row.isSpecial === '1'" type="primary">是</el-tag>
                  <el-tag v-else type="danger">否</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="140" fixed="right">
                <template scope="scope">
                  <el-button @click="handleModify(scope.$index, scope.row)"
                    size="small"
                    >编辑</el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
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

    <!--弹窗-->
    <AddDialog :dialogAddFormVisible='dialogAddFormVisible'></AddDialog>
    <ModifyDialog :goodsform="goodsform" :dialogModifyFormVisible='dialogModifyFormVisible'></ModifyDialog>
  </div>
</template>

<script>
import AddDialog from '@/components/Goods/GoodsInfo/AddDialog';
import ModifyDialog from '@/components/Goods/GoodsInfo/ModifyDialog';
import Type from '@/components/Goods/GoodsInfo/Type';

import {getGoodsList, getGoodsRecommend, getGoodsItem, deleteGoods} from '@/api/goods';

export default {
  name: 'goods-infos',
  data () {
    return {
      //分页器-当前页
      currentPage: 1,
      //分页器-总页数 1页 = 10
      totalPage: 10,
      //是否弹窗添加商品表单
      dialogAddFormVisible: false,
      //是否弹窗修改商品表单
      dialogModifyFormVisible: false,
      //搜索框内容
      inputCnt: '',
      //搜索框查询建议列表数据
      recommends: [],
      searchTag: {
        timeout: 1000,
        timer: null
      },
      //表格数据
      tableData: [],
      //修改的数据
      goodsform: {
      },
      //被修改的数据在表格中的索引号
      modifyIndex: 0
    }
  },
  components: {
    AddDialog,
    ModifyDialog,
    Type
  },
  created () {
    //请求加载数据
    this.fetchList(this.currentPage);
    this.$bus.on('toggleGoodsAddFormVisible', this.toggleAddFormVisible);
    this.$bus.on('toggleGoodsModifyFormVisible', this.toggleModifyFormVisible);
    this.$bus.on('updateModifyGoods', this.updateModifyGoods);
  },
  methods: {
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
        this.tableData = new Array(data.goods);
        this.totalPage = data.totalPage ? data.totalPage * 10 : 10;
      });
    },
    //设置添加商品弹窗是否显示
    toggleAddFormVisible () {
      this.dialogAddFormVisible = !this.dialogAddFormVisible;
    },
    //设置添加会员弹窗是否显示
    toggleModifyFormVisible () {
      this.dialogModifyFormVisible = !this.dialogModifyFormVisible;
    },
     /**
     * 处理编辑会员信息
     * @param  {[Number]} index [当前索引]
     * @param  {[Object]} row   [当前数据]
     */
    handleModify (index, row) {
      this.goodsform = this.tableData[index];
      this.modifyIndex = index;
      this.dialogModifyFormVisible = true;
    },
    /**
     * 修改会员信息后，在页面直接更新数据
     * @param  {[Object]} userform [被修改的会员数据项]
     */
    updateModifyGoods (goodsform) {
      let _goodsform = goodsform;
      if (_goodsform.id) {
        this.tableData = [
          ...this.tableData.slice(0, this.modifyIndex),
          _goodsform,
          ...this.tableData.slice(this.modifyIndex + 1)
        ]
      }
      this.goodsform = {};
    },
    /**
     * 删除
     * @param  {[Number]} index [当前索引]
     * @param  {[Object]} row   [当前数据]
     */
    handleDelete (index, row) {
      let goodsform = this.tableData[index],
        id = goodsform.id;

      this.$confirm('确认删除该产品?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(_ => {
        deleteGoods(id)
        .then(() => {
          this.tableData = [
            ...this.tableData.slice(0, index),
            ...this.tableData.slice(index + 1)
          ];
          this.$notify({
            showClose: true,
            message: `删除成功`,
            type: 'success'
          });
        });
      })
      .catch(_ => {});
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
        this.tableData = data.goodsList;
        this.totalPage = data.totalPage * 10;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head-box {
  padding: 0 0 10px 0;

  .btn-add, .btn-batch {
      margin-left: 20px
  }
}
</style>
