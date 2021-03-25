import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Tutorials from '../views/Tutorials.vue'
import Edit from '../views/Edit.vue'


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: Tutorials,
      children: [
        
      ]
    },
    {
      path:'/edit-tutorial',
      name: 'Edit',
      component: Edit
    }
  ]
})



export default router
