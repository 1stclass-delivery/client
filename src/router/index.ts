import {createRouter, createWebHashHistory} from 'vue-router'
import MainView from "@/views/MainView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import CaliforniaResidentsView from "@/views/CaliforniaResidentsView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicyView
    },
    {
      path: '/ccpa',
      name: 'ccpa',
      component: CaliforniaResidentsView
    },
  ]
})

export default router
