<template>
    <v-container id="questionContainer">
        <v-img :src="require('@/assets/piggy-bank.jpg')"></v-img>
        <div class="question">
            Retirement income paid by a company is called a Pension.
        </div>
        <v-layout class="true-false">
            <v-btn flat class="answerChoices" :class="'T' === selected ? 'selected' : ''" @click="selected = 'T'">True</v-btn>
            <v-btn flat class="answerChoices" :class="'F' === selected ? 'selected' : ''" @click="selected = 'F'">False</v-btn>
        </v-layout>
        <v-flex id="questionNavigation">
            <v-layout row>
                <v-icon @click="navigate({url: 'multiplechoice'})" class="navigation-arrow">arrow_back</v-icon>
                <mentor-advice title="Hint from Plato" :message="message"></mentor-advice>
                <v-icon @click="navigate({url: 'result'})" class="navigation-arrow">arrow_forward</v-icon>
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
        store.commit('navigation/setTopBarTitle', 'Debt Quiz')
    },
    data() {
        return {
            answerChoices: [
                'Your credit rating',
                'How much you borrow',
                'Time to repay the loan',
                'All of the above'
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
        justify-content: center;
        text-align: center;
    }
    .selected {
        background-color: #17395b !important;
    }
    .true-false {
        justify-content: center;
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
