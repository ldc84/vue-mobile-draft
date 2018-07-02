<template>
  <div id="main">
    <!-- <div v-touch:swipe.top="swipeHandler">
      메인
    </div> -->
    <div class="main-refresh" :class="{active : refresh}">
      <div class="loadingarray">
        <div class="dotone"></div>
        <div class="dottwo"></div>
        <div class="dotthree"></div>
        <div class="dotfour"></div>
        <div class="dotfive"></div>
      </div>
    </div>
    <vs-tabs class="main-tabs" v-touch:swipe.bottom="swipeHandler">
      <vs-tab vs-label="KRW 마켓">
        <div class="con-tab">
          <ul class="main-list krw" :class="{loadActive : loadList, loadEnd : loadEnd}">
            <li v-for="(coin, index) in coins" :key="index" :class="{active : coin.active}">
              <router-link to="/trade/" class="default">
                <p class="coin-name">
                  {{coin.name}}
                  <span>({{coin.code}})</span>
                </p>
                <p class="coin-price">
                  13,202,000
                  <span>KRW</span>
                </p>
                <p class="coin-percent">
                  <span v-if="index!=2 && index!=1" class="txt-red">
                    <i class="material-icons icon-final">arrow_drop_up</i>
                    7.68%
                  </span>
                  <span v-else class="txt-blue">
                    <i class="material-icons icon-final">arrow_drop_down</i>
                    11.02%
                  </span>
                </p>
                <p class="favorite" :class="{active: coin.favorite}" @click.prevent="coin.favorite = !coin.favorite"></p>
                <p class="more" :class="{active: coin.active}" @click.prevent="coin.active = !coin.active"></p>
              </router-link>
              <div class="add-info">
                <div>
                  <p class="tit">평가금액 (KRW)</p>
                  <p class="price">123,456,789</p>
                </div>
                <div>
                  <p class="tit">평가손익 (KRW)</p>
                  <p class="percent">
                    <span v-if="index!=2 && index!=1" class="txt-red">
                      <i class="material-icons icon-final">arrow_drop_up</i>
                      7.68% (+1,234,567)
                    </span>
                    <span v-else class="txt-blue">
                      <i class="material-icons icon-final">arrow_drop_down</i>
                      11.02% (+1,234,567)
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </vs-tab>
      <vs-tab vs-label="BTC 마켓">
        <div class="con-tab">
          <ul class="main-list">
            <li v-for="(coin, index) in coins" :key="index" :class="{active : coin.active}">
              <router-link to="/trade/" class="default">
                <p class="coin-name">
                  {{coin.name}}
                  <span>({{coin.code}})</span>
                </p>
                <p class="coin-price">
                  13,202,000
                  <span>KRW</span>
                </p>
                <p class="coin-percent">
                  <span v-if="index!=2 && index!=1" class="txt-red">
                    <i class="material-icons icon-final">arrow_drop_up</i>
                    7.68%
                  </span>
                  <span v-else class="txt-blue">
                    <i class="material-icons icon-final">arrow_drop_down</i>
                    11.02%
                  </span>
                </p>
                <p class="favorite" :class="{active: coin.favorite}" @click="coin.favorite = !coin.favorite"></p>
                <p class="more" :class="{active: coin.active}" @click="coin.active = !coin.active"></p>
              </router-link>
              <div class="add-info">
                <div>
                  <p class="tit">평가금액 (KRW)</p>
                  <p class="price">123,456,789</p>
                </div>
                <div>
                  <p class="tit">평가손익 (KRW)</p>
                  <p class="percent">
                    <span v-if="index!=2 && index!=1" class="txt-red">
                      <i class="material-icons icon-final">arrow_drop_up</i>
                      7.68% (+1,234,567)
                    </span>
                    <span v-else class="txt-blue">
                      <i class="material-icons icon-final">arrow_drop_down</i>
                      11.02% (+1,234,567)
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </vs-tab>
      <vs-tab vs-label="ETH 마켓">
        <div class="con-tab">
          <ul class="main-list">
            <li v-for="(coin, index) in coins" :key="index" :class="{active : coin.active}">
              <router-link to="/trade/" class="default">
                <p class="coin-name">
                  {{coin.name}}
                  <span>({{coin.code}})</span>
                </p>
                <p class="coin-price">
                  13,202,000
                  <span>KRW</span>
                </p>
                <p class="coin-percent">
                  <span v-if="index!=2 && index!=1" class="txt-red">
                    <i class="material-icons icon-final">arrow_drop_up</i>
                    7.68%
                  </span>
                  <span v-else class="txt-blue">
                    <i class="material-icons icon-final">arrow_drop_down</i>
                    11.02%
                  </span>
                </p>
                <p class="favorite" :class="{active: coin.favorite}" @click="coin.favorite = !coin.favorite"></p>
                <p class="more" :class="{active: coin.active}" @click="coin.active = !coin.active"></p>
              </router-link>
              <div class="add-info">
                <div>
                  <p class="tit">평가금액 (KRW)</p>
                  <p class="price">123,456,789</p>
                </div>
                <div>
                  <p class="tit">평가손익 (KRW)</p>
                  <p class="percent">
                    <span v-if="index!=2 && index!=1" class="txt-red">
                      <i class="material-icons icon-final">arrow_drop_up</i>
                      7.68% (+1,234,567)
                    </span>
                    <span v-else class="txt-blue">
                      <i class="material-icons icon-final">arrow_drop_down</i>
                      11.02% (+1,234,567)
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </vs-tab>
    </vs-tabs>
    <div class="copy">
      @ 2018 DEXKO INC,. ALL RIGHTS RESERVED.
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      refresh: false,
      loadList: false,
      loadEnd: false,
      coins:[{
        name: '비트코인',
        code: 'BTC',
        favorite: false,
        active: false
      }, {
        name: '비트코인캐시',
        code: 'BCH',
        favorite: false,
        active: false
      }, {
        name: '이더리움',
        code: 'ETH',
        favorite: false,
        active: false
      }, {
        name: '이더리움클래식',
        code: 'ETC',
        favorite: false,
        active: false
      }, {
        name: '리플',
        code: 'XRP',
        favorite: false,
        active: false
      }, {
        name: '모네로',
        code: 'XMR',
        favorite: false,
        active: false
      }, {
        name: '라이트코인',
        code: 'LTC',
        favorite: false,
        active: false
      }, {
        name: '퀀텀',
        code: 'QTUM',
        favorite: false,
        active: false
      }, {
        name: '덴트',
        code: 'DENT',
        favorite: false,
        active: false
      }]
    }
  },
  mounted() {
    this.motionTimer();
  },
  methods: {
    swipeHandler(direction) {
      const el = document.scrollingElement || document.documentElement;
      if(el.scrollTop > 0) return
      this.refresh = true;
      setTimeout(function(){
        location.reload()
      }, 1500);
    },
    motionTimer() {
      setTimeout(
        _ => this.loadList = true,
        300
      );
      setTimeout(
        _ => (this.loadList = false, this.loadEnd = true),
        1500
      );
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-refresh {
    height:0;
    color:#fff;
    text-align:center;
    opacity:0;
    transition:all .3s ease-in-out;
    &.active {
      height:28px;
      opacity:1;
    }
  }
  .main-list {
    > li {
      position:relative;
      height:94px;
      margin-top:10px;
      box-shadow:2px 2px 5px 1px rgba(14,80,173, 0.22);
      transition:all .2s ease-in-out;
      &:first-child {
        margin-top:0;
      }
      &.active {
        height:140px;
      }
      .default {
        display:block;
        position:relative;
        height:94px;
        padding:13px 0 0 20px;
        background-color:#fff;
        border-radius:4px;
        box-sizing:border-box;
        z-index:2;
        > p {
          color:#0b0b0b;
          font-family:'NanumSquare';
          font-weight:800;
        }
        .coin-name {
          font-size:14px;
          line-height:18px;
        }
        .coin-price {
          margin:5px 0 6px 0;
          font-size:21px;
          line-height:22px;
          span {
            font-size:15px;
          }
        }
        .coin-percent {
          i {
            margin:0 -6px;
            vertical-align:middle;
          }
        }
        .favorite {
          position:absolute; top:15px; right:18px;
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
        .more {
          position:absolute; bottom:15px; right:20px;
          width:12px;
          height:13px;
          background:url("~@/assets/main_more.png") no-repeat center center;
          background-size:3px 13px;
          opacity:0.3;
          transition:all .3s ease-in-out;
          &.active {
            opacity:1;
          }
        }
      }
      .add-info {
        position:absolute; bottom:0; left:0; right:0;
        height:49px;
        padding:10px 20px 0 20px;
        background-color:#243242;
        border-radius:0 0 5px 5px;
        box-sizing:border-box;
        > div {
          display:table;
          width:100%;
          > p {
            display:table-cell;
            color:#fff;
            line-height:14px;
          }
          .tit {
            width:110px;
            font-size:10px;
          }
          .price,
          .percent {
            text-align:right;
          }
          .price {
            font-family:'NanumSquare';
            font-size:12px;
            font-weight:800;
          }
          .percent {
            font-size:11px;
            i {
              margin:0 -6px;
              vertical-align:middle;
            }
          }
        }
      }
    }
    &.krw {
      > li {
        transform:rotateX(-180deg);
      }
    }
    &.krw.loadActive {
      @for $i from 1 through 9 { // easing
        > li:nth-child(#{$i}) {
          transform:rotateX(0deg);
          transition-duration: 0.15s * $i;
        }
      }
    }
    &.krw.loadEnd {
      > li {
        transform:rotateX(0deg);
        transition-duration: 0.15s;
      }
    }
  }
  .copy {
    height:40px;
    margin-top:30px;
    padding:14px 0 0 0;
    color:#fff;
    font-family:'NanumSquare';
    font-size:10px;
    line-height:14px;
    background-color:#222327;
    text-align:center;
    box-sizing:border-box;
  }
  /* loading bar */
  .loadingarray{
    width:150px;
    height:20px;
    display:inline-block;
    overflow:hidden;
    position:relative;
  }
  .dotone, .dottwo, .dotthree, .dotfour, .dotfive{
    width:8px;
    margin-top:3px;
    border-radius:20px;
    background-color:white;
    height:8px;
    position:relative;
    display:inline-block;
    margin-left:5px;
    margin-right:5px;
    transition:all 3s;
    margin-bottom:5px;
  }
  .dotone{
    animation-name: dotgrow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .dottwo{
    animation-name: dotgrow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay:0.2s;
  }
  .dotthree{
    animation-name: dotgrow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay:0.4s;
  }
  .dotfour{
    animation-name: dotgrow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay:0.6s;
  }
  .dotfive{
    animation-name: dotgrow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay:0.8s;
  }
  @keyframes dotgrow {
    0%{
      height:10px;
      width:10px;
    }
    20%{
      height:20px;
      width:20px;
      margin:0;
    }
    40%{
      height:10px;
      width:10px;
      margin:5px;
    }
    60%{
      height:10px;
      width:10px;
      margin:5px;
    }
    80%{
      height:10px;
      width:10px;
      margin:5px;
    }
    100%{
      height:10px;
      width:10px;
      margin:5px;
    }
  }
</style>
