<template>
  <li class="sessions-child">
    <div class="time">{{ time }}</div>
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
    <div class="pre-formatted">{{ text }}</div>
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
    <go-top bg-color="#F56A6A" :size="50" :bottom="20"></go-top>
  </li>
</template>
<script>
import GoTop from "@inotom/vue-go-top";
export default {
  name: "Li",
  components: {
    GoTop,
  },
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
<style scoped>
.pre-formatted {
  white-space: pre;
}
</style>