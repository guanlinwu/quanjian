<template>
  <div class="goods-info">
    <el-row>
      <el-col :span="4">
        <Type></Type>
      </el-col>
      <el-col :span="20">
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
          <el-button class="btn-add" @click="dialogAddFormVisible = true" type="primary">添加产品<i class="el-icon-plus el-icon--right"></i></el-button>
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
                width="50">
              </el-table-column>
              <el-table-column
                fixed
                prop="name"
                label="名称"
                width="100">
              </el-table-column>
              <el-table-column
                prop="number"
                label="编号"
                width="100">
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
                width="100">
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
    <AddDialog :dialogAddFormVisible='dialogAddFormVisible'></AddDialog>
    <ModifyDialog :dialogModifyFormVisible='dialogModifyFormVisible'></ModifyDialog>
  </div>
</template>

<script>
import AddDialog from '@/components/Goods/GoodsInfo/AddDialog';
import ModifyDialog from '@/components/Goods/GoodsInfo/ModifyDialog';
import Type from '@/components/Goods/GoodsInfo/Type';

export default {
  name: 'goods-infos',
  data () {
    return {
      //是否弹窗添加商品表单
      dialogAddFormVisible: false,
      //是否弹窗修改商品表单
      dialogModifyFormVisible: false,
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
      }]
    }
  },
  components: {
    AddDialog,
    ModifyDialog,
    Type
  },
  created () {
    this.$bus.on('toggleGoodsAddFormVisible', this.toggleAddFormVisible);
    this.$bus.on('toggleGoodsModifyFormVisible', this.toggleModifyFormVisible);
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
    //设置添加商品弹窗是否显示
    toggleAddFormVisible () {
      this.dialogAddFormVisible = !this.dialogAddFormVisible;
    },
    //设置添加会员弹窗是否显示
    toggleModifyFormVisible () {
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
.head-box {
  padding: 0 0 10px 0;

  .btn-add, .btn-batch {
      margin-left: 20px
  }
}
</style>
