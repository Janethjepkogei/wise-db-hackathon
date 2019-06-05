import Categories from '@/views/Categories.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/views/Home.vue'
import MultipleChoice from '@/views/questions/MultipleChoice.vue'

const routes = [
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/quizzes/multiplechoice',
      name: 'multiplechoice',
      component: MultipleChoice
    }
]

export default routes.map(route => {
  return { ...route, meta: { public: false } }
})