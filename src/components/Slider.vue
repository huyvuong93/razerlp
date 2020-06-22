<template>
    <hooper :autoPlay="true" :playSpeed="4000" style="height:100%" :centerMode="true">
      <slide class="slide a1">
        <h1>GAMING LAPTOPS</h1>
        <p class="slide-text">Explore a complete arsenal of gaming laptops to suit your needs—both work and play.<br> 
          Experience only the best graphics on a superior display, backed by a system that's powered with the latest in technology.</p>
        <img src="../assets/razer/1.jpg" alt="laptop" width="100%">
      </slide>
      <slide class="slide a2">
        <h1>GAMING HEADSETS</h1>
        <p class="slide-text">Whether you're looking at in-ear earphones or headsets,<br>
         enjoy lag-free audio performance and powerful sound from a full suite of gaming audio options for PC and console.</p>
        <img src="../assets/razer/2.jpg" alt="earphone" width="100%">
      </slide>
      <slide class="slide a3">
        <h1>GAMING MICE</h1>
        <p class="slide-text">As the brand that practically invented the gaming mouse category,<br> we know a thing or two about what it takes to make a deadly-accurate,
         high-performance gaming mouse—and we’re constantly upping our game to raise yours. </p>
        <img src="../assets/razer/3.jpg" alt="mouse" width="100%">
      </slide>
      <slide class="slide a3">
        <h1>GAMING KEYBOARDS</h1>
        <p class="slide-text">From multi-award winning Razer™ Mechanical Switches designed specifically for<br> gaming to a mecha-membrane hybrid, discover the gaming keyboard for you—equipped with speed, precision and your preferred typing experience.</p>
        <img src="../assets/razer/4.jpg" alt="keyboard" width="100%">
      </slide>
    </hooper>
</template>

<script>
  import {Hooper, Slide} from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    name: 'App',
    components:{
      Hooper,
      Slide
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1{
  font-family: aileron, sans-serif;
  font-style: normal;
  font-weight: lighter;
  color: #44d62c;
  letter-spacing: 0.1em;
  font-size: 36px;
  margin: 20px auto;
  text-align: center;
}
.slide-text{
  display: block;
  text-align: center;
  margin: 20px auto;
  color:#888888;
}
</style>
