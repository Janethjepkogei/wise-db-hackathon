import Categories from "@/views/Categories.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";
import Quizzes from "@/views/Quizzes.vue";
import Teacher from "@/views/Teacher.vue";
import MultipleChoice from "@/views/questions/MultipleChoice.vue";
import Persona from "@/views/Persona.vue";

const routes = [
  {
    path: "/categories",
    name: "categories",
    component: Categories
  },
  {
    path: "/helloworld",
    name: "helloworld",
    component: HelloWorld
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/quizzes",
    name: "quizzes",
    component: Quizzes
  },
  {
    path: "/teacher",
    name: "teacher",
    component: Teacher
  },
  {
    path: "/quizzes/multiplechoice",
    name: "multiplechoice",
    component: MultipleChoice
  },
  {
    path: "/persona",
    name: "persona",
    component: Persona
  }
];

export default routes.map(route => {
  return { ...route, meta: { public: false } };
});
