<template>
<div>

  <masthead pageTitle="Kontakt" />

  <section class="content">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="8" class="text-center">
          <h3 class="underline-heading">E-post</h3>
          <p><a href="mailto:fredrik@cafekafaen.no">fredrik@cafekafaen.no</a></p>
          
          <h3 class="underline-heading">Instagram</h3>
          <p><a href="https://www.instagram.com/cafekafaen/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></p>

          <h3 class="underline-heading">Facebook</h3>
          <p><a href="https://www.facebook.com/Cafè-KaFaen-1242056495939083/" target="_blank"><i class="fab fa-facebook-f"></i> facebook</a></p>

        </b-col>
      </b-row>
  </b-container>
  </section>
  <script src="https://kit.fontawesome.com/0e675e52a5.js" crossorigin="anonymous"></script>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Kontakt | Cafè Kafaen',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Kontakt CafèKafaen' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@400;900&display=swap' },
    ]
  },

  


})
</script>