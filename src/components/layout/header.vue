<template>
  <header>

    <router-link to="/" :class="$route.fullPath == '/' ? 'logo' : 'back'"></router-link>
    <div class="my-wallet">
      내자산
      <strong>10,123,456,789</strong>
      <span class="txt-red">
        (
        <i class="material-icons icon-final">arrow_drop_up</i>
        7.68%)
      </span>
    </div>
    <router-link to="/mypage/" class="user"></router-link>

  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    display:flex;
    align-items:stretch;
    justify-content:space-between;
    width:100%;
    height:55px;
    background-color:#fff;
    > a {
      transition:all .3s ease-in-out;
    }
  }
  .logo {
    width:60px;
    background:url("~@/assets/logo.png") no-repeat center center;
    background-size:23px 22px;
  }
  .back {
    width:60px;
    background:url("~@/assets/top_back.png") no-repeat center center;
    background-size:11px 20px;
  }
  .my-wallet {
    padding:18px 0 0 0;
    color:#0b0b0b;
    font-size:10px;
    line-height:18px;
  }
  .my-wallet * {
    vertical-align:middle;
  }
  .my-wallet strong {
    font-size:15px;
  }
  .my-wallet span {
    font-size:14px;
  }
  .my-wallet span i {
    margin:0 -9px;
  }
  .user {
    width:60px;
    background:url("~@/assets/top_user.png") no-repeat center center;
    background-size:20px 20px;
  }
</style>
