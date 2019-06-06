<template>
  <v-container id="container" class="text-xs-center">
        <countdown></countdown>
        <div id="takeQuiz" @click="navigate({url: '/categories'})">
            <v-img height="50%" width="50%" :src="require('@/assets/test.png')"></v-img>
            <h2 class='salsbury'>Take Quiz</h2>
        </div>
        <div id="rank" class="salsbury">
            Rank 41 / 2600 points
        </div>
        <div id="actions">
            <div id="learn" class="button" @click="navigate({url: '/resources'})">
                <v-img :src="require('@/assets/book.png')"></v-img>
                <h3>Learn</h3>
            </div>
            <div id="ask" class="button" @click="navigate({url: '/QAForum'})">
                <v-img :src="require('@/assets/conversation.png')"></v-img>
                <h3>Ask</h3>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Countdown from '@/components/Countdown.vue'
import store from '@/store'

export default {
    components: {
        Countdown
    },
    created() {
        store.commit('navigation/setTopBarTitle', 'Home')
    },
    methods: {
        ...mapActions('navigation', ['navigate'])
    }
}
</script>

<style>
    .button {
        height: 30%;
        text-align: center;
        width: 30%;
    }
    #actions {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
    #rank {
        color: #4F8FCF;
        font-size: 20px;
        font-style: oblique;
        font-weight: bold;
        text-align: center;
    }
    #takeQuiz {
        text-align: center;
    }
    #takeQuiz > div {
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
    }
    #takeQuiz > h2 {
        font-size: 45px;
    }
</style>
