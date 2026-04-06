<script setup>
import { cvData } from '../data/cv-data'
</script>

<template>
  <div class="pt-32 pb-24 min-h-screen bg-[#060e1a]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-32">
        <span class="inline-block text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Pedigree</span>
        <h1 class="text-5xl lg:text-8xl font-black text-white leading-[1.1] mb-8" style="font-family: 'Outfit', sans-serif">
          Experience & <br/>
          <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;" class="animate-gradient">
            Technical Skillset.
          </span>
        </h1>
        <p class="text-slate-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto">A roadmap of my professional growth and the tools I use to master the craft.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-24">
        <!-- Timeline -->
        <div class="space-y-12">
          <h2 class="text-3xl font-black text-white mb-16 flex items-center gap-4" style="font-family: 'Outfit', sans-serif">
            <div class="w-1.5 h-10 bg-blue-500 rounded-full"></div>
            Career Pathway
          </h2>

          <div class="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-white/5">
            <div
              v-for="(item, idx) in cvData.experience"
              :key="item.id"
              class="relative flex gap-10 group"
            >
              <!-- Timeline indicator -->
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-500 group-hover:scale-125 border-4 border-[#060e1a]"
                :style="idx === 0
                  ? 'background: linear-gradient(135deg,#3b82f6,#6366f1); box-shadow: 0 0 20px rgba(59,130,246,0.3)'
                  : 'background: #1e293b; border: 4px solid #060e1a'"
              >
                  <div v-if="idx !== 0" class="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></div>
                  <svg v-else class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
              </div>

              <!-- Card -->
              <div class="flex-1 p-10 lg:p-12 rounded-[3rem] border border-white/5 bg-slate-800/10 hover:border-blue-500/20 transition-all duration-700 hover:-translate-y-2 group shadow-xl">
                 <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <span class="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-400">
                      {{ item.period }}
                    </span>
                 </div>
                 <h3 class="text-2xl font-black text-white mb-2" style="font-family: 'Outfit', sans-serif">{{ item.title }}</h3>
                 <p class="text-blue-500 font-black text-xs uppercase tracking-widest mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{{ item.company }}</p>
                 <p class="text-slate-500 text-lg leading-relaxed font-medium">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="space-y-12">
          <h2 class="text-3xl font-black text-white mb-16 flex items-center gap-4" style="font-family: 'Outfit', sans-serif">
            <div class="w-1.5 h-10 bg-indigo-500 rounded-full"></div>
            Mastery & Tools
          </h2>

          <div class="grid gap-12">
            <div v-for="skill in cvData.skills" :key="skill.name" class="group">
              <div class="flex items-center justify-between mb-5">
                <span class="font-black text-white uppercase tracking-widest text-xs group-hover:text-blue-500 transition-colors">{{ skill.name }}</span>
                <span class="text-slate-600 font-black text-[10px]">{{ skill.progress }}%</span>
              </div>
              <div class="h-2 rounded-full bg-white/5 relative overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-[1.5s] ease-out relative"
                  :style="`width: ${skill.progress}%; background: linear-gradient(90deg, #3b82f6, #6366f1)`"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Soft Skills (More Premium Tags) -->
          <div class="mt-24 p-12 lg:p-16 rounded-[4rem] border border-white/5 bg-slate-800/10 backdrop-blur-3xl">
            <h3 class="text-xl font-black text-white mb-10 uppercase tracking-widest text-center">Core Competencies</h3>
            <div class="flex flex-wrap justify-center gap-4">
              <span
                v-for="tag in ['Visual Storytelling', 'Time Mastery', 'Team Synergy', 'Pattern Analysis', 'Strategic Editing']"
                :key="tag"
                class="px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/5 bg-white/5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all cursor-default text-slate-500"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-shimmer {
  animation: shimmer 3s infinite;
}
</style>
