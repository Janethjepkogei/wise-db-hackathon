<template>
    <v-container id="questionContainer">
        <v-img id="mcimage" height="80%" width="50%" :src="require('@/assets/mortgage.png')"></v-img>
        <div class="question">
            What affects the amount of interest that you would
            pay on a loan?
        </div>
        <v-list v-for="(choice,index) in answerChoices" :key="index" id="mcAnswerChoices"
                :class="index === selected ? 'selected' : ''">
            <v-list-tile id="choice" @click="selected = index">
                <v-list-tile-content>
                    {{choice}}
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-flex id="questionNavigation">
            <v-layout row>
                <v-icon class="navigation-arrow" @click="$router.push({name: navigateBack()})">arrow_back</v-icon>
                <mentor-advice title="Hint from Plato" :message="message"></mentor-advice>
                <v-icon @click="navigate({url: 'truefalse'})" class="navigation-arrow">arrow_forward</v-icon>
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
        store.commit('navigation/setTopBarTitle', 'Quiz Question 1')
    },
    data() {
        return {
            answerChoices: [
                'Your credit rating',
                'How much you borrow',
                'Time to repay the loan',
                'All of the above'
            ],
            message: 'Many factors affect your interest rate, including your credit score, ' +
                'amount borrowed, amount of time borrowed for, and more.',
            selected: null
        }
    },
    methods: {
        ...mapActions('navigation', ['navigate']),
        navigateBack() {
            const persona = localStorage.getItem('persona');
            if (persona === 'Teacher') {
                return 'teacherquizzes';
            } else {
                return 'quizzes';
            }
        }
    }
}
</script>

<style>
    #mcAnswerChoices {
        background-color: #4F8FCF !important;
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
    #mcimage {
        margin-left: auto;
        margin-right: auto;
    }
    #questionContainer {
        padding-left: 25px;
        padding-right: 25px;
    }
    #questionNavigation {
        margin-top: 25px;
    }
</style>
