<template>
  <div class="goods-type">
    <div class="header">
      <span class="title">商品分类</span>
      <el-button @click="createType" class="btn-add" size="small" type="primary">新建分类</el-button>
    </div>
    <ul class="type-list">
      <!--<li class="item"><p >全部</p></li>-->
      <li v-for="(item, index) in type" :class="{item: true, active: index === activeIndex - 1}">
        <p @click="selectType(index, item)">{{item}}</p>
        <i v-if="index !== 0" @click="deleteType(index, item)" class="el-icon-close"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'goods-type',
  data () {
    return {
      // 分类
      type: [
        '全部',
        '分类1',
        '分类2',
        '分类3'
      ],
      //选中的类 从1开始计算
      activeIndex: 3
    }
  },
  methods: {
    createType () {
      let tips = '请输入类名';
      this.$prompt(tips, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({value}) => {
        //发请求
        this.type.push(value);
        this.$message({
          type: 'success',
          message: '新建分类成功'
        });
      })
    },
    selectType (index, item) {
      this.activeIndex = index + 1;
    },
    deleteType (index, item) {
      this.$confirm('确认删除该分类?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(_ => {
        this.activeIndex = 1;
        this.type.splice(index, 1);
      })
      .catch(_ => {});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.goods-type {
  margin-right: 16px;
  min-height: 243px;
  background: #fff;
  border-radius: 4px;

  .header {
    padding: 10px 0;
    margin: 0 6px;
    text-align: center;
    border-bottom: 1px solid #d3dce6;

    .title {
      font-size: 16px;
      margin-right: 8px;
    }
  }

  .type-list {
    position: relative;
    // padding: 0 16px;

    .item {
      position: relative;
      padding-left: 16px;
      color: #20a0ff;
      line-height: 38px;
      font-size: 14px;
      text-align: left;
      cursor: pointer;

      &.active {
        color: #fff;
        background: #20a0ff;
      }

      &:hover {
        color: #fff;
        background: #4db3ff;
      }

      &:active {
        color: #fff;
        background: #1d90e6;
      }

      &:not(:last-child) {
        border-bottom: 1px dashed #d3dce6;
      }
    }

    .el-icon-close {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      padding: 5px;
      font-size: 12px;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
          box-shadow: 0 0 10px red;
          background-color: rgba(255, 73, 73, 0.8);
          color: #fff;
      }
    }
  }
}
</style>
