<template>
    <v-container class="container text-xs-center">
        <div style="width: 100%;">
            <div>
                <v-img id="wiselogo" :src="require('@/assets/wise-title.png')"  ></v-img>
                <div class="title font-weight-regular font-italic">Challenge your Financial Literacy</div>
            </div>
            <p>
            <div><v-img id="wisephoto" :src="require('@/assets/students.png')"></v-img></div>
            <div id="buttons">
                <v-btn id="signUp" class="primary" @click="signUp()">Start Here</v-btn>
                <v-btn flat id="login" class="secondary" @click="login()">Login</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'

export default {
    created() {
        store.commit('navigation/setTopBarTitle', 'Start')
    },
    methods: {
        ...mapActions('navigation', ['navigate']),
        login() {
            store.commit("account/setLoggedIn", true);
            this.navigate({url: '/home'})
        },
        signUp() {
            store.commit("account/setLoggedIn", true);
            this.navigate({url: '/persona'})
        }
    }
}
</script>

<style>
    .container {
        align-items: center;
        display: grid;
        height: 100%;
        padding-left: 0;
        padding-right: 0;
    }
    #buttons {
        display: grid;
        justify-content: center;
        padding-top: 10px;
    }
    #login {
        width: 'fill-content';
    }
    #login {
        text-decoration: underline;
    }
    #title {
        font-family: 'Futura', 'Trebuchet MS', Arial, sans-serif;
        font-size: 50px;
    }
    #wiselogo {
        height: 150px;
        margin-top: 15px;
    }
    #wisephoto {
        margin: 70px 0 55px 0;
    }
</style>