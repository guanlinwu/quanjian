<template>
  <div class="user">
    <el-row :gutter="20">
      <el-col :span="3">
        <LeftNav :navArr="navArr"></LeftNav>
      </el-col>
      <el-col :span="21">
        右边
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftNav from 'components/LeftNav';

export default {
  name: 'user',
  data () {
    return {
      navArr: [
        {
          text: '基本信息',
          icon: 'el-icon-message',
          routeto: '/user'
        }
      ]
    }
  },
  components: {
    LeftNav
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.left-nav {
    height: 964px;
}
</style>
