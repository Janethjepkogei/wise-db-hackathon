<template>
    <v-container class="container" id="mentorAdviceContainer">
        <v-img id="mentor" :src="require('@/assets/zeus.png')" @click="dialog = !dialog"></v-img>
        <v-dialog v-model="dialog" max-width="500px">
            <v-card id="dialogBox">
                <v-card-title>
                    <v-avatar><img :src="require('@/assets/zeus.png')"/></v-avatar>
                    <h3 class="mentor-title">{{title}}</h3>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text v-html="message" class="mentor-advice"></v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="primary" @click="dialog=false">Close</v-btn>
                </v-card-actions>
            </v-card>
      </v-dialog>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            dialog: false
        }
    },
    props: ['title', 'message']
}
</script>

<style scoped>
    .mentor-advice {
        font-size: 20px;
    }
    .mentor-title {
        font-size: 25px;
    }
    #mentorAdviceContainer {
        margin-top: -10px;
        padding-bottom: 0;
        padding-top: 0;
    }
    #app > div.v-dialog__content.v-dialog__content--active > div > div {
        background-color: #005A9C;
    }
    #dialogBox > div.v-card__actions {
        justify-content: center;
    }
    #dialogBox > div.v-card__title > h3 {
        padding-left: 15px;
    }
    #mentor {
        border-radius: 50%;
        height: 75px;
        margin-left: auto;
        margin-right: auto;
        width: 75px;
    }
    #topBar {
        position: sticky;
    }
</style>
