import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
    {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld
  }
]

export default routes.map(route => {
  return { ...route, meta: { public: false } }
})