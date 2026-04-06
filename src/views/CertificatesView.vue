<script setup>
import { onMounted, ref } from 'vue'
import { cvData } from '../data/cv-data'
import gsap from 'gsap'

const certs = cvData.certificates

onMounted(() => {
  gsap.from('.cert-card', {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  })
})
</script>

<template>
  <div class="pt-32 pb-24 min-h-screen bg-[#060e1a]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-32">
        <span class="inline-block text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Achievements</span>
        <h1 class="text-5xl lg:text-8xl font-black text-white leading-[1.1] mb-8" style="font-family: 'Outfit', sans-serif">
          Verified <br/>
          <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;" class="animate-gradient">
            Excellence.
          </span>
        </h1>
        <p class="text-slate-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto">Global certifications validating expertise in digital creative and system engineering.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div
          v-for="cert in certs"
          :key="cert.id"
          class="cert-card group relative p-10 rounded-[3rem] border border-white/5 bg-slate-800/10 hover:border-blue-500/20 transition-all duration-700 hover:-translate-y-4 shadow-2xl flex flex-col items-center text-center overflow-hidden"
        >
          <!-- Shimmer Decor -->
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>

          <!-- Document Preview (Premium Grayscale-to-Color) -->
          <div class="w-full aspect-[4/3] rounded-[2rem] mb-10 overflow-hidden border border-white/5 bg-slate-900 group-hover:border-blue-500/30 transition-all duration-700 shadow-xl">
             <img :src="cert.image" :alt="cert.title" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
          </div>

          <div class="flex-1 space-y-3">
             <h3 class="text-2xl font-black text-white leading-tight" style="font-family: 'Outfit', sans-serif">{{ cert.title }}</h3>
             <p class="text-blue-500 font-black text-xs uppercase tracking-[0.2em]">{{ cert.issuer }}</p>
             <p class="text-slate-600 text-[10px] font-black uppercase tracking-widest">{{ cert.date }}</p>
          </div>

          <button class="mt-12 w-full py-4 rounded-2xl border border-white/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-500">
            View Credentials
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-gradient {
  background-size: 200% 200%;
  animation: shine-gradient 5s ease infinite;
}
@keyframes shine-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
