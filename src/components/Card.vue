<template>
  <article>
    <h3>
      <a :href="'thread/' + link">Thread by {{ user }}</a>
    </h3>
    <p>{{ text }}</p>
    <ul class="actions">
      <li><a :href="'thread/' + link" class="button">More</a></li>
    </ul>
  </article>
</template>
<script>
export default {
  name: "Card",
  props: ["user", "username", "link", "text", "media"],
};
</script>