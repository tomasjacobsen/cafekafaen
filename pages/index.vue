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
      { hid: 'description', name: 'description', content: 'Cafè Kafaen er en pop-up restaurant' }
    ],
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