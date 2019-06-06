<template>
    <v-container class="container text-xs-center">
        <div style="width: 100%;">
            <div>
                <!-- <h1 id="title">$W!se</h1> -->
                <v-img :src="require('@/assets/wise-title.png')"  ></v-img>
                <!-- <p>Challenge your financial literacy</p> -->
                <div class="title font-weight-regular font-italic">Challenge your Financial Literacy</div>
            </div>
            <p>
            <div><v-img :src="require('@/assets/students.png')"></v-img></div>
            <div id="buttons">
                <v-btn id="login" class="primary" @click="login()">Login</v-btn>
                <v-btn id="signUp" class="primary" @click="signUp()">Sign Up</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'

export default {
    methods: {
        ...mapActions('navigation', ['navigate']),
        login() {
            store.commit("account/setLoggedIn", true);
            this.navigate({url: '/home', title: 'Home'})
        },
        signUp() {
            store.commit("account/setLoggedIn", true);
            this.navigate({url: '/persona', title: 'Persona'})
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
    #signUp {
        text-decoration: none;
    }
    #title {
        font-family: 'Futura', 'Trebuchet MS', Arial, sans-serif;
        font-size: 50px;
    }
</style>