<template>
    <ul class="content-list">
      <li class="item"
        v-for="(item, index) in userData"
        :key="index"
      >
        <span class="title">{{item.title}}</span>
        <p class="content"><span v-if="item.isMoney">¥</span>{{item.content}}</p>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'user-card',
  props: [
    'userData'
  ],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content-list {

  padding: 6px 6px 0;
  border-radius: 4px;
  // background: #eef1f6;

  .item {
    position: relative;
    font-size: 14px;
    line-height: 32px;
    color: #8b572a;
  }
  .title {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .content {
    padding-left: 96px;
    text-align: right;
  }
}
</style>
