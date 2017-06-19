<template>
  <div class="sale">
    <el-row :gutter="20">
      <el-col :span="3">
        <LeftNav :navArr="navArr"></LeftNav>
      </el-col>
      <el-col :span="21" v-if="isLogin">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav';

export default {
  name: 'sale',
  data () {
    return {
      navArr: [
        {
          text: '会员半价',
          icon: 'el-icon-message',
          routeto: '/sale/half'
        },
        {
          text: '原价报单',
          icon: 'el-icon-message',
          routeto: '/sale/original'
        }
        // {
        //   text: '会员首次充值',
        //   icon: 'el-icon-message',
        //   routeto: '/sale/firstRecharge'
        // },
        // {
        //   text: '会员再次充值',
        //   icon: 'el-icon-message',
        //   routeto: '/sale/againRecharge'
        // },
        // {
        //   text: '换货',
        //   icon: 'el-icon-message',
        //   routeto: '/sale/exchange'
        // }
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
