<script setup>
import { onMounted, ref } from 'vue'
import { cvData } from '../data/cv-data'

const visible = ref(false)
onMounted(() => { setTimeout(() => { visible.value = true }, 100) })
</script>

<template>
  <div class="pt-32 pb-24 min-h-screen bg-[#060e1a]">
    <!-- Hero Row -->
    <div class="max-w-7xl mx-auto px-6 mb-24">
      <div class="text-center mb-24">
        <span class="inline-block text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Discovery</span>
        <h1 class="text-5xl lg:text-8xl font-black text-white leading-[1.1] mb-8" style="font-family: 'Outfit', sans-serif">
          Behind the <br/>
          <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;" class="animate-gradient">
            Creative Mind.
          </span>
        </h1>
        <p class="text-slate-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto">Exploring the intersection of logic, code, and visual storytelling.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-24 items-center">
        <!-- Image Container -->
        <div class="relative group order-2 lg:order-1">
          <div class="absolute inset-0 rounded-[3rem] rotate-3 scale-105 opacity-10 pointer-events-none"
               style="background: linear-gradient(135deg, #3b82f6, #6366f1); filter: blur(50px)"></div>
          <div class="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl shadow-black/80">
            <img
              src="https://images.unsplash.com/photo-1512758684051-ce17a9ba270c?auto=format&fit=crop&w=1200&q=80"
              alt="Workspace"
              class="w-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
              style="height: 600px; object-position: center;"
            />
          </div>
          
          <!-- Experience Badge -->
          <div class="absolute -bottom-8 -right-8 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl border border-white/10 group-hover:-translate-y-2 transition-transform duration-500"
               style="background: rgba(30,41,59,0.3)">
            <div class="text-5xl font-black text-blue-500 mb-2" style="font-family: 'Outfit', sans-serif">3+</div>
            <p class="text-white font-black text-[10px] uppercase tracking-widest">Years Experience</p>
          </div>
        </div>

        <!-- Bio Content -->
        <div class="order-1 lg:order-2 space-y-10">
          <div class="space-y-6">
            <h2 class="text-3xl font-black text-white" style="font-family: 'Outfit', sans-serif">Hi, I'm Viktorinus Dimas.</h2>
            <p class="text-slate-500 text-xl leading-relaxed font-medium">
               A student of <strong class="text-slate-300">Information Systems</strong> at Universitas Merdeka Malang with a deep-seated passion for <strong class="text-blue-500">Video Editing</strong> and <strong class="text-indigo-500">Content Strategy</strong>.
            </p>
            <p class="text-slate-500 text-lg leading-relaxed">
               My journey began with a simple curiosity about how technology can amplify creative expression. Today, I bridge the gap between technical logic and visual aesthetics, ensuring every frame serves a strategic purpose.
            </p>
          </div>

          <!-- Feature Cards (More Premium) -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="group p-8 rounded-[2rem] border border-white/5 bg-slate-800/10 hover:border-blue-500/20 transition-all duration-500">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10 text-blue-500 border border-blue-500/10">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.069A1 1 0 0121 8.876V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1v-1.876a1 1 0 00-.447-.832L15 14M15 10l-3 2-3-2M15 10V6"/>
                </svg>
              </div>
              <h3 class="font-black text-white text-lg mb-2">Video Editing</h3>
              <p class="text-slate-600 text-sm font-medium">Mastering the art of pacing and color with industry-standard tools.</p>
            </div>

            <div class="group p-8 rounded-[2rem] border border-white/5 bg-slate-800/10 hover:border-indigo-500/20 transition-all duration-500">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-500/10 text-indigo-500 border border-indigo-500/10">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
              </div>
              <h3 class="font-black text-white text-lg mb-2">Strategic Content</h3>
              <p class="text-slate-600 text-sm font-medium">Designing data-driven content pillars that resonate with modern audiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid sm:grid-cols-4 gap-8">
        <div v-for="stat in cvData.profile.stats" :key="stat.label"
             class="p-12 rounded-[2.5rem] border border-white/5 bg-slate-800/5 backdrop-blur-xl text-center group hover:border-blue-500/20 transition-all duration-500">
          <div class="text-5xl font-black text-white mb-3 group-hover:text-blue-500 transition-colors" style="font-family: 'Outfit', sans-serif">{{ stat.value }}</div>
          <div class="text-slate-600 text-[10px] font-black uppercase tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
</template>
