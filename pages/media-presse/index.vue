<template>
<div>
  <masthead pageTitle="Media / Presse" />

  <section class="content">
    <b-container>
        <b-row class="row justify-content-md-center">
            <b-col cols=6 md=3 lg=2 v-for="page in content.pages" :key="page.title">
                <nuxt-link :to="page.path" class="d-block mb-4 h-100">
                    <img
        :src="require(`@/assets/img/thumbnail/${page.image}`)"
        :alt="page.title"
        class="img-fluid img-thumbnail"
        />
                </nuxt-link>
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
