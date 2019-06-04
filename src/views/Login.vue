<template>
  <v-container class="text-xs-center">
      {{title}}
  </v-container>
</template>

<script>
  export default {
    data () {
        return {
            menu: true,
            title: 'Login Page'
        }
    }
  }
</script>

<style>
  v-menu > div.v-menu__content.theme--dark.menuable__content__active {
    left: 0;
  }
  v-menu {
    left: 0;
    top: 56px;
  }
</style>
