<template>
  <div id="trade">
    <div class="trade-container">
      <div class="orderbook">
        <div>
          <p><img src="~@/assets/trade_img04.png" alt=""></p>
          <span class="line">
            <img src="~@/assets/trade_img04_line.png" alt="">
          </span>
        </div>
      </div>
      <div class="order-box">
        <div class="coin-sel">
          <span class="coin-name" :class="{active : coinsel}" @click="coinsel = !coinsel">
            {{coinDefault}}
          </span>
          <transition name="slide-fade">
            <div class="coin-sel" v-if="coinsel">
              <ul>
                <li v-for="(coin, index) in coinList" :key="index">
                  <span @click="coinDefault = coin, coinsel = false" :class="{ active : coinDefault == coin}">
                    {{coin}}
                  </span>
                </li>
              </ul>
            </div>
          </transition>
          <p class="price">
            6,148,000 <span>KRW</span>
          </p>
          <p class="percent">
            <i class="material-icons icon-final">arrow_drop_up</i>
            2.04% / +54,000
          </p>
          <p class="favorite" :class="{active: favorite}" @click.prevent="favorite = !favorite"></p>
        </div>
        <div><img src="~@/assets/trade_img02.png" alt=""></div>
        <div><img src="~@/assets/trade_img03.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coinsel: false,
      favorite: false,
      coinDefault: "KRW마켓 | 비트코인(BTC)",
      coinList: [
        "KRW마켓 | 비트코인(BTC)",
        "KRW마켓 | 비트코인캐시(BCH)",
        "KRW마켓 | 비트코인골드(BTG)",
        "KRW마켓 | 이더리움(ETH)",
        "KRW마켓 | 이더리움클래식(ETC)",
        "KRW마켓 | 리플(XRP)",
        "KRW마켓 | 모네로(XMR)",
        "KRW마켓 | 라이트코인(LTC)",
        "KRW마켓 | 퀀텀(QTUM)",
        "KRW마켓 | 덴트(DENT)"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  p,
  li {font-family:'NanumSquare';}
  img {width:100%;}
  #trade {
    margin:0 -5px;
  }
  .trade-container {
    display:table;
    width:100%;
    box-sizing:border-box;
  }
  .orderbook {
    display:table-cell;
    position:relative;
    width:38.28%;
    box-shadow:2px 2px 5px 1px rgba(14,80,173, 0.22);
    > div {
      position:absolute; top:0; bottom:0; left:0;
      overflow:scroll;
      border-radius:3px;
    }
    .line {
      display:none;
      position:absolute; top:50.5vh; left:0;
    }
  }
  .order-box {
    display:table-cell;
    width:59.57%;
    padding-left:2.14%;
    > div {
      margin-top:9px;
      box-shadow:2px 2px 5px 1px rgba(14,80,173, 0.22);
      &:first-child {
        margin-top:0;
      }
    }
  }
  .coin-sel {
    position:relative;
    height:65px;
    padding:5px 0 0 10px;
    background-color:#fff;
    border-radius:2px;
    box-sizing:border-box;
    .coin-name {
      position:relative;
      display:inline-block;
      padding:0 12px 3px 0;
      color:#0b0b0b;
      font-size:10px;
      font-weight:700;
      line-height:14px;
      &:after {
        content:'';
        position:absolute; top:5px; right:0;
        display:block;
        width:7px;
        height:4px;
        background:url("~@/assets/ico_arrow01.png") no-repeat 0 0;
        background-size:7px 4px;
        transition:all .3s ease-in-out;
      }
      &.active:after {
        transform:rotate(-180deg);
      }
    }
    .coin-sel {
      position:absolute; top:25px; left:0; right:5px;
      height:190px;
      padding:5px;
      background-color:#fff;
      overflow-x:hidden;
      overflow-y:auto;
      box-sizing:border-box;
      box-shadow:2px 2px 5px 1px rgba(14,80,173, 0.22);
      z-index:2;
      li span {
        display:block;
        padding:3px 5px 3px 5px;
        color:#484848;
        font-size:10px;
        line-height:16px;
        background-color:#fff;
        border-radius:2px;
        transition:all .1s ease-in-out;
        &.active {
          color:#fff;
          background-color:#3d6386;
        }
      }
    }
    .price {
      color:#0b0b0b;
      font-size:15px;
      font-weight:800;
      line-height:17px;
      span {
        font-size:10px;
        font-weight:400;
      }
    }
    .percent {
      margin-top:-4px;
      color:#f01b5c;
      font-size:10px;
      line-height:12px;
      i {
        margin:0 -6px;
        vertical-align:middle;
      }
    }
    .favorite {
      position:absolute; top:25px; right:18px;
      width:15px;
      height:14px;
      background:url("~@/assets/main_star_off.png") no-repeat 0 0;
      background-size:15px 14px;
    }
    .favorite:after {
      content:'';
      display:block;
      position:absolute; bottom:14px; right:0;
      width:15px;
      height:14px;
      background:url("~@/assets/main_star_on.png") no-repeat 0 0;
      background-size:15px 14px;
      opacity:0;
      transition:all .3s ease-in-out;
    }
    .favorite.active:after {
      bottom:0;
      opacity:1;
    }
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
