<script setup lang="ts">


import {ourStoryTimeLine} from  "../data/ourStory";
import StoryItem from "./StoryItem.vue"

</script>

<template>
  <section class="feature-section feature-odd" id="our-story">
    <div class="container">
      <h2 class="theme-title">Our Story</h2>
      <div v-for="story in ourStoryTimeLine" :key="story.id">
         <StoryItem :story={story:story} />
      </div>
    </div>
  </section>

</template>
