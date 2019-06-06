
<template>
    <v-container>
        <div id="bannerAd" @click="navigate({url: '/categories'})">
            <v-img height="25%" width="100%" :src="require('@/assets/BannerAd.gif')"></v-img>
        </div>
        <div id="network">
            <v-img height="60%" width="60%" :src="require('@/assets/ProHome-Network.png')"></v-img>
        </div>
        <div>
            <br/>
            <br/>
        </div>
        <div id="actions">
            <div id="search" class="button">
                <v-img :src="require('@/assets/job-search.png')"></v-img>
                <h3>Search</h3>
            </div>
            <div id="discuss" class="button">
                <v-img :src="require('@/assets/discussion.png')"></v-img>
                <h3>Discuss</h3>
            </div>
        </div>
        <div id="actions">
            <div id="learn" class="learn-button">
                <h3>Learn</h3>
                <v-img :src="require('@/assets/book.png')"></v-img>
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
        store.commit('navigation/setTopBarTitle', 'Certified Pro')
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
    .learn-button {
        height: 10%;
        width: 10%;
        vertical-align: bottom;
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
    #network {
        text-align: center;
    }
    #network > div {
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
    }
    #network > h2 {
        font-family: 'Times New Roman', Times, serif;
        font-size: 45px;
    }
    /* #learn {
        text-align: center;
        align-content: center;
    } */
</style>
