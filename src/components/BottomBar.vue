<template>
  <v-bottom-nav :value="true" class="primary" app>
    <v-btn
      color="active"
      flat
      value="recent"
      @click="navigate({url: '/home'})"
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

<script>
import { mapActions } from 'vuex'
import store from '@/store'

export default {
  methods: {
    ...mapActions('navigation', ['navigate'])
  }
}
</script>

<style>
</style>