<template>
  <div class="user">
    <el-row :gutter="20">

      <el-col :span="3">
        <LeftNav :navArr="navArr"></LeftNav>
      </el-col>
      <el-col class="g-container-right" :span="21">
        <div class="head-box">
          <el-autocomplete
            class="inline-input"
            v-model="inputCnt"
            icon="search"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
            :on-icon-click="handleIconClick"
          ></el-autocomplete>
          <el-button class="btn-add" @click="dialogAddFormVisible = true" type="primary">添 加<i class="el-icon-plus el-icon--right"></i></el-button>
          <el-button class="btn-batch" type="primary">批量录入<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button type="text">批量模版下载</el-button>
        </div>

        <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                type="index"
                width="50">
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
                width="100">
              </el-table-column>
              <el-table-column
                prop="joinMoneyRest"
                label="会员加盟余额"
                width="100">
              </el-table-column>
              <el-table-column
                prop="accumulateCost"
                label="累积消费金额"
                width="100">
              </el-table-column>
              <el-table-column
                prop="accumulateLevel"
                label="累积消费级别"
                width="100">
              </el-table-column>
              <el-table-column
                prop="date"
                label="入会日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="phone"
                label="电话"
                width="130">
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

      </el-col>
    </el-row>

    <!--弹窗-->
    <!-- Form -->
    <AddDialog :dialogAddFormVisible='dialogAddFormVisible'></AddDialog>
    <ModifyDialog :dialogModifyFormVisible='dialogModifyFormVisible'></ModifyDialog>

  </div>
</template>

<script>
import LeftNav from 'components/LeftNav';
import AddDialog from 'components/User/AddDialog';
import ModifyDialog from 'components/User/ModifyDialog';

import {authenticate, getUsers} from '@/api/user';

export default {
  name: 'user',
  data () {
    return {
      //是否弹窗添加会员表单
      dialogAddFormVisible: false,
      //是否弹窗添加会员表单
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
      //左边导航栏
      navArr: [
        {
          text: '基本信息',
          icon: 'el-icon-message',
          routeto: '/user'
        }
      ],
      //表格数据
      tableData: [{
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '750000',
        joinMoneyRest: '35000000',
        accumulateCost: '3800000',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '充值会员',
        joinMoney: '7500',
        joinMoneyRest: '35003',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }]
    }
  },
  components: {
    LeftNav,
    AddDialog,
    ModifyDialog
  },
  created () {
    this.$bus.on('toggleAddFormVisible', this.toggleAddFormVisible);
    this.$bus.on('toggleModifyFormVisible', this.toggleModifyFormVisible);
    authenticate({
      userNameOrEmailAddress: 'admin',
      password: '123qwe'
    }).then((result) => {
      console.log(result);
      getUsers().then((result) => {
        console.log(result);
      });
    });
  },
  methods: {
    //搜索框查询建议
    querySearch (queryString, cb) {
      // 调用 callback 返回建议列表的数据
      cb(this.recommends);
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
  }

}
.left-nav {
    height: 964px;
}
</style>
