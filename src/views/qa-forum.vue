<template>
    <v-container>
        <div class="mentor">
            <v-img height="25%" width="25%" :src="require('@/assets/conversation.png')"></v-img>
            <!-- <h2>ASK</h2> -->
            <p></p>
            <v-img height="100%" width="75%" :src="require('@/assets/Ask-your-question-here.png')"></v-img>
            <p></p>
            <v-img height="100%" width="95%" :src="require('@/assets/QA-panel.png')"></v-img>
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
        store.commit('navigation/setTopBarTitle', 'QAForum')
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
        margin-top: 60px;
    }
    #status {
        color: #4F8FCF;
        font-size: 20px;
        font-style: oblique;
        font-weight: bold;
        text-align: center;
    }
    .mentor {
        text-align: center;
    }
    .mentor > div {
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
    }
    .mentor > h2 {
        font-family: 'Times New Roman', Times, serif;
        font-size: 45px;
    }
</style>