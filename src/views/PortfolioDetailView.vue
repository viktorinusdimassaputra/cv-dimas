<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { cvData } from '../data/cv-data'
import gsap from 'gsap'

const route = useRoute()
const router = useRouter()
const projectId = ref(parseInt(route.params.id))
const project = computed(() => cvData.portfolio.find(p => p.id === projectId.value))

onMounted(() => {
  if (!project.value) {
    router.push('/portfolio')
    return
  }
  gsap.from('.project-header', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from('.project-image', { scale: 1.1, opacity: 0, duration: 1.5, ease: 'power3.out' })
  gsap.from('.project-sidebar', { x: 50, opacity: 0, shadow: 0, duration: 1, delay: 0.5, ease: 'power3.out' })
})
</script>

<template>
  <div v-if="project" class="pt-24 pb-20 min-h-screen bg-[#060e1a]">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Back & Navigation -->
      <div class="flex items-center justify-between mb-16">
        <RouterLink to="/portfolio" class="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-all font-bold text-sm group">
          <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          Kembali ke Galeri
        </RouterLink>
      </div>

      <div class="grid lg:grid-cols-3 gap-16">
        <!-- Main Content (Left) -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Header -->
          <div class="project-header">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] text-blue-400 border border-blue-500/10 mb-6 bg-blue-500/5">
              {{ project.category }}
            </span>
            <h1 class="text-5xl lg:text-7xl font-black text-white leading-tight mb-8" style="font-family: 'Outfit', sans-serif">
               {{ project.title }}
            </h1>
          </div>

          <!-- Feature Image -->
          <div class="project-image relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl aspect-video">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <!-- Description Section -->
          <div class="space-y-8">
            <h2 class="text-3xl font-bold text-white" style="font-family: 'Outfit', sans-serif">Tujuan & Tantangan</h2>
            <p class="text-slate-400 text-xl leading-relaxed font-medium">
               {{ project.description }}
            </p>
            <p class="text-slate-500 leading-relaxed">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <!-- Gallery Grid -->
          <div class="grid grid-cols-2 gap-6 mt-16">
             <div class="aspect-square rounded-3xl overflow-hidden border border-white/5 bg-slate-800/40">
                <img :src="`https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80`" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
             <div class="aspect-square rounded-3xl overflow-hidden border border-white/5 bg-slate-800/40">
                <img :src="`https://images.unsplash.com/photo-1533750349088-cd87bb096362?auto=format&fit=crop&w=400&q=80`" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
          </div>
        </div>

        <!-- Sidebar Info (Right) -->
        <div class="project-sidebar lg:sticky lg:top-32 h-fit">
          <div class="p-10 rounded-[2.5rem] border border-white/10 bg-slate-800/20 backdrop-blur-xl space-y-10">
            <div>
              <h4 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Klien</h4>
              <p class="text-white font-bold text-lg">Proyek Independen / Brand Lokal</p>
            </div>
            
            <div>
              <h4 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Tahun</h4>
              <p class="text-white font-bold text-lg">2023 - 2024</p>
            </div>

            <div>
              <h4 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Teknologi</h4>
              <div class="flex flex-wrap gap-2">
                 <span v-for="tech in ['Adobe Premiere', 'After Effects', 'CapCut', 'DaVinci Resolve']" :key="tech" class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-bold text-slate-400">
                   {{ tech }}
                 </span>
              </div>
            </div>

            <div class="pt-6 border-t border-white/5">
              <a href="#" class="w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-black text-white transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-blue-500/10"
                 style="background: linear-gradient(135deg, #3b82f6, #6366f1)">
                 Lihat Live Project
                 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
