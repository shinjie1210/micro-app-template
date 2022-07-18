import {
    createRouter,
    createWebHistory
} from 'vue-router'
import son from '../views/son.vue'

const routes = [{
    path: '/',
    redirect: '/foo'
}, {
    path: '/foo',
    component: () => import('../views/foo.vue')
}, {
    path: '/bar',
    component: () => import('../views/bar.vue')
}, {
    // 👇 非严格匹配，/son/* 都指向 son 页面
    path: '/son/:page*', // vue-router@4.x path的写法为：'/son/:page*'
    name: 'son',
    component: son,
}]
const router = createRouter({
    // 设置主应用基础路由为base(用于后续部署)，则子应用基础路由(baseroute)为/base/xxx
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})
export default router