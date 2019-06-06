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
import QuizResult from '@/views/QuizResult.vue';
import StudentQuizzes from "@/views/StudentQuizzes.vue";
import Resources from "@/views/Resources.vue";
import QAForum from "@/views/qa-forum.vue";
import Blog from "@/views/blog.vue";
import MultipleChoicePublic from "@/views/questions/MultipleChoicePublic.vue";

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
    path: "/quizzes/multiplechoicepublic",
    name: "multiplechoicepublic",
    component: MultipleChoicePublic
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
    path: '/quizzes/result',
    name: 'quizresult',
    component: QuizResult
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
  },
  {
    path: "/resources",
    name: "resources",
    component: Resources
  },
  {
    path: "/QAForum",
    name: "QAForum",
    component: QAForum
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog
  }
];

export default routes.map(route => {
  return { ...route, meta: { public: false } };
});
