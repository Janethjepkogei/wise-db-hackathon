<template>
  <v-container id="publicHomeContainer" class="text-xs-center">
    <div id="takeQuiz" @click="nextPage()">
      <v-img height="50%" width="50%" :src="require('@/assets/zeus.png')"></v-img>
      <v-content id="publicMessages" class="salsbury" v-html="messages[index]">
        <!-- <h2>Hello!</h2>
        <h2>Thank you for your interest in Personal Finance</h2> -->
      </v-content>
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
  data() {
    return {
      index: 0,
      messages: [
        'Hello!<br>Thank you for your interest in financial literacy.',
        'Did you know that 30% of millenials have overdrawn their bank account in the last year and 48% say that they probably or definitely could not come up with $2000 for an unexpected expense?',
        'Well, financial literacy has not been our greatest of skills. Here is where Wise and their nifty mobile app could help you. Let us start with a few questions...'
      ]
    }
  },
  methods: {
    ...mapActions("navigation", ["navigate"]),
    nextPage() {
      this.index++
      if (this.index > 2) {
        this.navigate({url: '/quizzes/multiplechoicepublic'})
      }
    }
  }
};
</script>

<style scoped>
#container {
  display: block;
}
#publicHomeContainer {
  display: block;
}
#publicMessages {
  font-size: 30px;
  justify-content: center;
  padding: 0 35px !important;
}
#takeQuiz {
  text-align: center;
}
#takeQuiz > div {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
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
