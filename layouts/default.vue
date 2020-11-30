<template>
  <div>
    <navbar />
    <Nuxt />
  </div>
</template>

<style>
body{overflow-y: scroll;}
@keyframes appear {
  0% {
    opacity: 0;
  }
}



.layout-enter-active,
.layout-leave-active,
.page-enter-active,
.page-leave-active {
  transition: all .40s ease-out;
}
.layout-enter,
.layout-leave-active,
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
