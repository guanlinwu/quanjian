<template>
  <div class="manage">
    <el-row :gutter="20">
      <el-col :span="3">
        <LeftNav :navArr="navArr"></LeftNav>
      </el-col>
      <el-col class="g-container-right" :span="21" v-if="isLogin">
                <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 400px"
              >
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
                prop="tag"
                label="权限"
                >
                <template scope="scope">
                  <el-tag
                    :type="scope.row.authority === '操作员' ? 'danger' : 'primary'"
                    close-transition>{{scope.row.authority}}</el-tag>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getManagersList} from '@/api/manager';
import LeftNav from '@/components/LeftNav';

export default {
  name: 'manage',
  data () {
    return {
      //左边导航栏
      navArr: [
        {
          text: '基本信息',
          icon: 'el-icon-message',
          routeto: '/manage'
        }
      ],
      //表格数据
      tableData: []
    }
  },
  props: ['isLogin'],
  components: {
    LeftNav
  },
  created () {
    getManagersList()
    .then(({data}) => {
      this.tableData = data.managersList;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
