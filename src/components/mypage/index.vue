<template>
  <div id="mypage">
    <div class="my-tab">
      <img src="~@/assets/mypage_tab.png" alt="">
    </div>
    <div class="my-wallet-total">
      <div class="wallet-price">
        <p class="text01">사용가능(KRW)</p>
        <p class="text02">
          <span v-if="!numberAction">11,456,789</span>
          <animate-number
            v-if="numberAction"
            from="1"
            to="11456789"
            from-color="#84c1fc"
            to-color="#ffffff"
            duration="1500"
            easing="easeOutQuad"
            :animate-end="animateEnd"
          ></animate-number>
        </p>
      </div>
      <div><img src="~@/assets/mypage_top.png" alt=""></div>
    </div>
    <div class="my-wallet-list">
      <div><img src="~@/assets/mypage_img01.png" alt=""></div>
      <div><img src="~@/assets/mypage_img02.png" alt=""></div>
      <div><img src="~@/assets/mypage_img03.png" alt=""></div>
      <div><img src="~@/assets/mypage_img04.png" alt=""></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAnimateNumber from 'vue-animate-number';

Vue.use(VueAnimateNumber);

export default {
  data () {
    return {
      numberAction: true
    }
  },
  methods: {
    formatter: function (n) {
      // var reg = /(^[+-]?\d+)(\d{3})/;
      // var n = n.toString();

      // while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
      // return n;
      return n.toFixed(0)
    },
    animateEnd() {
      this.numberAction = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  img {width:100%;}
  #mypage {
    margin:-15px -15px 0;
  }
  .my-tab {
    position:relative;
    box-shadow:0 5px 5px 0 #73abed;
    z-index:10;
  }
  .my-wallet-total {
    padding:20px 15px 0 15px;
    text-align:center;
    .text01 {
      color:#243242;
      font-family:'NanumSquare';
      font-size:10px;
      font-weight:700;
      line-height:14px;
    }
    .text02 {
      padding:5px 0 5px 0;
      > span {
        display:block;
        color:#fff;
        font-family:'NanumSquare';
        font-size:23px;
        font-weight:800;
        line-height:26px;
      }
    }
  }
  .my-wallet-list {
    height:58vh;
    margin-top:15px;
    padding:0 15px 5px 15px;
    box-sizing:border-box;
    overflow:scroll;
    > div {
      margin-top:8px;
      box-shadow:2px 2px 5px 1px rgba(14,80,173, 0.22);
      &:first-child {
        margin-top:0;
      }
    }
  }
</style>
