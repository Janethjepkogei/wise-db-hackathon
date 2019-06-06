<template>
  <v-app dark>
    <top-bar v-if="loggedIn"></top-bar>
    <v-content class="secondary" id="mainContent">
      <router-view/>
    </v-content>
  <bottom-bar v-if="loggedIn"></bottom-bar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import BottomBar from '@/components/BottomBar.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    BottomBar,
    TopBar
  },
  computed: {
    ...mapState({
      loggedIn: state => state.account.loggedIn
    })
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .salsbury {
    font-family: 'salsbury', sans-serif;
  }
  .white-text {
    color: white;
  }
  #mainContent {
    height: 700px
  }
  
</style>
