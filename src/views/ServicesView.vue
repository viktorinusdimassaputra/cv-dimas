<script setup>
import { cvData } from '../data/cv-data'

const iconSvgs = {
  Film: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>`,
  Lightbulb: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>`,
  Laptop: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`,
}

const cardColors = ['#3b82f6', '#6366f1', '#14b8a6']
</script>

<template>
  <div class="pt-32 pb-24 min-h-screen bg-[#060e1a]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-32">
        <span class="inline-block text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Expertise</span>
        <h1 class="text-5xl lg:text-8xl font-black text-white leading-[1.1] mb-8" style="font-family: 'Outfit', sans-serif">
          Solutions & <br/>
          <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;" class="animate-gradient">
            Creative Services.
          </span>
        </h1>
        <p class="text-slate-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto">Tailored creative experiences designed to elevate your brand's digital presence.</p>
      </div>

      <!-- Services Grid -->
      <div class="grid lg:grid-cols-3 gap-10">
        <div
          v-for="(service, i) in cvData.services"
          :key="service.id"
          class="group relative p-12 lg:p-16 rounded-[4rem] border border-white/5 bg-slate-800/10 hover:border-blue-500/20 transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden"
        >
          <!-- Decoration Glow -->
          <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-1000"
               :style="`background: ${cardColors[i]}`"></div>

          <!-- Icon (Premium Minimalist) -->
          <div class="w-20 h-20 rounded-[1.5rem] bg-slate-900/50 flex items-center justify-center text-white mb-12 border border-white/5 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500 shadow-xl">
             <svg class="w-10 h-10 text-blue-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="iconSvgs[service.icon]"></svg>
          </div>

          <h3 class="text-3xl font-black text-white mb-8" style="font-family: 'Outfit', sans-serif">
            {{ service.title }}
          </h3>
          
          <p class="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
            {{ service.description }}
          </p>

          <div class="space-y-4 mb-14">
            <div v-for="feature in service.features" :key="feature" class="flex items-center gap-4 text-slate-400 text-sm font-black uppercase tracking-widest">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
              {{ feature }}
            </div>
          </div>

          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-4 text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] group/btn"
          >
            Start a Project
            <span class="w-8 h-px bg-blue-500/20 group-hover/btn:w-16 transition-all duration-500"></span>
            <svg class="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
        </div>
      </div>

      <!-- Process Section (Premium Dark) -->
      <div class="mt-48 p-16 lg:p-32 rounded-[5rem] border border-white/5 bg-slate-800/10 backdrop-blur-3xl text-center relative overflow-hidden">
         <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none"></div>
         
         <div class="relative z-10">
            <span class="inline-block text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Workflow</span>
            <h2 class="text-4xl lg:text-7xl font-black text-white mb-20" style="font-family: 'Outfit', sans-serif">The Creative Journey</h2>
            
            <div class="grid md:grid-cols-4 gap-12 text-left">
               <div v-for="(step, idx) in ['Research', 'Concept', 'Creation', 'Polish']" :key="step" class="space-y-6 group">
                  <div class="text-slate-800 font-black text-7xl mb-4 group-hover:text-blue-500/10 transition-colors pointer-events-none absolute -top-10 opacity-20">0{{ idx + 1 }}</div>
                  <h4 class="text-white font-black text-xl uppercase tracking-[0.2em] relative z-10">{{ step }}</h4>
                  <p class="text-slate-500 text-sm font-medium leading-relaxed relative z-10">Deep dive into goals and target audience analysis.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>
