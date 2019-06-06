<template>
  <v-container class="text-xs-center">
    <div id="takeQuiz" @click="navigate({url: '/PublicResult'})">
      <v-img height="40%" width="40%" :src="require('@/assets/zeus.png')"></v-img>
      <h2>
        Did you know that 30% of millenials have overdrawn their bank account in
        the last year and 48% say that they probably or definitely could not come up with $2000 for an unexpected expense?
      </h2>
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
