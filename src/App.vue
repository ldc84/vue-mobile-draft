<template>
  <div id="app">
    <div id="header">
      <router-view name="header"></router-view>
    </div>
    <div id="body">
      <transition name="slide-fade">
        <router-view name="body"></router-view>
      </transition>
    </div>
    <div id="footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style src="../static/css/default.css"></style>
<style lang="scss" scoped>
  #app {
    font-family:'NanumSquare', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  #header {
    position:relative;
    box-shadow:0 1px 5px 0 #73abed;
  }
  #body {
    min-height:calc(100vh - 55px);
    padding:15px;
    background-color:#8bc4fc;
    box-sizing:border-box;
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
