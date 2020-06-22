<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <router-link to="/"><span class="razer"></span></router-link>
      </div>
      <div class="nav-desktop">
        <router-link to="/blade"><span class="blade15">The Razer Blade 15</span></router-link> | 
        <router-link to="/kraken"><span>Razer Kraken X</span></router-link> | 
        <router-link to="/hhwireless"><span>HammerHead True Wireless</span></router-link> | 
        <router-link to="/viper"><span>Ultimate Viper</span></router-link> | 
        <router-link to="/huntsman"><span>Razer Huntsman</span></router-link> | 
        <router-link to="/ultrabook"><span>Razer Blade Stealth 13</span></router-link>
      </div>
      <div class="nav-mobile">
        <router-link to="/blade"><span class="blade15 sp"></span></router-link>
        <router-link to="/kraken"><span class="kraken sp"></span></router-link>
        <router-link to="/hhwireless"><span class="hh sp"></span></router-link>
        <router-link to="/viper"><span class="viper sp"></span></router-link>
        <router-link to="/huntsman"><span class="huntsman sp"></span></router-link>
        <router-link to="/ultrabook"><span class="ultra sp"></span></router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: aileron, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.razer{
  background: url(assets/razer/razer-logo.png);
  background-repeat: no-repeat;
  background-size:cover;
  width: 100px;
  height: 50px;
  padding:10px 30px;
  width: 100px;
  display: block;
  margin: 20px auto;
}
.sp{
  padding:20px;
  margin: 0 2%;
}
@media screen and (max-width:900px) {
  .nav-desktop{
    display: none;
  }
  .blade15{
    background-image: url(assets/razer/blade15.svg);
    background-position-x: center;
    background-position-y: 50%;
    background-repeat:no-repeat;
  }
  .kraken{
    background-image: url(assets/razer/wiredheadset.svg);
    background-position-x: center;
    background-position-y: 50%;
    background-repeat:no-repeat;
  }
  .hh{
    background-image: url(assets/razer/wirelessheadset.svg);
    background-position-x: center;
    background-position-y: 50%;
    background-repeat:no-repeat;
  }
  .viper{
    background-image: url(assets/razer/mousewireless.svg);
    background-position-x: center;
    background-position-y: 50%;
    background-repeat:no-repeat;
  }
  .huntsman{
    background-image: url(assets/razer/mechanical.svg);
    background-position-x: center;
    background-position-y: 50%;
    background-repeat:no-repeat;
  }
  .ultra{
    background-image: url(assets/razer/blade13.svg);
    background-position-x: center;
    background-position-y: 50%;
    background-repeat:no-repeat;
  }

}
@media screen and (min-width: 900px) {
  .nav-mobile{
    display: none;
  }
}
#nav {

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #44d62c;
    }
  }
}
</style>
