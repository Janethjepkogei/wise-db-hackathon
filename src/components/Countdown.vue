<template>
    <v-container id="countdown" class="accent">
        <v-layout row wrap>
            <v-flex v-for="(unit, index) in timeUnits" :key="index" xs3>
                <v-card id="timeUnit" flat>
                    <div class="secondary">{{timeValues[index]}}</div>
                    <p>{{unit}}</p>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                timeUnits: ['Days', 'Hours', 'Minutes', 'Seconds'],
                timeValues: [5, 15, 12, 36]
            }
        }
    }
</script>

<style>
    #countdown {
        align-items: center;
        display: flex;
        height: 60px;
        width: 240px;
    }
    #timeUnit {
        background-color: unset;
        display: grid !important;
        height: 50px;
        justify-content: center;
        text-align: center;
        width: 50px;
    }
    #timeUnit > div {
        align-items: center;
        display: flex;
        font-size: 20px;
        height: 40px;
        justify-content: center;
        width: 40px;
    }
    #timeUnit > p {
        font-size: 10px;
        margin: 0;
    }
</style>
