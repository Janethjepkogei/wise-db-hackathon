<template>
  <!-- <v-toolbar app class="primary" style="position: sticky; bottom: 0;">
    </v-toolbar> -->
  <v-bottom-nav :value="true" class="primary" app>
    <v-btn
      flat
      value="recent"
      @click="navigate({url: '/persona'})"
    >
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn
      flat
      value="favorites"
    >
      <span>Logout</span>
      <v-icon>favorite</v-icon>
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