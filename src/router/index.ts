import {createRouter, createWebHistory} from 'vue-router'
import MainView from "@/views/MainView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import CaliforniaResidentsView from "@/views/CaliforniaResidentsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/#section-fleet',
      name: 'fleet',
      component: MainView
    },
    {
      path: '/#section-career',
      name: 'career',
      component: MainView
    },
    {
      path: '/#section-contacts',
      name: 'contacts',
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
