<template>
  <v-container>
    <quiz-card cardTitle="Graduate Dollar" cardText1="Quiz Master: Tim" cardText2="Level 3 / 500 Pts" v-bind:cardImage="require('@/assets/graduation2.jpg')"></quiz-card>
    <quiz-card cardTitle="Little Hearts" cardText1="Quiz Master: Wise" cardText2="Level 1 / 200 Pts" v-bind:cardImage="require('@/assets/hands-1926414_640.jpg')"></quiz-card>
    <quiz-card cardTitle="House Call" cardText1="Quiz Master: Smith" cardText2="Level 5 / 1000 Pts" v-bind:cardImage="require('@/assets/house-1183150_640.jpg')"></quiz-card>
  </v-container>
</template>

<script>
import QuizCard from '@/components/QuizCard.vue'

export default {
  components: {
    QuizCard
  },
  data () {
    return {
      //
    }
  }
}
</script>