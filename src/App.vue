<template>
  <v-app dark>
    <v-toolbar app class="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      <v-toolbar-items>
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  
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

    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      class="primary"
    >
      <v-btn
        color="active"
        flat
        value="recent"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="active"
        flat
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="active"
        flat
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>

  </v-app>
</template>

<script>
export default {
  name: 'App',
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
