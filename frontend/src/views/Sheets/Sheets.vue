<template>
  <div class="sheets">
    <el-row :gutter="20">
      <el-col :span="3">
        <LeftNav :navArr="navArr"></LeftNav>
      </el-col>
      <el-col class="g-container-right" :span="21" v-if="isLogin">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav';
export default {
  name: 'sheets',
  data () {
    return {
      //左边导航栏
      navArr: [
        {
          text: '销售记录',
          icon: 'el-icon-message',
          routeto: '/sheets/saleRecords'
        },
        {
          text: '营收结算',
          icon: 'el-icon-message',
          routeto: '/sheets/balance'
        },
        {
          text: '库存明细',
          icon: 'el-icon-message',
          routeto: '/sheets/stockRecords'
        },
        {
          text: '充值记录',
          icon: 'el-icon-message',
          routeto: '/sheets/rechargeRecords'
        }
      ],
      //搜索框内容
      inputCnt: '',
      //搜索框查询建议列表数据
      recommends: [
        { 'value': '三全鲜食（北新泾店）' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ]
    }
  },
  props: ['isLogin'],
  components: {
    LeftNav
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
