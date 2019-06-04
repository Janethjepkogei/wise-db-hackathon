<template>
  <v-app dark>
    <top-bar></top-bar>
  
    <!-- <v-toolbar class="primary" app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar> -->

    <v-content class="secondary">
      <router-view/>
    </v-content>
  <bottom-bar></bottom-bar>
  </v-app>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    BottomBar,
    TopBar
  },
  data () {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true
    }
  }
}
</script>

<style>
  .white-text {
    color: white;
  }
</style>
