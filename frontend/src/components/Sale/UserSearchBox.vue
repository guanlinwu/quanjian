<template>
    <div class="user-search-box">
      <h3 class="title">会员选择</h3>
      <el-autocomplete
        class="user-search-input"
        v-model="inputUserCnt"
        size="small"
        icon="search"
        :fetch-suggestions="queryUserSearch"
        placeholder="请输入产品名称"
        :trigger-on-focus="false"
        @select="handleUserSelect"
        :on-icon-click="handleIconUserClick"
      ></el-autocomplete>

      <UserCard :userData="userData"></UserCard>
    </div>
</template>

<script>
import UserCard from './UserCard';

export default {
  name: 'user-search-box',
  data () {
    return {
      userData: [
        {
          title: '编号:',
          content: '0002323'
        },
        {
          title: '姓名:',
          content: '新旺角'
        },
        {
          title: '会员加盟余额:',
          content: '2002320',
          isMoney: true
        },
        {
          title: '积分总额:',
          content: '80023'
        },
        {
          title: '会员身份:',
          content: '累积会员'
        },
        {
          title: '累积消费金额:',
          content: '23233',
          isMoney: true
        }
      ],
      //用户搜索框内容
      inputUserCnt: '',
      //用户搜索框查询建议列表数据
      recommendsUser: [
        { 'value': '2222' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ]
    }
  },
  components: {
    UserCard
  },
  methods: {
    //用户搜索框查询建议
    queryUserSearch (queryString, cb) {
      // 调用 callback 返回建议列表的数据
      cb(this.recommendsUser);
    },
    //用户搜索框查询按钮
    handleIconUserClick () {
    },
    //用户搜索框处理选中建议项
    handleUserSelect (item) {
      console.log(item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
