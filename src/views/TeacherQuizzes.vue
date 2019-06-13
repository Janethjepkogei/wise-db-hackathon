<template>
  <v-container style="margin:0; height:100%; overflow: hidden;">
    <quiz-card cardTitle="Graduate Dollar" cardText1="Quiz Master: Tim" cardText2="Level 3 / 500 Pts" v-bind:cardImage="require('@/assets/graduation2.jpg')" likes="10" comments="2"></quiz-card>
    <quiz-card cardTitle="Little Hearts" cardText1="Quiz Master: Wise" cardText2="Level 1 / 200 Pts" v-bind:cardImage="require('@/assets/hands-1926414_640.jpg')" likes="7" comments="2"></quiz-card>
    <quiz-card cardTitle="House Call" cardText1="Quiz Master: Smith" cardText2="Level 5 / 1000 Pts" v-bind:cardImage="require('@/assets/house-1183150_640.jpg')" likes="2" comments="0"></quiz-card>
    <v-btn @click="navigate({url: '/teacher/quizcreation'})"
              absolute
              dark
              fab
              top
              right
              color="blue"
            >
              <v-icon>add</v-icon>
            </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'
import QuizCard from '@/components/QuizCard.vue'

export default {
    components: {
      QuizCard
    },
    created() {
        store.commit('navigation/setTopBarTitle', 'Teacher Quizzes')
    },
    methods: {
        ...mapActions('navigation', ['navigate'])
    }
}
</script>