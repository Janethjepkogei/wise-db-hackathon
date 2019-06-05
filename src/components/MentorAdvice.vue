<template>
    <v-container id="container">
        <v-img id="mentor" :src="require('@/assets/zeus.png')" @click="dialog = !dialog"></v-img>
        <!-- <v-dialog v-model="dialog" hide-overlay>
            <v-container>
                Test
                <v-btn @click="dialog = !dialog">Ok</v-btn>
            </v-container>
        </v-dialog> -->
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title primary-title>
                    <h3>Message from Mentor Plato</h3>
                </v-card-title>

                <v-card-text>
                    Test
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" flat @click="dialog=false">Close</v-btn>
                </v-card-actions>
            </v-card>
      </v-dialog>
    </v-container>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue'
import TopBar from '@/components/TopBar.vue'
import store from '@/store'

export default {
    components: {
        // BottomBar,
        TopBar
    },
    created() {
        // store.commit('navigation/setTopBarTitle', 'A Message from Plato')
    },
    data() {
        return {
            dialog: false
        }
    }
}
</script>

<style>
    #container {
        margin-top: -10px;
        padding-bottom: 0;
        padding-top: 0;
    }
    #app > div.v-dialog__content.v-dialog__content--active > div > div {
        background-color: #005A9C;
    }
    #mentor {
        border-radius: 50%;
        height: 50px;
        margin-left: auto;
        margin-right: auto;
        width: 50px;
    }
    #title {
        font-size: 20px;
    }
    #topBar {
        position: sticky;
    }
</style>
