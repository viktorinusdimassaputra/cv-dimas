<script setup>
import { ref } from 'vue';
import { ExternalLink, Play, ArrowUpRight } from 'lucide-vue-next';
import { cvData } from '../../data/cv-data';

const activeCategory = ref('Semua');
const categories = ['Semua', 'Video Editing', 'Konten Kreatif'];

const filteredPortfolio = ref(cvData.portfolio);

const filterProjects = (cat) => {
  activeCategory.value = cat;
  if (cat === 'Semua') {
    filteredPortfolio.value = cvData.portfolio;
  } else {
    filteredPortfolio.value = cvData.portfolio.filter(p => {
      if (cat === 'Video Editing') return p.category === 'Video Editing';
      if (cat === 'Konten Kreatif') return p.category === 'Konten Kreatif';
      return true;
    });
  }
};
</script>

<template>
  <section id="portfolio" class="py-32 bg-background">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
        <div class="max-w-xl">
          <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Karya & Proyek</span>
          <h2 class="text-5xl lg:text-7xl font-display font-extrabold text-white mb-8">Pilihan <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portofolio.</span></h2>
          <p class="text-slate-400 text-xl font-light">Eksplorasi visual dan strategi konten yang telah saya kerjakan.</p>
        </div>
        
        <div class="flex gap-4 p-2 bg-surface rounded-3xl border border-white/5 w-fit">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="filterProjects(cat)"
            :class="[
              'px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-300',
              activeCategory === cat ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' : 'text-slate-400 hover:text-white'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div 
          v-for="project in filteredPortfolio" 
          :key="project.id"
          class="group relative rounded-[2.5rem] overflow-hidden bg-surface border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-4 shadow-2xl"
        >
          <div class="relative h-80 overflow-hidden">
            <img 
              :src="project.image" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
              :alt="project.title" 
            />
            <div class="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a href="#" class="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                <Play v-if="project.category === 'Video Editing'" class="w-8 h-8 fill-primary" />
                <ArrowUpRight v-else class="w-8 h-8" />
              </a>
            </div>
            <div class="absolute top-6 left-6 flex gap-2">
              <span class="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                {{ project.category }}
              </span>
            </div>
          </div>
          <div class="p-10">
            <h3 class="text-3xl font-display font-extrabold text-white mb-4 group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-slate-400 text-lg leading-relaxed line-clamp-2">{{ project.description }}</p>
            
            <div class="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <span class="text-sm font-bold text-slate-500 uppercase tracking-widest">Detail Proyek</span>
              <button class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all group-hover:border-primary">
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-24">
        <a href="#" class="inline-flex items-center gap-4 px-10 py-5 rounded-full border border-white/10 text-white font-extrabold text-lg hover:bg-white/5 hover:border-primary transition-all group shadow-xl">
          Lihat Lebih Banyak di Instagram <ArrowUpRight class="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
</template>
