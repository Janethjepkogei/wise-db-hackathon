<template>
    <v-container id="questionContainer">
        <!-- <v-img :src="require('@/assets/mortgage.png')"></v-img> -->
        <div class="question">
            Suppose you had $100 in a
            savings account and the interest
            rate was 2% per year.
            After five years, how much would
            you have in the account if you
            left the money to grow?
        </div>
        <v-list v-for="(choice,index) in answerChoices" :key="index" class="answerChoices"
                :class="index === selected ? 'selected' : ''">
            <v-list-tile id="choice" @click="selected = index">
                <v-list-tile-content>
                    {{choice}}
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <div class="question">
            At any time, if you need help,
            summon me by clicking on my
            picture below
        </div>
        <v-flex id="questionNavigation">
            <v-layout row>
                <v-icon class="navigation-arrow" style="visibility: hidden;">arrow_back</v-icon>
                <mentor-advice title="Hint from Plato" :message="message"></mentor-advice>
                <v-icon @click="navigate({url: 'publicquizresult'})" class="navigation-arrow">arrow_forward</v-icon>
            </v-layout>
        </v-flex>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import MentorAdvice from '@/components/MentorAdvice.vue'
import store from '@/store'
export default {
    components: {
        MentorAdvice
    },
    created() {
        store.commit('navigation/setTopBarTitle', 'Teaser Quiz')
    },
    data() {
        return {
            answerChoices: [
                'More than $102',
                'Less than $102',
                'Exactly $102'
            ],
            message: 'Remember the formula that you used in middle school arithmetic to ' +
                'calculate interest? Add it to a real life parameter such as credit worthiness!',
            selected: null
        }
    },
    methods: {
        ...mapActions('navigation', ['navigate'])
    }
}
</script>

<style>
    .answerChoices {
        background-color: #4F8FCF !important;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .navigation-arrow {
        align-items: center;
        display: flex !important;
        font-weight: bold;
    }
    .question {
        font-size: 20px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .selected {
        background-color: #17395b !important;
    }
    #backButton > div {
        height: 25%;
        width: 25%;
    }
    #choice {
        background: unset;
        height: 30px;
    }
    #questionContainer {
        padding-left: 25px;
        padding-right: 25px;
    }
    #questionNavigation {
        margin-top: 25px;
    }
</style>
