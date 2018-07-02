<template>
  <footer :class="{active : menuActive}">
    <div class="dim" @click="menuActive = false"></div>
    <div class="foot-menu">
      <div>
        <vs-button
          style="border-radius:50%"
          :style="!menuActive ? 'color:#fff' : 'color:#243242; box-shadow:none;'"
          :vs-color="!menuActive ? 'rgb(36, 50, 66)' : 'rgb(255, 255, 255)'"
          vs-type="filled"
          :vs-icon="!menuActive ? 'add' : 'clear'"
          @click="menuActive = !menuActive">
        </vs-button>
        <div class="round-bg"></div>
        <div v-if="$route.fullPath == '/'">
          <div class="menu-btn menu01">차트</div>
          <div class="menu-btn menu02">입출금</div>
          <div class="menu-btn menu03">문의</div>
          <div class="menu-btn menu04">안내</div>
        </div>
        <div v-else-if="$route.fullPath == '/trade/'">
          <div class="menu-btn menu01">차트</div>
          <div class="menu-btn menu02">호가</div>
          <div class="menu-btn menu03">시세</div>
          <div class="menu-btn menu04">정보</div>
        </div>
        <div v-else>
          <div class="menu-btn menu01">내정보</div>
          <div class="menu-btn menu02 line2 cen">인증<br>센터</div>
          <div class="menu-btn menu04 line2">정속<br>정보</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin transitionAll($speed: 0.3s) {
    transition:all $speed ease-in-out;
  }
  .dim {
    position:fixed; bottom:0; right:0;
    background-color:#fff;
    z-index:10;
    @include transitionAll(0.15s);
  }
  .foot-menu {
    position:fixed; bottom:20px; right:21px;
    z-index:11;
  }
  .foot-menu > div {
    position:relative;
    height:50px;
  }
  .foot-menu button {
    box-shadow:none;
    z-index:10;
  }
  .foot-menu .round-bg {
    position:absolute; bottom:-368px; right:-368px;
    width:368px;
    height:368px;
    background-color:rgba(255,255,255,0.2);
    border-radius:50%;
    @include transitionAll(0.6s);
  }
  .foot-menu .menu-btn {
    position:absolute; bottom:5px; right:5px;
    width:40px;
    height:40px;
    padding:14px 0 0 0;
    color:#243242;
    font-family:'NanumSquare';
    font-size:11px;
    line-height:13px;
    background-color:#fff;
    border-radius:50%;
    box-shadow:1px 1px 2px 0 #000;
    box-sizing:border-box;
    text-align:center;
    opacity:0;
    @include transitionAll(0.15s);
  }
  /* active */
  footer.active .dim {
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.85);
  }
  footer.active .foot-menu .round-bg {
    bottom:-203px; right:-203px;
  }
  footer.active .foot-menu .menu-btn {
    opacity:1;
  }
  footer.active .foot-menu .menu01 {
    bottom:136px; right:5px;
  }
  footer.active .foot-menu .menu02 {
    bottom:112px; right:65px;
  }
  footer.active .foot-menu .menu03 {
    bottom:65px; right:112px;
  }
  footer.active .foot-menu .menu04 {
    bottom:5px; right:144px;
  }
  footer.active .foot-menu .line2 {
    padding-top:9px;
  }
  footer.active .foot-menu .cen {
    bottom:91px; right:92px;
  }
  @for $i from 1 through 4 { // easing
    footer.active .foot-menu .menu0#{$i} {
      transition-duration: 0.15s * $i;
    }
  }
</style>
