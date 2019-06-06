<template>
  <v-container id="categoriesContainer" class="container text-xs-center">
      <h1 id="pickCategory" class="salsbury">Pick a Category</h1>
      <v-list v-for="(i, index) in categoryNames" :key="i.id" class="accent" id="list">
        <v-list-title avatar style="display: flex;" @click="navigate({url: '/quizzes'})">
          <v-list-tile-avatar class="avatar">
            <img :src="categoryImages[index].avatar"/>
          </v-list-tile-avatar>
          <v-list-tile-content class="salsbury secondary">
            {{i.name}}
          </v-list-tile-content>
          <v-list-tile-avatar class="secondary">
            <v-icon :color="categoryImages[index].status">{{icons[categoryImages[index].status]}}</v-icon>
          </v-list-tile-avatar>
        </v-list-title>
      </v-list>
      <div id="more" class="salsbury">More ></div>
      <mentor-advice title="Message from Plato" :message="message"></mentor-advice>
  </v-container>
</template>

<script>
import store from "@/store";
import MentorAdvice from "@/components/MentorAdvice.vue";
import { quizService } from "@/services/quiz.service";
import { mapActions } from 'vuex'
export default {
  components: {
    MentorAdvice
  },
  created() {
    store.commit("navigation/setTopBarTitle", "Quiz Categories");
    quizService.getQuizCategories().then(res => {
      this.categoryNames = res.data;
    });
  },
  data() {
    return {
      categoryNames: [
        {
          name: "Goal Setting"
        },
        {
          name: "Spending"
        },
        {
          name: "Taxation"
        },
        {
          name: "Cost of College"
        },
        {
          name: "Charitable Giving"
        },
        {
          name: "GENERAL"
        }
      ],
      categoryImages: [
        {
          avatar: require("@/assets/target.png"),
          status: "green"
        },
        {
          avatar: require("@/assets/spending.png"),
          status: "red"
        },
        {
          avatar: require("@/assets/tax.png"),
          status: "amber"
        },
        {
          avatar: require("@/assets/education.png"),
          status: "green"
        },
        {
          avatar: require("@/assets/heart.png"),
          status: "red"
        },
        {
          avatar: require("@/assets/shield.png"),
          status: "amber"
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
      ...mapActions('navigation', ['navigate'])
  }
}
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
  font-size: 20px;
  font-style: oblique;
  height: 40px;
  text-align: left;
}
#more {
  color: #4f8fcf;
  font-size: 15px;
  font-style: oblique;
  margin-bottom: -10px;
  margin-top: -10px;
  text-align: right;
}
#pickCategory {
  color: #4f8fcf;
  font-style: oblique;
  font-size: 25px;
}
</style>
