<template>
    <div>
        <div id="blade">
            <div v-scroll>
                <h2>More Power. More Cores. More Frames</h2>
                <p class="new-text">The New Razer Blade 15</p>
                <router-link class="to-page" to="/blade"><span>Learn more</span></router-link>
            </div>
        </div>
        <div id="kraken">
            <div v-scroll>
                <h2>Ultra-Light Comfort</h2>
                <p class="new-text">Razer Kraken X - Mecury Edition</p>
                <router-link class="to-page" to="/kraken"><span>Learn more</span></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>>
<style>
    #blade{
        width:100%;
        height: 75vh;
        background: url(../assets/razer/5.jpg);
        background-size:cover;
        background-repeat:no-repeat;
        background-position-x: center;
}
    #kraken{
        width:100%;
        height: 75vh;
        background: url(../assets/razer/7.jpg);
        background-size:cover;
        background-repeat:no-repeat;
        background-position-x: center;
    }
@media screen and (max-width: 900px) {
    #blade{
        background: url(../assets/razer/6.jpg);
        background-size:cover;
        background-repeat:no-repeat;
        background-position-x: center;
    }
    #kraken{
        background: url(../assets/razer/8.jpg);
        background-size:cover;
        background-repeat:no-repeat;
        background-position-x: center;
    }
}
h2{
    font-family: aileron, sans-serif;
    font-style: normal;
    font-weight: lighter;
    padding-top:50px;
    color:#999999;
}
.new-text{
    color:#fff;
    font-weight: bold;
}
.before-enter{
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out ;
}

.enter{
    opacity: 1;
    transform: translateY(0px);
}
</style>