import Login from '@/views/Login.vue'
import Start from '@/views/Start.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/start',
    name: 'start',
    component: Start
  }
]

export default routes.map(route => {
  const meta = {
    public: true,
    onlyLoggedOut: true
  }
  return { ...route, meta }
})
