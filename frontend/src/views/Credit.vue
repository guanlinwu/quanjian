<template>
  <div class="credit">
    <el-row :gutter="20">
      <el-col :span="3">
        <LeftNav :navArr="navArr"></LeftNav>
      </el-col>
      <el-col class="g-container-right" :span="21" v-if="isLogin">
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
          <el-button class="btn-batch" type="primary">批量录入<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button type="text">批量模版下载</el-button>
        </div>

        <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 700px"
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
                prop="credit"
                label="积分总额"
                width="100">
              </el-table-column>
              <el-table-column
                prop="date"
                label="更新日期"
                >
              </el-table-column>
              </el-table-column>
              <el-table-column label="操作" width="180" fixed="right">
                <template scope="scope">
                  <el-button @click="handleCredit(scope.$index, scope.row)"
                    size="small"
                    type="primary"
                    >报积分</el-button>
                  <el-button @click="handleCredit(scope.$index, scope.row, false)"
                    size="small"
                    type="danger"
                    >恢复积分</el-button>
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
import LeftNav from '@/components/LeftNav';
export default {
  name: 'credit',
  data () {
    return {
      //左边导航栏
      navArr: [
        {
          text: '报积分',
          icon: 'el-icon-message',
          routeto: '/credit'
        }
      ],
      //搜索框内容
      inputCnt: '',
      //搜索框查询建议列表数据
      recommends: [
        { 'value': '三全鲜食（北新泾店）' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ],
      //表格数据
      tableData: [{
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }]
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
    },
    //入库和出库, state：是入库还是出库，默认为入库
    handleCredit (index, row, state) {
      let _state = state,
        tips = _state ? '请输入报积分量（正整数）' : '请输入恢复积分量（正整数）',
        type = _state ? 'success' : 'warning',
        message = _state ? '报积分量： ' : '恢复积分量： ';

      this.$prompt(tips, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\d+$/,
        inputErrorMessage: '积分量格式不正确, 必须是数字'
      }).then(({ value }) => {
        //这里发送请求
        this.$message({
          type: type,
          message: message + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.credit {
    .head-box {
    padding: 0 0 10px 0;

    .btn-add, .btn-batch {
        margin-left: 20px
    }
  }
}
</style>
