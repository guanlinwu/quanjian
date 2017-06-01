<template>
  <div class="user">
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
          <el-button class="btn-add" @click="dialogAddFormVisible = true" type="primary">添加会员<i class="el-icon-plus el-icon--right"></i></el-button>
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
                width="100">
              </el-table-column>
              <el-table-column
                prop="userType"
                label="会员身份"
                width="100">
              </el-table-column>
              <el-table-column
                prop="joinMoney"
                label="会员加盟总额"
                width="120">
              </el-table-column>
              <el-table-column
                prop="joinMoneyRest"
                label="会员加盟余额"
                width="120">
              </el-table-column>
              <el-table-column
                prop="accumulateCost"
                label="累积消费金额"
                width="120">
              </el-table-column>
              <el-table-column
                prop="accumulateLevel"
                label="累积消费级别"
                width="120">
              </el-table-column>
              <el-table-column
                prop="date"
                label="入会日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="phone"
                label="电话"
                min-width="128"
               >
              </el-table-column>

              <el-table-column label="操作" width="140" fixed="right">
                <template scope="scope">
                  <el-button @click="handleModify(scope.$index, scope.row)"
                    size="small"
                    >编辑</el-button>
                  <el-button
                    size="small"
                    type="danger"
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
            :total="1000">
          </el-pagination>
        </div>
      </el-col>
    </el-row>

    <!--弹窗-->
    <AddDialog :dialogAddFormVisible='dialogAddFormVisible'></AddDialog>
    <ModifyDialog :dialogModifyFormVisible='dialogModifyFormVisible'></ModifyDialog>

  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav';
import AddDialog from '@/components/User/AddDialog';
import ModifyDialog from '@/components/User/ModifyDialog';

import {getUsersList} from '@/api/user';

export default {
  name: 'user',
  data () {
    return {
      //分页器-当前页
      currentPage: 1,
      //是否弹窗添加会员表单
      dialogAddFormVisible: false,
      //是否弹窗修改会员表单
      dialogModifyFormVisible: false,
      //是否是累积会员
      isLeiJi: false,
      //搜索框内容
      inputCnt: '',
      //搜索框查询建议列表数据
      recommends: [
        { 'value': '三全鲜食（北新泾店）' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ],
      userSearchTag: {
        timeout: 1000,
        timer: null
      },
      //左边导航栏
      navArr: [
        {
          text: '基本信息',
          icon: 'el-icon-message',
          routeto: '/user'
        }
      ],
      //表格数据
      tableData: []
    }
  },
  props: ['isLogin'],
  components: {
    LeftNav,
    AddDialog,
    ModifyDialog
  },
  created () {
    console.log('user create')
    //请求加载数据
    this.fetchUsersList(this.currentPage);
    //绑定事件
    this.$bus.on('toggleAddFormVisible', this.toggleAddFormVisible);
    this.$bus.on('toggleModifyFormVisible', this.toggleModifyFormVisible);
  },
  methods: {
    //搜索框查询建议
    querySearch (queryString, cb) {
      console.log(queryString);
      //获取请求建议并且显示数据
      const getRecommends = () => {
        // queryString
        // if (this.inputCnt === '') {
        //   console.log('no queryString')
        // }
        console.log('请求的字段是： ' + queryString);
        // 调用 callback 返回建议列表的数据
        cb(this.recommends);
      };

      let _timeout = this.userSearchTag.timeout;

      if (this.userSearchTag.timeout === null) {
        this.userSearchTag.timeout = setTimeout(getRecommends, _timeout);
      } else {
        clearTimeout(this.userSearchTag.timeout);
        this.userSearchTag.timeout = setTimeout(getRecommends, _timeout);
      }
    },
    //搜索框查询按钮
    handleIconClick () {
    },
    //搜索框处理选中建议项
    handleSelect (item) {
      console.log(item);
    },

    //设置添加会员弹窗是否显示
    toggleAddFormVisible () {
      this.dialogAddFormVisible = !this.dialogAddFormVisible;
    },
    //设置添加会员弹窗是否显示
    toggleModifyFormVisible () {
      console.log(11)
      this.dialogModifyFormVisible = !this.dialogModifyFormVisible;
    },
    //处理编辑会员信息 row是当前数据, index是当前索引
    handleModify (index, row) {
      this.dialogModifyFormVisible = true;
    },
    //分页器-页面变换的时候
    handleCurrentChange (val) {
      this.currentPage = val;
      //请求加载数据
      this.fetchUsersList(this.currentPage);
    },
    //请求页数，获取用户数据列表并更新
    fetchUsersList (currentPage) {
      getUsersList(currentPage)
      .then(({data}) => {
        console.log(data);
        this.tableData = data.usersList;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.user {
  .head-box {
    padding: 0 0 10px 0;

    .btn-add, .btn-batch {
        margin-left: 20px
    }

    .search-input {
      width: 230px;
    }
  }

}
.left-nav {
    min-height: 964px;
}
</style>
