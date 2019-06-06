<template>
  <quiz-card cardTitle="Graduate Dollar" cardText="there" v-bind:cardImage="require('@/assets/graduation2.jpg')">
  </quiz-card>
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