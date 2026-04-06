import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import PortfolioDetailView from '../views/PortfolioDetailView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'
import BlogListView from '../views/BlogListView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import CertificatesView from '../views/CertificatesView.vue'
import ProfileDetailView from '../views/ProfileDetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/profile-detail', name: 'profile-detail', component: ProfileDetailView },
  { path: '/services', name: 'services', component: ServicesView },
  { path: '/portfolio', name: 'portfolio', component: PortfolioView },
  { path: '/portfolio/:id', name: 'portfolio-detail', component: PortfolioDetailView, props: true },
  { path: '/experience', name: 'experience', component: ExperienceView },
  { path: '/certificates', name: 'certificates', component: CertificatesView },
  { path: '/blog', name: 'blog', component: BlogListView },
  { path: '/blog/:id', name: 'blog-detail', component: BlogDetailView, props: true },
  { path: '/contact', name: 'contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
