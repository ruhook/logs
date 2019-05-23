import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Layout from '../components/layout/Layout'
import Home from '@/views/home/index'

export const constantRouterMap = [{
  path: '/',
  component: Layout,
  redirect: '/logs',
  name: '对比测试',
  meta: { title: '对比测试' },
  children: [{
    path: 'logs',
    meta: { title: '对比测试', icon: 'example' },
    component: Home
  }, {
    hidden: true,
    path: 'logs/:id',
    meta: { title: '日志详情', icon: 'example' },
    component: () => import('@/views/home/detail.vue'),
  }]
}]

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = []