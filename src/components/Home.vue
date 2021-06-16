<template>
  <div>
    <Banner />
    <div class="posts">
      <template v-for="thread in data">
        <Card
          :user="thread.tweets[0].details[0].user"
          :key="thread.id"
          :text="thread.tweets[0].details[0].text"
          :link="thread.id"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Card from "./Card.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Banner,
    Card,
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async getCardData() {
      try {
        let data = JSON.stringify({
          operation: "search_by_value",
          schema: process.env.VUE_APP_HD_SCHEMA,
          table: "tweets",
          search_attribute: "id",
          search_value: "*",
          get_attributes: ["*"],
          limit: 6,
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
        let res = await axios(config);
        this.data = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getCardData();
  },
};
</script>