<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col col md="10">
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
  font-size: 80px;
}
</style>