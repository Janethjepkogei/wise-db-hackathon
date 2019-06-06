<template>
    <v-container id="questionContainer">
        <v-img id="questionImage" :src="require('@/assets/mortgage.png')"></v-img>
        <div id="question">
            What affects the amount of interest that you would
            pay on a loan?
        </div>
        <v-list v-for="(choice,index) in answerChoices" :key="index" class="answerChoices"
                :class="index === selected ? 'selected' : ''">
            <v-list-tile id="choice" @click="selected = index">
                <v-list-tile-content>
                    {{choice}}
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-flex id="questionNavigation">
            <v-layout row>
                <v-icon id="arrow">arrow_back</v-icon>
                <mentor-advice title="Hint from Plato" :message="message"></mentor-advice>
                <v-icon id="arrow">arrow_forward</v-icon>
            </v-layout>
        </v-flex>
    </v-container>
</template>

<script>
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
    }
}
</script>

<style>
    .answerChoices {
        background-color: #4F8FCF !important;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .selected {
        background-color: #17395b !important;
    }
    #arrow {
        font-weight: bold;
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
    #question {
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    #questionImage {
        height: 75%;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
    }
    #questionNavigation {
        margin-top: 25px;
    }
</style>
