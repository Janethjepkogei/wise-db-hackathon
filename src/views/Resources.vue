<template>
  <v-container id="categoriesContainer" class="text-xs-center">
    <div id="image1">
      <v-img height="30%" width="30%" :src="require('@/assets/book.png')"></v-img>
      <h2>Learn</h2>
    </div>
    <v-list v-for="(i, index) in resourcesNames" :key="i.id" class="accent" id="list">
      <v-list-title
        avatar
        style="display: flex;"
        @click="nav(resourcesImages[index].navigate)"
      >
        <v-list-tile-avatar class="avatar">
          <img :src="resourcesImages[index].avatar">
        </v-list-tile-avatar>
        <v-list-tile-content class="secondary">{{i.name}}</v-list-tile-content>
      </v-list-title>
    </v-list>
    <div id="more">More ></div>
  </v-container>
</template>

<script>
import store from "@/store";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      resourcesNames: [
        {
          name: "Money Power"
        },
        {
          name: "NYSE"
        },
        {
          name: "Deutche Bank"
        },
        {
          name: "W!se blog"
        },
        {
          name: "Investopedia"
        },
        {
          name: "Wikipedia"
        }
      ],
      resourcesImages: [
        {
          avatar: require("@/assets/target.png"),
          status: "green",
          navigate: "https://www.wise-ny.org/"
        },
        {
          avatar: require("@/assets/spending.png"),
          status: "red",
          navigate: "https://www.nyse.com/index"
        },
        {
          avatar: require("@/assets/tax.png"),
          status: "amber",
          navigate: "https://www.db.com"
        },
        {
          avatar: require("@/assets/education.png"),
          status: "green",
          navigate: "/Blog"
        },
        {
          avatar: require("@/assets/heart.png"),
          status: "red",
          navigate: "https://www.investopedia.com/"
        },
        {
          avatar: require("@/assets/shield.png"),
          status: "amber",
          navigate: "https://en.wikipedia.org/"
        }
      ],
      icons: {
        red: "error",
        amber: "warning",
        green: "check_circle"
      },
      message:
        "Hi Eddy,<br><br>" +
        "You may need to focus on Spending. You have taken fewer (0) quizzes this topic! " +
        "You have also identified Spending as a weak area."
    };
  },
  methods: {
    ...mapActions("navigation", ["navigate"]),
    nav(url) {
      if (url === '/Blog') {
        this.navigate({url: url});
      }
      window.location = url;
    }
  }
};
</script>

<style>
v-list-title > div.v-list__tile__avatar.avatar {
  justify-content: center;
}
#categoriesContainer {
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
  color: #4f8fcf;
  font-family: cursive;
  font-size: 15px;
  font-style: oblique;
  margin-bottom: -10px;
  margin-top: -10px;
  text-align: right;
}
#pickCategory {
  color: #4f8fcf;
  font-family: cursive;
  font-style: oblique;
  font-size: 25px;
}
#image1 {
  text-align: -webkit-center;
  font-size: x-large;
}
</style>
