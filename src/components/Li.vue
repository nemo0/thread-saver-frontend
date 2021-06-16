<template>
  <li class="sessions-child">
    <div class="time">time</div>
    <h5>
      Tweet By:
      <a
        :href="'https://twitter.com/' + username"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ user }}
      </a>
    </h5>
    <p>{{ text }}</p>
    <template v-if="image">
      <div v-for="i of image" :key="i.id">
        <img :src="i" alt="" srcset="" />
      </div>
    </template>

    <a
      :href="tweetUrl"
      class="button small"
      target="_blank"
      rel="noopener noreferrer"
    >
      Tweet URL
    </a>
  </li>
</template>
<script>
// import ThreadImage from "./ThreadImage.vue";
export default {
  name: "Li",
  components: {},
  props: [
    "user",
    "username",
    "link",
    "text",
    "media",
    "time",
    "tweetUrl",
    "image",
  ],
};
</script>