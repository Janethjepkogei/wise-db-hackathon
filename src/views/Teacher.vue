<template>
    <v-container>
        <div id="teacherTitle">
            <v-img height="50%" width="50%" :src="require('@/assets/mentor.png')"></v-img>
            <h2 class="salsbury">Teacher</h2>
            <div id="teacherStatus">
                10 Mentees / 5 Waiting
            </div>
        </div>
        <div id="teacherActions">
            <div id="quiz" class="button" @click="navigate({url: '/teacher/quizzes'})">
                <v-img :src="require('@/assets/exam.png')"></v-img>
                <h3>Quiz</h3>
            </div>
            <!-- <div id="discuss" class="button">
                <v-img :src="require('@/assets/discussion.png')"></v-img>
                <h3>Ask</h3>
            </div> -->
            <div id="learn" class="button">
            	<v-img :src="require('@/assets/book.png')"></v-img>
                <h3>Learn</h3>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'

export default {
    components: {
    },
    created() {
        store.commit('navigation/setTopBarTitle', 'Teacher Home')
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
    #teacherActions {
        display: flex;
        justify-content: space-around;
    }
    #teacherStatus {
        color: #4F8FCF;
        font-size: 20px;
        font-style: oblique;
        font-weight: bold;
        text-align: center;
    }
    #teacherTitle {
        text-align: center;
    }
    #teacherTitle > div {
        margin-left: auto;
        margin-right: auto;
    }
    #teacherTitle > h2 {
        font-size: 45px;
    }
</style>