<template>
    <v-container id="quizResult" class="container">
        <v-flex>
            <v-layout id="congratulationsMessage">AWESOME!</v-layout>
            <v-layout id="score">
                <div>Your Score</div>
                <div>8/10</div>
            </v-layout>
            <v-layout id="#scoreRank">
                <v-content class="center-text">Score: 2782</v-content>
                <v-content class="center-text">Rank: 36/250</v-content>
            </v-layout>
            <v-layout id="rankChange">
                <v-content class="center-text">You moved up 4 places</v-content>
            </v-layout>
            <v-layout id="resultOptions">
                <v-btn flat>Review incorrect question</v-btn>
                <v-btn flat>Review all questions</v-btn>
                <v-btn flat @click="$router.push('/quizzes')">Retake Quiz</v-btn>
            </v-layout>
        </v-flex>
    </v-container>
</template>

<style>
    #quizResult > .layout {
        align-items: center;
    }
    #congratulationsMessage {
        color: red;
        font-weight: bold;
        font-size: 50px;
        justify-content: center;
    }
    #score {
        display: grid;
        font-size: 40px;
        justify-content: center;
    }
    #rankChange > main, #scoreRank > main {
        font-size: 20px;
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }
    #score > div {
        text-align: center;
    }
    #quizResult.container {
        align-items: flex-start;
    }
    .center-text {
        text-align: center;
    }
    #resultOptions {
        display: grid;
        margin-left: 20px;
        margin-right: 20px;
    }
    #resultOptions > button {
        background-color: #4F8FCF;
        margin-top: 20px;
    }
    #scoreRank {
        font-size: 20px;
    }
    #quizResult > div > .layout {
        margin-bottom: 30px;
        margin-top: 30px;
    }
    #\#scoreRank > main {
        font-size: 20px;
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }
</style>