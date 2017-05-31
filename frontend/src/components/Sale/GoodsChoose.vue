<template>
    <div class="goods-choose">
      <el-row>
        <el-col :span="5">
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
        </el-col>

        <el-col :span="19">
          <div class="head-box">
            <el-select v-model="type" placeholder="请选择产品分类" class="select">
              <el-option
                v-for="item in typeArr"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-autocomplete
            v-model="inputCnt"
            icon="search"
            :fetch-suggestions="querySearch"
            placeholder="请输入产品名称"
            :trigger-on-focus="false"
            @select="handleSelect"
            :on-icon-click="handleIconClick"
          ></el-autocomplete>
          </div>

          <el-row>
            <el-col :span="24">
              <el-table
              :data="goodsTable"
              style="width: 100%"
              >
              <!--<el-table-column
                type="index"
                width="50">
              </el-table-column>-->
              <el-table-column
                fixed
                prop="name"
                label="名称"
                width="120">
              </el-table-column>
              <el-table-column
                prop="number"
                label="编号"
                width="80">
              </el-table-column>
              <el-table-column
                prop="standard"
                label="规格"
                width="100">
              </el-table-column>
              <el-table-column
                prop="price"
                label="单价"
                width="100">
              </el-table-column>
              <el-table-column
                prop="converRate"
                label="积分折算率"
                width="100">
              </el-table-column>
              <el-table-column
                prop="credit"
                label="积分"
                width="100">
              </el-table-column>
              <el-table-column
                prop="isSpecial"
                label="特殊商品"
                >
              </el-table-column>
                </el-table-column>
                <el-table-column label="操作" width="80" fixed="right">
                  <template scope="scope">
                    <el-button @click="handleAddGoods(scope.$index, scope.row)"
                      size="small"
                      type="primary"
                      >添加</el-button>

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
import UserCard from '@/components/Sale/UserCard';

export default {
  name: 'goods-choose',
  components: {
    UserCard
  },
  data () {
    return {
      //用户搜索框内容
      inputUserCnt: '',
      //用户搜索框查询建议列表数据
      recommendsUser: [
        { 'value': '2222' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ],
      //产品搜索框内容
      inputCnt: '',
      //产品搜索框查询建议列表数据
      recommends: [
        { 'value': '2222' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）' },
        { 'value': '新旺角茶餐厅' }
      ],
      //搜索出用户数据
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
      //产品选择表格数据
      goodsTable: [{
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '是',
        goodsType: '本草'
      }, {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '是',
        goodsType: '本草'
      }, {
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '是',
        goodsType: '本草'
      }],
      //产品类型选择select表单数据
      typeArr: [{
        value: '选项1',
        label: '1'
      }, {
        value: '选项2',
        label: '2'
      }, {
        value: '选项3',
        label: '3'
      }, {
        value: '选项4',
        label: '4'
      }, {
        value: '选项5',
        label: '5'
      }],
      //产品类型
      type: ''
    }
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
    },
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
    //添加商品
    handleAddGoods (index, row) {
      console.log(row)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head-box {
  padding-bottom: 16px;

  .title {
    font-size: 16px;
    line-height: 36px;
    font-weight: 300;
  }
}

// 产品分类选择
.select {
  margin-right: 16px;
  width: 160px;
}

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
