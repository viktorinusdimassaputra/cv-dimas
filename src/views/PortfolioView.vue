<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { cvData } from '../data/cv-data'
import gsap from 'gsap'

const activeFilter = ref('Semua')
const categories = ['Semua', 'Video Editing', 'Konten Kreatif']

const filtered = ref(cvData.portfolio)

const setFilter = (cat) => {
  activeFilter.value = cat
  if (cat === 'Semua') {
    filtered.value = cvData.portfolio
  } else {
    filtered.value = cvData.portfolio.filter(p => p.category === cat)
  }
}

onMounted(() => {
  gsap.from('.portfolio-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="pt-24 pb-20 min-h-screen bg-[#060e1a]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div class="max-w-xl">
          <span class="inline-block text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">Eksplorasi Proyek</span>
          <h1 class="text-5xl lg:text-7xl font-black text-white leading-tight mb-4" style="font-family: 'Outfit', sans-serif">
            Karya &
            <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
              Inspirasi.
            </span>
          </h1>
          <p class="text-slate-500 text-lg font-medium">Kumpulan karya visual dan strategi konten pilihan yang telah saya selesaikan.</p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="setFilter(cat)"
            class="px-5 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
            :style="activeFilter === cat
              ? 'background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; box-shadow: 0 4px 12px rgba(59,130,246,0.2)'
              : 'color: #64748b'"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="project in filtered"
          :key="project.id"
          :to="`/portfolio/${project.id}`"
          class="portfolio-card group rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-800/20 hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-4 shadow-2xl shadow-black/50"
        >
          <!-- Thumbnail -->
          <div class="relative overflow-hidden" style="height: 320px">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
              style="filter: grayscale(20%) brightness(0.8)"
            />
            <!-- Hover overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style="background: rgba(6,14,26,0.6); backdrop-filter: blur(4px)">
              <div class="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                   style="background: linear-gradient(135deg, #3b82f6, #6366f1)">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-6 left-6">
              <span class="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md"
                    style="background: rgba(6, 14, 26, 0.4); border: 1px solid rgba(255, 255, 255, 0.1)">
                {{ project.category }}
              </span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-10">
            <h2 class="text-3xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors" style="font-family: 'Outfit', sans-serif">
               {{ project.title }}
            </h2>
            <p class="text-slate-500 leading-relaxed font-medium">
               {{ project.description }}
            </p>

            <div class="mt-8 pt-8 flex items-center justify-between border-t border-white/5">
              <span class="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">Explore Case Study</span>
              <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7m7-7H3"/>
                </svg>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
