<template>
  <v-container id="container" class="text-xs-center">
      <h1 id="pickCategory">Pick a Category</h1>
      <v-list v-for="(i, index) in categories" :key="index" class="accent" id="list">
        <v-list-title avatar style="display: flex;">
          <v-list-tile-avatar class="avatar">
            <img :src="i.avatar"/>
          </v-list-tile-avatar>
          <v-list-tile-content class="secondary">
            {{i.title}}
          </v-list-tile-content>
          <v-list-tile-avatar class="secondary">
            <v-icon :color="i.status">{{icons[i.status]}}</v-icon>
          </v-list-tile-avatar>
        </v-list-title>
      </v-list>
      <div id="more">More ></div>
      <mentor-advice></mentor-advice>
      <!-- <v-img id="mentor" :src="require('@/assets/user.png')"></v-img> -->
  </v-container>
</template>

<script>
import store from '@/store'
import MentorAdvice from '@/components/MentorAdvice.vue'
export default {
  components: {
    MentorAdvice
  },
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
    margin-bottom: -10px;
    padding: 3px 3px 3px 0;
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
    font-size: 15px;
    font-style: oblique;
    margin-bottom: -10px;
    margin-top: -10px;
    text-align: right;
  }
  #pickCategory {
    color: #4F8FCF;
    font-family: cursive;
    font-style: oblique;
    font-size: 25px;
  }
</style>
