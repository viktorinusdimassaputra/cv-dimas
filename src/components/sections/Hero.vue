<script setup>
import { onMounted, ref } from 'vue';
import { ArrowRight, Download, CheckCircle } from 'lucide-vue-next';
import gsap from 'gsap';
import { cvData } from '../../data/cv-data';

const heroRef = ref(null);
const titleRef = ref(null);
const descRef = ref(null);
const btnRef = ref(null);
const statsRef = ref(null);
const imageRef = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
  
  tl.from(titleRef.value, { y: 100, opacity: 0 })
    .from(descRef.value, { y: 50, opacity: 0 }, "-=0.8")
    .from(btnRef.value, { y: 30, opacity: 0 }, "-=0.6")
    .from(statsRef.value, { x: -30, opacity: 0 }, "-=0.6")
    .from(imageRef.value, { scale: 0.8, opacity: 0 }, "-=1");
});
</script>

<template>
  <section ref="heroRef" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f172a]">
    <!-- Background Blobs -->
    <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
    <div class="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] -z-10 animate-pulse" style="animation-delay: 2s;"></div>

    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20 backdrop-blur-sm">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Tersedia untuk Proyek Baru
        </div>
        
        <h1 ref="titleRef" class="text-6xl lg:text-8xl font-display font-extrabold text-white leading-tight mb-8">
          Halo, Saya <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dimas Saputra</span>
        </h1>
        
        <p ref="descRef" class="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
          {{ cvData.profile.about }}
        </p>
        
        <div ref="btnRef" class="flex flex-wrap items-center gap-6">
          <a href="#portfolio" class="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/80 hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-2 group active:scale-95">
            Lihat Karya Saya <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" class="px-8 py-4 rounded-full bg-white/5 text-white font-bold hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 backdrop-blur-sm active:scale-95">
            <Download class="w-5 h-5" /> Unduh CV
          </a>
        </div>
        
        <div ref="statsRef" class="mt-16 flex items-center gap-12 pt-10 border-t border-white/5">
          <div v-for="stat in cvData.profile.stats" :key="stat.label">
            <h4 class="text-4xl font-display font-bold text-white">{{ stat.value }}</h4>
            <p class="text-sm text-slate-500 font-medium uppercase tracking-widest mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
      
      <div class="relative lg:ml-auto" ref="imageRef">
        <div class="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[3rem] transform rotate-3 scale-105 z-0 blur-2xl opacity-50"></div>
        <div class="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
          <img src="/Dimas alat.jpg" alt="Dimas Saputra" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
          
          <div class="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
            <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary border border-primary/20 shadow-lg">
              <CheckCircle class="w-6 h-6" />
            </div>
            <div>
              <p class="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Spesialisasi</p>
              <p class="text-lg font-bold text-white">Konten Kreatif</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
