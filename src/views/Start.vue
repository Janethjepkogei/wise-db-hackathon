<template>
    <v-container class="text-xs-center" id="container">
        <div style="width: 100%;">
            <div>
                <h1 id="title">MoneyW!se</h1>
                <p>Challenge your financial literacy</p>
            </div>
            <div><v-img :src="require('@/assets/students.png')"></v-img></div>
            <div id="buttons">
                <router-link to="/login"><v-btn class="primary" @click="login()">Login</v-btn></router-link>
                <router-link to="#" id="signUp" class="white-text">Sign Up</router-link>
            </div>
        </div>
        
    </v-container>
</template>

<script>
import store from '@/store'

export default {
    methods: {
        login() {
            store.commit("account/setLoggedIn", true);
            this.$router.push('/home');
        }
    }
}
</script>

<style>
    #buttons {
        display: grid;
        padding-top: 10px;
    }
    #container {
        align-items: center;
        display: grid;
        height: 100%;
        padding-left: 0;
        padding-right: 0;
    }
    #signUp {
        text-decoration: none;
    }
    #title {
        font-family: Futura, Trebuchet MS, Arial, sans-serif;
        font-size: 50px;
    }
</style>