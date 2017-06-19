<template>
  <ul class="content-list">
      <li class="item">
        <span class="title">编号:</span>
        <p class="content">{{userData.number}}</p>
      </li>
      <li class="item">
        <span class="title">姓名:</span>
        <p class="content">{{userData.name}}</p>
      </li>
      <li class="item">
        <span class="title">会员加盟余额:</span>
        <p class="content">
          <span>¥</span>{{userData.joinMoney}}</p>
      </li>
      <li class="item">
        <span class="title">积分总额:</span>
        <p class="content">{{userData.credit}}</p>
      </li>
      <li class="item">
        <span class="title">会员身份:</span>
        <p class="content">{{userData.userType}}</p>
      </li>
      <li class="item">
        <span class="title">累积消费金额:</span>
        <p class="content">
          <span>¥</span>{{userData.accumulateCost}}</p>
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
  border-radius: 4px; // background: #eef1f6;
  .item {
    position: relative;
    font-size: 14px;
    line-height: 32px;
    color: #8b572a;
    height: 32px;
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
