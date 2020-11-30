<!--template>

<header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" poster="../assets/frontpageMovie/bakgrunn.jpg">
    <source src="../assets/frontpageMovie/bakgrunn.webm" type="video/webm">
    <source src="../assets/frontpageMovie/bakgrunn.mp4" type="video/mp4">
  </video>
  <b-container class="h-100">
    <b-row class="justify-content-md-center">
      <b-col sm="12" md="8">
        <Logo />
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/hva-er-cafekafaen">Om CafèKafaen</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/styret">Styret</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/media-presse">Media/Presse</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/kontakt">Kontakt</nuxt-link>
            </li>
        </ul>
        </nav>
      </b-col>
    </b-row>
  </b-container>
</header>
</template-->
<template>
  <header>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="../assets/frontpageMovie/bakgrunn.mp4" type="video/mp4">
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white text-center align-items-center">
        <Logo />
        <ul class="nav justify-content-center" id="frontpage_menu">
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/hva-er-cafekafaen">Om CafèKafaen</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/styret">Styret</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/media-presse">Media/Presse</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/kontakt">Kontakt</nuxt-link>
            </li>
        </ul>
      </div>
    </div>
  </div>
</header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout (context) {
    return 'noNav'
  },
  head: {
    title: 'Cafè Kafaen',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Cafè Kafaen er en pop-up restaurant' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


})
</script>
<style scoped>
@font-face {
font-family: 'mellony dry brush Regular';
font-style: normal;
font-weight: normal;
src: local('mellony dry brush Regular'), url('../assets/fonts/Mellonydrybrush.woff') format('woff');
}


#frontpage_menu .nav-item .nav-link{color: white; font-size: 180%; font-family: 'mellony dry brush Regular';}
#frontpage_menu .nav-item .nav-link:hover{color:rgb(134, 134, 134);}

header {
  position: relative;
  background-color: black;
  height: 100vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

@media (pointer: coarse) and (hover: none) {
  header {
    background:black no-repeat center center scroll;
  }
  header video {
    display: none;
  }
}
</style>