<template>
    <v-container id="container" class="text-xs-center">
        <h1 id="pickCategory">Pick a Category</h1>
        <!-- <div> -->
          <v-list v-for="(i, index) in categories" :key="index" class="accent" id="list">
            <v-list-title avatar style="display: flex;">
              <v-list-tile-avatar class="avatar">
                <img :src="i.avatar"/>
                <!-- <img :src="require('@/assets/target.png')"/> -->
              </v-list-tile-avatar>
              <v-list-tile-content class="secondary">
                {{i.title}}
                <!-- <v-list-tile-title v-html="i.title"></v-list-tile-title>
                <v-list-tile-sub-title></v-list-tile-sub-title> -->
              </v-list-tile-content>
              <v-list-tile-avatar class="secondary">
                <!-- <v-icon color="green">check_circle</v-icon> -->
                <!-- <v-icon color="yellow">warning</v-icon> -->
                <v-icon :color="i.status">{{icons[i.status]}}</v-icon>
              </v-list-tile-avatar>
            </v-list-title>
          </v-list>
          <div id="more">More ></div>
    </v-container>
</template>

<script>
import store from '@/store'
export default {
  created() {
    store.commit('navigation/setTopBarTitle', 'Quiz Categories')
  },
  data () {
    return {
      categories: [
        {
          avatar: require('@/assets/target.png'),
          title: 'Goal Setting',
          status: 'green'
        },
        {
          avatar: require('@/assets/spending.png'),
          title: 'Spending',
          status: 'red'
        },
        {
          avatar: require('@/assets/tax.png'),
          title: 'Taxation',
          status: 'amber'
        },
        {
          avatar: require('@/assets/education.png'),
          title: 'Cost of College',
          status: 'green'
        },
        {
          avatar: require('@/assets/heart.png'),
          title: 'Charitable Giving',
          status: 'red'
        },
        {
          avatar: require('@/assets/shield.png'),
          title: 'General',
          status: 'amber'
        }
      ],
      icons: {
        red: 'error',
        amber: 'warning',
        green: 'check_circle'
      }
    }
  }
}
</script>

<style>
  #app > div.application--wrap > main > div > div > div
  v-list-title > div.v-list__tile__avatar.avatar {
    justify-content: center;
  }
  #container {
    padding-left: 20px;
    padding-right: 20px;
  }
  #list {
    margin-bottom: 8px;
    padding: 8px 8px 8px 0;
  }
  #list > v-list-title > div.v-list__tile__content {
    padding: 0 8px;
  }
  #list > v-list-title > div.avatar {
    align-items: center;
  }
  #list > v-list-title > div.secondary {
    align-items: center;
    font-family: cursive;
    font-size: 20px;
    font-style: oblique;
    height: 40px;
    text-align: left;
  }
  #more {
    color: #4F8FCF;
    font-family: cursive;
    font-size: 20px;
    font-style: oblique;
    text-align: right;
  }
  #pickCategory {
    color: #4F8FCF;
    font-family: cursive;
    font-style: oblique;
    font-size: 30px;
  }
</style>
