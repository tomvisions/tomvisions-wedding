<script setup lang="ts">
import { loadImage1280x610 } from "@/shared/image.ts";

const tomVanessa = loadImage1280x610('van-tom.jpg');

</script>
<template>
  <div class="feature-section feature-odd" id="begin">
    <div class="hero-banner" :style="{backgroundImage: `url(${tomVanessa})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
    <section class="row text-center the-couple-row">
      <div class="col-sm-12 the-couple-text-wrapper">
        <h1 class="the-couple-name">Vanessa & Tom</h1>
        <p class="text-uppercase the-couple-statement">Got married: July 7, 2018</p>
      </div>
    </section>
  </div>
  </div>
</template>
