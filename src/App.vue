<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import NavMobile from './components/NavMobile.vue'
import Header from './components/Header.vue'
import Feature from './components/Feature.vue'
import About from './components/About.vue'
import OurStory from './components/OurStory.vue'
import SlideAboutPartner from './components/SlideAboutPartner.vue'
</script>

<template>
  <div>
    <NavMobile />
    <Header />

    <div class="page-container clearfix" id="content" role="main">
      <Feature/>
      <About />
      <OurStory/>
    </div>
    <div class="slide-panel-parent">
    </div>
  </div>
</template>
