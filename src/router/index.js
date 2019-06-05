import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes/index.js'
// import store from '@/store/index.js'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/start'
        }
    ].concat(routes)
})

// router.beforeEach((to, from, next) => {
//     const authenticated = store.state.user.authenticated
//     const onlyLoggedOut = to.matched.some(record => record.meta.onlyLoggedOut)
//     const isPublic = to.matched.some(record => record.meta.public)
//     if (!isPublic && !authenticated) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         return next({
//             path: '/login',
//             query: { redirect: to.fullPath }
//         })
//     }
//     if (authenticated && onlyLoggedOut) {
//         return next('/')
//     }
//     next()
// })

export default router