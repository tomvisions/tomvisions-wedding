<script setup lang="ts">
import { loadImage400x267 } from "../shared/image";

interface StoryObject {
  id: number,
  date: string,
  title: string,
  dateDetails: string,
  picture: string,
}


const props = defineProps<{
  story:StoryObject
}>()
/*
    {
    type: Object,
    default: () => [],
    validator: (value) => {
      // Validate that each item has required properties
      return value.every(user =>
        story.hasOwnProperty('id') &&
        story.hasOwnProperty('date') &&
        story.hasOwnProperty('title') &&
        story.hasOwnProperty('dateDetails') &&
        story.hasOwnProperty('picture')
      )
    }
  },
}) */
console.log(props.story.story)

const classNames = {classPicture: null, classContent: null}
if (props.story.story.id  % 2 === 0) {
  classNames.classPicture = 'col-sm-6';
  classNames.classContent = 'col-sm-6';

} else {
  classNames.classPicture = 'col-sm-6  col-sm-push-6';
  classNames.classContent = 'col-sm-6  col-sm-pull-6';
}

const pictureHead = loadImage400x267(props.story.story.picture);
const date = props.story.date

</script>

<template>
  {{ date }}
        <div class="love-block-icon">
            <span class="love-icon ti ti-pulse" aria-hidden="true"></span>
            <span>{{ props.story.story.date }}</span>
        </div>
        <div class="row love-block love-block-1 love-block-odd">
            <div :class="classNames.classPicture">
                <img :src="pictureHead" alt="add a description to get better accessibility" class="img-circle img-responsive center-block"/>
            </div>
            <div :class="classNames.classContent">
                <h3 class="h2">{{props.story.story.title}}</h3>
                <p>
                    {{props.story.story.dateDetails}}
                </p>
            </div>
        </div>

</template>
