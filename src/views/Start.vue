<template>
    <v-container class="text-xs-center" id="container">
        <div>
            <h1 id="title">MoneyWi$e</h1>
            <p>Challenge your financial literacy</p>
        </div>
        <div style="display: grid;">
            <router-link to="/login"><v-btn class="primary">Login</v-btn></router-link>
            <v-btn class="secondary" flat>Sign Up</v-btn>
        </div>
    </v-container>
</template>

<style>
    #container {
        align-items: center;
        display: grid;
        height: 100%;
    }
    #title {
        font-family: Futura,Trebuchet MS,Arial,sans-serif;
        margin: 20px;
    }
</style>