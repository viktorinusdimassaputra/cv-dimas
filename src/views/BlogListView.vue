<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { cvData } from '../data/cv-data'
import gsap from 'gsap'

const visible = ref(false)
const blogPosts = cvData.blog

onMounted(() => {
  visible.value = true
  gsap.from('.blog-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="pt-32 pb-24 min-h-screen bg-[#060e1a]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-32">
        <span class="inline-block text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Journal</span>
        <h1 class="text-5xl lg:text-8xl font-black text-white leading-[1.1] mb-8" style="font-family: 'Outfit', sans-serif">
          Stories & <br/>
          <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;" class="animate-gradient">
            Insights.
          </span>
        </h1>
        <p class="text-slate-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto">Exploring the craft of visual storytelling and digital strategy.</p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <RouterLink
          v-for="post in blogPosts"
          :key="post.id"
          :to="`/blog/${post.id}`"
          class="blog-card group flex flex-col h-full bg-slate-800/10 border border-white/5 rounded-[3rem] overflow-hidden hover:border-blue-500/20 transition-all duration-700 hover:-translate-y-4 shadow-2xl"
        >
          <!-- Image -->
          <div class="relative h-72 overflow-hidden bg-slate-900">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
            <div class="absolute top-6 left-6">
              <span class="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500 text-white shadow-xl shadow-blue-500/20">
                {{ post.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-10 flex flex-col flex-1">
            <div class="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em] mb-6">{{ post.date }}</div>
            <h2 class="text-2xl font-black text-white mb-6 group-hover:text-blue-500 transition-colors line-clamp-2 leading-tight" style="font-family: 'Outfit', sans-serif">
              {{ post.title }}
            </h2>
            <p class="text-slate-500 text-lg leading-relaxed mb-10 font-medium line-clamp-3">
              {{ post.excerpt }}
            </p>
            
            <div class="mt-auto flex items-center gap-4 text-blue-500 font-black text-[10px] uppercase tracking-[0.3em]">
              Read Article
              <span class="w-8 h-px bg-blue-500/20 group-hover:w-16 transition-all duration-500"></span>
              <svg class="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
