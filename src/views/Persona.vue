
<template>
  <v-container id="container" class="text-xs-center">
    <template v-for="(item, index) in personas">
      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
      <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

      <v-list-tile
        v-else
        :key="item.title"
        avatar
        @click="navigate({url: item.navigate})"
        font-size="25"
        font-weight="600"
      >
        <v-list-tile-avatar size="92">
          <img :src="item.avatar">
        </v-list-tile-avatar>

        <v-list-tile-content font-size="25">
          <v-list-tile-title v-html="item.title" id="text"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-container>
</template>

<script>

import store from '@/store'

export default {
  created() {
    store.commit('navigation/setTopBarTitle', 'Persona')
  },
  data() {
    return {
      personas: [
        {
          avatar: require("@/assets/athena.png"),
          title: "Student",
          navigate: ""
        },
        {
          avatar: require("@/assets/greek1.png"),
          title: "Certified Pro",
          navigate: "/Pro"
        },
        {
          avatar: require("@/assets/zeus.png"),
          title: "Teacher",
          navigate: "/Teacher"
        },
        {
          avatar: require("@/assets/aphrodite.png"),
          title: "Public",
          navigate: "/PublicHome"
        }
      ]
    };
  }
};
</script>
<style scoped>
.container {
  background-image: url("~@/assets/Persona-background.png");
}
.image {
  size: 70;
}
.personas-item:nth-child(odd) {
  margin-right: auto;
}

.personas-item:nth-child(even) {
  margin-left: auto;
}

.v-list__title {
  font-size: 25px;
  font-weight: 600;
}
</style>

