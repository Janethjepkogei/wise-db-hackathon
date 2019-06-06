<template>
  <v-container class="text-xs-center">
    <div id="takeQuiz" @click="navigate({url: '/PublicResult'})">
      <v-img height="40%" width="40%" :src="require('@/assets/zeus.png')"></v-img>
      <h2>Well,</h2>
      <h2>Financial Literacy has not been the our greatest of skills. That is why #W!se is here to help you. Let us start with a few questions.</h2>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/store";

export default {
  created() {
    store.commit("navigation/setTopBarTitle", "Teaser");
  },
  methods: {
    ...mapActions("navigation", ["navigate"])
  }
};
</script>

<style scoped>
#container {
  display: block;
}
#takeQuiz {
  text-align: center;
}
#takeQuiz > div {
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 30px;
}
#takeQuiz > h2 {
  font-style: italic;
  font-weight: 800;
  font-size: 23px;
  margin-left: 50px;
  margin-right: 53px;
}
</style>
