<template>
    <v-container>
        <div class="mentor">
            <v-img height="100%" width="100%" :src="require('@/assets/blog.png')"></v-img>
            
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
        store.commit('navigation/setTopBarTitle', 'Blog')
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