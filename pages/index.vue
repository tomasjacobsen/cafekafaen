<template>
 <video-background 
    src="https://res.cloudinary.com/cafekafaen/video/upload/v1607032215/videos/backgroundmovie_high.mp4"
    poster="/backgroundmovie_poster.jpg"
    :sources="[
        {src: 'https://res.cloudinary.com/cafekafaen/video/upload/v1607032215/videos/backgroundmovie.mp4', res: 767, autoplay: true} 
    ]"
    style="height: 100vh;">
<div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white text-center align-items-center">
        <Logo />
        <ul class="nav justify-content-center" id="frontpage_menu">
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/hva-er-cafekafaen">Om Cafè Kafaen</nuxt-link>
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
</video-background>
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
src: local('mellony dry brush Regular'), url('~assets/fonts/Mellonydrybrush.woff') format('woff');
}


#frontpage_menu .nav-item .nav-link{color: white; font-size: 180%; font-family: 'mellony dry brush Regular';}
#frontpage_menu .nav-item .nav-link:hover{color:rgb(134, 134, 134);}
</style>