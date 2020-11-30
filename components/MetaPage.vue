<template>
  <section class="content">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="11" md=8>
            <div v-if="page.video" class="carousel">
                <div class="carousel-inner">
                    <div class="embed-responsive embed-responsive-16by9" id="video">
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1242056495939083%2Fvideos%2F743067842784332%2F&amp;show_text=0" class="embed-responsive-item" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                </div>
                <nuxt-link :to="this.next" class="carousel-control-next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </nuxt-link>
            </div>
            <div v-else id="carouselExampleControls" class="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" v-if="page.image">
                        <img :src="require(`@/assets/img/lowrez/${page.image}`)" class="d-block w-100" :alt="page.title">
                    </div>
                </div>
            <nuxt-link :to="this.prev" class="carousel-control-prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </nuxt-link>
            <nuxt-link :to="this.next" class="carousel-control-next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </nuxt-link>
            </div>        
        </b-col>

      </b-row>
    <b-row class="justify-content-center my-5 text-center" v-if="!page.video">
    <b-col cols="8" md=4>
        <a :href="require(`@/assets/img/highrez/${page.image}`)" class="btn btn-outline-secondary" v-html="page.downloadText" :download="page.image"></a>
    </b-col>
    </b-row>

  </b-container>
  </section>
</template>


<script>
import conf from '../conf';

export default {

  data(){
      return{
          prev: '',
          next: ''
      }
  },
  head() {
    return {title: `${this.page.title} | ${this.content.title}`};
  },
  computed: {
    page() {
      return this.$route.meta;
    },


  },
  mounted(){
      if (this.page.title !== '0'){
          var prev_pagetile = (parseInt(this.page.title) - 1).toString()
          this.prev = `/media-presse/${prev_pagetile}`;
      }else{
          this.next = `/media-presse/1`;
      }
      if (this.page.title !== '43'){
          var next_pagetile = (parseInt(this.page.title) + 1).toString()
          this.next = `/media-presse/${next_pagetile}`;
      }else{
          this.next = `/media-presse/0`;
      }

  },
  async asyncData({$content}) {
    const content = await $content(conf.CONTENT).fetch();
    return {
      content
    }

}

};
</script>
