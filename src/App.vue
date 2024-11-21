<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerItem from './components/headerItem.vue';
import FooterItem from './components/footerItem.vue';

</script>

<template>
  <header>

    <!-- <div class="wrapper">


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <headerItem />


  </header>

  <RouterView />

  <footer>
    <FooterItem />
  </footer>
</template>
