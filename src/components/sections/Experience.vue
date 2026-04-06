<script setup>
import { GraduationCap, Briefcase, ChevronRight } from 'lucide-vue-next';
import { cvData } from '../../data/cv-data';
</script>

<template>
  <section id="resume" class="py-32 bg-surface relative overflow-hidden">
    <!-- Decor -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
      <!-- Experience & Education -->
      <div>
        <div class="mb-16">
          <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Perjalanan Saya</span>
          <h2 class="text-5xl lg:text-7xl font-display font-extrabold text-white mb-8 leading-tight">Pengalaman & <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pendidikan.</span></h2>
        </div>
        
        <div class="space-y-12 relative before:absolute before:left-8 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5 before:hidden md:before:block">
          <div 
            v-for="(item, index) in cvData.experience" 
            :key="item.id"
            class="relative flex flex-col md:flex-row md:items-start gap-10 group"
          >
            <!-- Timeline Dot -->
            <div class="hidden md:flex w-16 h-16 bg-background border-4 border-surface text-primary rounded-2xl items-center justify-center relative z-10 shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-xl group-hover:shadow-primary/20">
              <GraduationCap v-if="index === 0" class="w-8 h-8" />
              <Briefcase v-else class="w-8 h-8" />
            </div>

            <div class="flex-1 p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300 group-hover:bg-white/[0.08] backdrop-blur-sm shadow-xl hover:-translate-y-2">
              <span class="text-primary font-bold text-sm bg-primary/10 px-4 py-1.5 rounded-full mb-6 block w-fit">{{ item.period }}</span>
              <h3 class="text-3xl font-display font-extrabold text-white mb-2 leading-none">{{ item.title }}</h3>
              <p class="text-slate-300 font-bold mb-4 text-lg italic opacity-80">{{ item.company }}</p>
              <p class="text-slate-400 text-lg leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="lg:pt-20">
        <div class="mb-16">
          <span class="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Keahlian Teknis</span>
          <h2 class="text-5xl lg:text-7xl font-display font-extrabold text-white mb-8 leading-tight">Mastering the <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-indigo-500">Tools.</span></h2>
        </div>
        
        <div class="space-y-10">
          <div v-for="skill in cvData.skills" :key="skill.name" class="group">
            <div class="flex justify-between items-end mb-4">
              <span class="text-xl font-display font-extrabold text-white group-hover:text-primary transition-colors flex items-center gap-3">
                <ChevronRight class="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" /> {{ skill.name }}
              </span>
              <span class="text-primary font-bold text-lg">{{ skill.progress }}%</span>
            </div>
            <div class="w-full bg-white/5 rounded-full h-4 p-1 overflow-hidden border border-white/5 shadow-inner">
              <div 
                class="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 shadow-lg shadow-primary/20"
                :style="{ width: `${skill.progress}%` }"
              ></div>
            </div>
          </div>

          <div class="mt-16 flex flex-wrap gap-4">
            <span v-for="tag in ['Kreativitas Visual', 'Manajemen Waktu', 'Kerja Sama Tim', 'Problem Solving', 'Analisis Algoritma Sosmed']" :key="tag" class="px-6 py-3 bg-white/5 text-slate-300 rounded-2xl border border-white/5 text-sm font-bold uppercase tracking-widest hover:border-primary/30 hover:bg-white/10 transition-all cursor-default">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
