<template>
  <!-- <v-toolbar app class="primary" style="position: sticky; bottom: 0;">
    </v-toolbar> -->
  <v-bottom-nav :value="true" class="primary" app>
    <v-btn
      flat
      value="recent"
      @click="nav()"
    >
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn
      flat
      value="favorites"
      @click="navigate({url: '/persona'})"
    >
      <span>Logout</span>
      <v-icon>power_settings_new</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import store from '@/store'

export default {
  computed: {
    ...mapState({
      loggedIn: state => state.account.loggedIn,
      topBarTitle: state => state.navigation.topBarTitle,
      persona: state => state.navigation.persona
    })
  },
  methods: {
    ...mapActions('navigation', ['navigate']),
    nav() {
      this.navigate({url: '/' + this.persona})
    }
  }
}
</script>

<style>
</style>