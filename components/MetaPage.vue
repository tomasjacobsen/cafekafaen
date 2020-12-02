<template>
  <section class="content">
    <b-container fluid>      
      <b-row class="d-flex justify-content-between align-items-center">

        <b-col cols=6 md=1 class="order-2 order-md-1">
                <nuxt-link v-if="this.prev" :to="this.prev" class="btn btn-outline-secondary btn-sm">
                    <i class="fas fa-chevron-left"></i> <span>Forrige</span> 
                </nuxt-link>
        </b-col>

        <b-col cols=12 md=8 v-if="page.video" class="order-1 order-md-2 mb-4 mb-md-0">
            <div class="embed-responsive embed-responsive-16by9" id="video">
                <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1242056495939083%2Fvideos%2F743067842784332%2F&amp;show_text=0" class="embed-responsive-item" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </div>
        </b-col>

        <b-col cols=12 md=8 v-else class="order-1 order-md-2 mb-4 mb-md-0">
            <nuxt-image :placeholder="false" :src="`https://res.cloudinary.com/cafekafaen/image/upload/images/${page.image}`" :alt="page.title" sizes="1600" fit="cover" class="img-fluid" />
        </b-col>



        <b-col cols=6 md=1 class="text-right order-3 order-md-3">
                <nuxt-link :to="this.next" class="btn btn-outline-secondary btn-sm">
                    <span>Neste</span> <i class="fas fa-chevron-right"></i>
                </nuxt-link>
        </b-col>
      </b-row>

  <script src="https://kit.fontawesome.com/0e675e52a5.js" crossorigin="anonymous"></script>
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
