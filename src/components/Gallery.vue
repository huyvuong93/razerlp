<template>
    <div id="grid" v-scroll>
        <div id="hammerhead" class="bg">
            <div v-scroll>
                <h2>HAMMERHEAD TRUE WIRELESS EARBUDS</h2>
                <p class="new-text">True Wireless Freedom</p>
                <router-link class="to-page" to="/hhwireless"><span>Learn more</span></router-link>
            </div>
        </div>
        <div id="viper" class="bg">
            <div v-scroll>
                <h2>VIPER ULTIMATE</h2>
                <p class="new-text">Ambidextrous Gaming Mouse with Razer™ HyperSpeed Wireless</p>
                <router-link class="to-page" to="/viper"><span>Learn more</span></router-link>
            </div>
        </div>
        <div id="huntsman" class="bg">
            <div v-scroll>
                <h2>RAZER HUNTSMAN</h2>
                <p class="new-text">Gaming Keyboard with Razer™ Optical Switches</p>
                <router-link class="to-page" to="/huntsman"><span>Learn more</span></router-link>
            </div>
        </div>
        <div id="ultrabook" class="bg">
            <div v-scroll>
                <h2>RAZER BLADE STEALTH 13</h2>
                <p class="new-text">The World's First Gaming Ultrabook™</p>
                <router-link class="to-page" to="/ultrabook"><span>Learn more</span></router-link>
            </div>
        </div>
    </div>
</template>

<style>
    @media screen and (min-width: 900px) {
        #grid{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap:15px;
        }
    }
    #grid{
        margin-top: 15px;
    }
    .bg{
        width: 100%;
        height: 60vh;
    }
    #hammerhead{
        background-image: url(../assets/razer/9.jpg);
        background-size:cover;
        background-repeat: no-repeat;
        background-position-x: center;
    }
    #viper{
        background-image: url(../assets/razer/10.jpg);
        background-size:cover;
        background-repeat: no-repeat;
        background-position-x: center;
    }
    #huntsman{
        background-image: url(../assets/razer/11.jpg);
        background-size:cover;
        background-repeat: no-repeat;
        background-position-x: center;
    }
    #ultrabook{
        background-image: url(../assets/razer/12.jpg);
        background-size:cover;
        background-repeat: no-repeat;
        background-position-x: center;
    }
    .to-page{
        text-decoration: none;
        color: #44d62c;
    }
</style>