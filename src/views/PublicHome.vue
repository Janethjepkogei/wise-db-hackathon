<template>
  <v-container class="text-xs-center">
    <div id="takeQuiz" @click="navigate({url: '/PublicQuiz'})">
      <v-img height="50%" width="50%" :src="require('@/assets/zeus.png')"></v-img>
      <h2>Hello!</h2>
      <h2>Thank you for your interest in Personal Finance</h2>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/store";

export default {
  created() {
    store.commit("navigation/setTopBarTitle", "Public");
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
  margin-bottom: 50px;
}
#takeQuiz > h2 {
  font-style: italic;
  font-weight: 800;
  font-size: 28px;
  margin-left: 10px;
  margin-right: 10px;
  font: salisburry;
}
</style>
