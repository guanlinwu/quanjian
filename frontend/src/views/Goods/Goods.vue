<template>
  <div class="goods">
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
  name: 'goods',
  data () {
    return {
      navArr: [
        {
          text: '商品信息',
          icon: 'el-icon-message',
          routeto: '/goods/goodsinfo'
        },
        {
          text: '库存管理',
          icon: 'el-icon-message',
          routeto: '/goods/stock'
        }
      ]
    }
  },
  props: ['isLogin'],
  components: {
    LeftNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
