
<template>
  <v-container id="container" class="text-xs-center">
    <template v-for="(item, index) in personas">
      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
      <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

      <v-list-tile
        id="personaList"
        v-else
        :key="item.title"
        avatar
        @click="(nav(item.navigate))"
        font-size="25"
        font-weight="600"
      >
        <v-list-tile-avatar v-if="index % 2 === 1" size="150">
          <img :src="item.avatar">
        </v-list-tile-avatar>

        <v-list-tile-content v-if="index % 2 == 1" class="persona-title">
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-content v-if="index % 2 == 0" class="persona-title">
          <v-list-tile-title v-html="item.title" id="text"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-avatar class="avatar-right" v-if="index % 2 === 0" size="150">
          <img :src="item.avatar">
        </v-list-tile-avatar>
      </v-list-tile>
    </template>
  </v-container>
</template>

<script>

import store from '@/store'
import { mapActions } from 'vuex'

export default {
  created() {
    store.commit('navigation/setTopBarTitle', 'Choose your persona')
  },
  data() {
    return {
      personas: [
        {
          avatar: require("@/assets/athena.png"),
          title: "Student",
          navigate: "home"
        },
        {
          avatar: require("@/assets/greek1.png"),
          title: "Certified<br>Pro",
          navigate: "Pro"
        },
        {
          avatar: require("@/assets/zeus.png"),
          title: "Teacher",
          navigate: "Teacher"
        },
        {
          avatar: require("@/assets/aphrodite.png"),
          title: "Public",
          navigate: "Public"
        }
      ]
    };
  },
  methods: {
        ...mapActions('navigation', ['navigate']),
        nav(persona) {
          store.commit('navigation/setPersona', persona)
          this.navigate({url: '/' + persona});
        }
  }
};
</script>
<style scoped>
.container {
  background-image: url("~@/assets/Persona-background.png");
}
.image {
  size: 100;
}
.personas-item:nth-child(odd) {
  margin-right: auto;
}

.personas-item:nth-child(even) {
  margin-left: auto;
}
.persona-title {
  font-family: serif;
  font-size: 40px;
  font-weight: 600px;
  padding-left: 15px;
}
.persona-title > div {
  align-items: center;
  display: grid;
  height: 50px;
}
#text{
  text-align: right;
  padding-right: 15px;
}
.avatar-right > div {
  margin-right: 30px;
}
#personaList {
  height: 100px !important;
}
#personaList > .persona-title {
  height: 100px;
}
#personaList > div.persona-title > div {
  height: 100px;
  line-height: 40px;
}
</style>

