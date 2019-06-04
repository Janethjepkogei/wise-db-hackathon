<template>
    <v-bottom-nav :value="true" class="primary" app>
      <v-btn
        color="active"
        flat
        value="recent"
      >
        <span>Home</span>
        <v-icon>home</v-icon>
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
</template>

<style>
    v-bottom-nav {
        /* position: fixed !important; */
    }
</style>