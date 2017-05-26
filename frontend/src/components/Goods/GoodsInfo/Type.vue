<template>
  <div class="goods-type">
    <div class="header">
      <span class="title">商品分类</span>
      <el-button class="btn-add" size="small" type="primary">新建分类</el-button>
    </div>
    <ul class="type-list">
      <li class="item">
        全部
      </li>
      <li class="item">
        本草
      </li>
      <li class="item active">
        本草
      </li>
      <li class="item">
        本草
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'goods-type',
  data () {
    return {
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
  }
}
</style>
