<template>
<div>
  <masthead pageTitle="Media / Presse" />

  <section class="content">
    <b-container>
        <b-row class="justify-content-md-center">
          <b-col cols=12 md=8>
            <h3 class="underline-heading mb-4">Bilder</h3>
              <b-row class="justify-content-md-center">
                  <b-col cols=6 md=4 lg=3 v-for="page in content.pages" :key="page.title">
                      <nuxt-link :to="page.path" class="d-block mb-4 h-100">
                          <nuxt-image :placeholder="true" :src="`https://res.cloudinary.com/cafekafaen/image/upload/images/${page.image}`" :alt="page.title" width="400" height="400" sizes="400" fit="cover" class="img-fluid img-thumbnail" />
                      </nuxt-link>
                  </b-col>
              </b-row>
          </b-col>
          <b-col cols=12 md=4>
            <h3 class="underline-heading mb-4">Artikler</h3>
            <p><a href="https://www.aftenbladet.no/kultur/i/nanVqJ/kulinarisk-rockedugnad" target="_blank">Aftenbladet.no (13.10.2019)</a></p>
            <hr>
            <h3 class="underline-heading mb-4">Sanger</h3>
              <b-row>
              <b-col cols=11 md=12>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://open.spotify.com/embed/album/0YLyttxjqNio6PHEwLFOkl" allowfullscreen llow="encrypted-media"></iframe>
              </div>
              </b-col>
              </b-row>
          </b-col>
        </b-row>
  </b-container>
  </section>
</div>
</template>





<script>
import conf from '../../conf';

export default {
  head() {
    return {title: `${this.content.index.title} | ${this.content.title}`};
  },
  async asyncData({$content}) {
    const content = await $content(conf.CONTENT).fetch();
    return {content};
  },
};
</script>
