import Vue from 'vue'
import VueRouter from 'vue-router'
import EmailSignupLogin from '@/components/EmailSignupLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: EmailSignupLogin
  }
]

export default new VueRouter({ routes })