<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols=12 md="10">
        <header class="masthead text-center my-4">
          <h1 class="text-uppercase">{{pageTitle}}</h1>
        </header>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
    props: ['pageTitle']
}
</script>

<style scoped>
.masthead h1{
  font-size: 50px;
}

@media (min-width: 576px) {
.masthead h1{
  font-size: 60px;
}
}

@media (min-width: 768px) { 
  .masthead h1{
    font-size: 70px;
  }
}

@media (min-width: 992px) {
  .masthead h1{
    font-size: 80px;
  }
}


</style>