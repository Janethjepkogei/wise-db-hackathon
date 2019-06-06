import Categories from "@/views/Categories.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";
import TeacherQuizzes from "@/views/TeacherQuizzes.vue";
import Teacher from "@/views/Teacher.vue";
import MultipleChoice from "@/views/questions/MultipleChoice.vue";
import QuizCreation from "@/views/QuizCreation.vue";
import Persona from "@/views/Persona.vue";
import Pro from '@/views/Pro.vue'
import TrueFalse from '@/views/questions/TrueFalse.vue'
import PublicHome from "@/views/PublicHome.vue";
import PublicQuiz from "@/views/PublicQuiz.vue";
import PublicResult from "@/views/PublicResult.vue";
import StudentQuizzes from "@/views/StudentQuizzes.vue";

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
    path: "/teacher/quizzes",
    name: "quizzes",
    component: TeacherQuizzes
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
    path: "/quizzes",
    name: "quizzes",
    component: StudentQuizzes
  },
  {
    path: '/quizzes/truefalse',
    name: 'truefalse',
    component: TrueFalse
  },
  {
    path: "/persona",
    name: "persona",
    component: Persona
  },
  {
    path: "/pro",
    name: "pro",
    component: Pro
  },
  {
    path: "/teacher/quizcreation",
    name: "quizcreation",
    component: QuizCreation
  },
  {
    path: "/public",
    name: "public",
    component: PublicHome
  },
  {
    path: "/publicQuiz",
    name: "publicQuiz",
    component: PublicQuiz
  },
  {
    path: "/publicResult",
    name: "publicResult",
    component: PublicResult
  }
];

export default routes.map(route => {
  return { ...route, meta: { public: false } };
});
