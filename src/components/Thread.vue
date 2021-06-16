<template>
  <div>
    <h1>A thread from {{ data[0].details[0].user }}</h1>
    <h4>
      Username:
      <a
        :href="'https://twitter.com/' + data[0].details[0].username"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ data[0].details[0].username }}
      </a>
    </h4>
    <template v-for="all in data">
      <template v-for="d in all">
        <Li
          :text="d[0].text"
          :key="d.key"
          :user="d[0].user"
          :username="d[0].username"
          :tweetUrl="d[0].tweetUrl"
          :image="d[0].media"
        />
      </template>
    </template>
  </div>
</template>
<script>
import Li from "./Li.vue";
import axios from "axios";
export default {
  name: "Thread",
  components: {
    Li,
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async getData() {
      let tweetId = this.$route.params.tweetId;
      var data = JSON.stringify({
        operation: "search_by_hash",
        schema: process.env.VUE_APP_HD_SCHEMA,
        table: "tweets",
        hash_values: [tweetId],
        get_attributes: ["*"],
        username: process.env.VUE_APP_HD_USER,
        password: process.env.VUE_APP_HD_PASS,
      });
      let config = {
        method: "post",
        url: "https://tweet-saver-nemo.harperdbcloud.com",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          const parsedTweet = response.data[0].tweets;
          console.log(parsedTweet);
          this.data = parsedTweet;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>