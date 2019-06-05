<template>
    <v-toolbar app class="primary">
      <v-toolbar-side-icon @click="menu = !menu" id="menuIcon"></v-toolbar-side-icon>
      <v-menu v-model="menu" :close-on-content-click="false" dark transition="slide-y-transition" origin="left center">
        <v-card class="accent">
            <v-list class="accent">
            <v-list-tile avatar>
                <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-list-tile-avatar>

                <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
                <v-list-tile-sub-title>Student</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                <v-btn
                    icon
                    @click="fav = !fav"
                >
                    <v-icon>settings</v-icon>
                </v-btn>
                </v-list-tile-action>
            </v-list-tile>
            </v-list>

            <v-divider class="secondary"></v-divider>

            <v-list class="accent">
            <v-list-tile>
                <!-- <v-list-tile-action>
                <v-switch v-model="message" color="purple"></v-switch>
                </v-list-tile-action> -->
                <v-list-tile-title>Notifications</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
                <!-- <v-list-tile-action>
                <v-switch v-model="hints" color="purple"></v-switch>
                </v-list-tile-action> -->
                <v-list-tile-title>Messages</v-list-tile-title>
            </v-list-tile>
            </v-list>

            <!-- <v-divider class="secondary"></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn flat @click="menu = false">Cancel</v-btn>
            <v-btn flat @click="menu = false">Save</v-btn>
            </v-card-actions> -->
        </v-card>
        </v-menu>
      <v-toolbar-title>{{topBarTitle}}</v-toolbar-title>
    </v-toolbar>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            topBarTitle: state => state.navigation.topBarTitle
        })
    },
    data () {
        return {
            menu: false
        }
    }
}
</script>

<style>
    #app > div.v-menu__content {
        left: 0 !important;
        top: 56px !important;
    }
</style>