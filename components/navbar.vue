<template>

<div>
  <b-navbar toggleable="sm"  id="default_nav" class="navbar-dark">
  <div class="mx-md-auto d-sm-flex d-block flex-sm-nowrap">
    <nuxt-link to="/" class="navbar-brand">
        <logo />
    </nuxt-link>

    <b-navbar-toggle target="nav-collapse" class=""></b-navbar-toggle>

    <b-collapse id="nav-collapse" class="text-left text-md-center" is-nav>
      <b-navbar-nav>
            <li class="nav-item">
                <nuxt-link to="/hva-er-cafekafaen" class="nav-link">Om CafèKafaen</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/styret" class="nav-link">Styret</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/media-presse" class="nav-link">Media/Presse</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/kontakt" class="nav-link">Kontakt</nuxt-link>
            </li>
      </b-navbar-nav>

    </b-collapse>
  </div>
  </b-navbar>
</div>
</template>


<style>
@font-face {
font-family: 'mellony dry brush Regular';
font-style: normal;
font-weight: normal;
src: local('mellony dry brush Regular'), url('../assets/fonts/Mellonydrybrush.woff') format('woff');
}

#default_nav {
  animation: 1s appear;
}
#default_nav .navbar-brand{max-width: 35%;}

#default_nav .nav-link {color:#f1f2eb; font-size: 100%; font-family: 'mellony dry brush Regular';}
#default_nav .nav-link:hover{color:#8a8a8a;}
</style>