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
          <el-button class="btn-add" @click="resetUsersList(1)" type="primary">显示全部会员<i class="el-icon-menu el-icon--right"></i></el-button>
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
    <ModifyDialog :userform='userform' :dialogModifyFormVisible='dialogModifyFormVisible'></ModifyDialog>

  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav';
import AddDialog from '@/components/User/AddDialog';
import ModifyDialog from '@/components/User/ModifyDialog';

import {getUsersList, getUsersRecommend, getUsersItem, deleteUser} from '@/api/user';

export default {
  name: 'user',
  data () {
    return {
      //分页器-当前页
      currentPage: 1,
      //分页器-总页数 1页 = 10
      totalPage: 10,
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
      tableData: [],
      //修改的会员数据
      userform: {
      },
      //被修改的会员数据在表格中的索引号
      modifyIndex: 0
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
    this.$bus.on('updateModifyUsers', this.updateModifyUsers);
  },
  methods: {
    //搜索框查询建议
    querySearch (queryString, cb) {
      //获取请求建议并且显示数据
      const getRecommends = (queryString) => {
        // queryString
        // if (this.inputCnt === '') {
        //   console.log('no queryString')
        // }
        let _queryString = queryString;
        getUsersRecommend(_queryString)
        .then(({data}) => {
          this.recommends = data.recommends;
          // 调用 callback 返回建议列表的数据
          cb(this.recommends);
        });
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
      let id = item.id;
      //请求单个用户信息
      getUsersItem(id)
      .then(({data}) => {
        this.tableData = new Array(data.users);
        this.totalPage = data.totalPage ? data.totalPage * 10 : 10;
      });
    },
    //设置添加会员弹窗是否显示
    toggleAddFormVisible () {
      this.dialogAddFormVisible = !this.dialogAddFormVisible;
    },
    //设置添加会员弹窗是否显示
    toggleModifyFormVisible () {
      this.dialogModifyFormVisible = !this.dialogModifyFormVisible;
    },
    //处理编辑会员信息 row是当前数据, index是当前索引
    handleModify (index, row) {
      this.userform = this.tableData[index];
      this.modifyIndex = index;
      this.dialogModifyFormVisible = true;
    },
    //删除会员
    handleDelete (index, row) {
      let userform = this.tableData[index],
        id = userform.id;
      console.log(userform)
      deleteUser(id)
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
    },
    //分页器-页面变换的时候
    handleCurrentChange (val) {
      if (!(val > this.totalPage / 10)) {
        this.currentPage = val;
        //请求加载数据
        this.fetchUsersList(this.currentPage);
      }
    },
    // 显示全部会员，把当前页重置为第一页，把搜索框的内容清空
    resetUsersList (page) {
      this.inputCnt = '';
      this.currentPage = page;
      this.fetchUsersList(this.currentPage);
    },
    //修改会员信息后，在页面直接更新数据
    updateModifyUsers (userform) {
      let _userform = userform;
      if (_userform.id) {
        this.tableData = [
          ...this.tableData.slice(0, this.modifyIndex),
          _userform,
          ...this.tableData.slice(this.modifyIndex + 1)
        ]
      }
      this.userform = {};
    },
    //请求页数，获取用户数据列表并更新
    fetchUsersList (currentPage) {
      getUsersList(currentPage)
      .then(({data}) => {
        this.tableData = data.usersList;
        this.totalPage = data.totalPage * 10;
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
