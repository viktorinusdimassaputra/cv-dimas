<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { cvData } from '../data/cv-data'
import Testimonials from '../components/sections/Testimonials.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const visible = ref(false)

onMounted(() => {
  visible.value = true
  
  // Hero Animations
  gsap.from('.hero-badge', { y: -20, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' })
  gsap.from('.hero-title', { y: 30, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' })
  gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 1, delay: 0.6, ease: 'power3.out' })
  gsap.from('.hero-btns', { y: 20, opacity: 0, duration: 1, delay: 0.8, ease: 'power3.out' })
  gsap.from('.hero-stats', { y: 20, opacity: 0, duration: 1, delay: 1, ease: 'power3.out' })
  
  // Section Animations
  gsap.utils.toArray('.reveal').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  })
})
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center pt-40 pb-24 overflow-hidden bg-[#060e1a]">
      <!-- Animated Background Clouds (Subtler) -->
      <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full opacity-10 blur-[150px] pointer-events-none"
           style="background: radial-gradient(circle, #3b82f6, transparent)"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-10 blur-[130px] pointer-events-none"
           style="background: radial-gradient(circle, #6366f1, transparent); animation-delay: 2s"></div>

      <div class="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-24 items-center">
        <!-- Text Content -->
        <div class="relative z-10 text-center lg:text-left">
          <!-- Badge -->
          <div class="hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-10 border border-white/5 bg-white/5 text-blue-400 backdrop-blur-xl mx-auto lg:mx-0">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Collaboration
          </div>

          <!-- Heading -->
          <h1 class="hero-title text-5xl lg:text-8xl font-black text-white leading-[1.05] mb-10" style="font-family: 'Outfit', sans-serif">
            Hi, I'm <br/>
            <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;" class="animate-gradient">
              Dimas Saputra
            </span>
          </h1>

          <!-- Description -->
          <p class="hero-desc text-lg lg:text-xl text-slate-500 leading-relaxed mb-14 max-w-xl font-medium mx-auto lg:mx-0">
            {{ cvData.profile.about }} Transforming complex ideas into <span class="text-slate-300">minimalist cinematic experiences</span>.
          </p>

          <!-- Buttons -->
          <div class="hero-btns flex flex-wrap justify-center lg:justify-start gap-6">
            <RouterLink
              to="/portfolio"
              class="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] active:scale-95 group shadow-xl shadow-blue-500/10"
              style="background: linear-gradient(135deg, #3b82f6, #6366f1)"
            >
              Explore Portfolio
              <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </RouterLink>
            <RouterLink
              to="/profile-detail"
              class="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 active:scale-95 bg-white/5 backdrop-blur-xl"
            >
              More About Me
            </RouterLink>
          </div>

          <!-- Stats (More Subtle) -->
          <div class="hero-stats mt-20 pt-14 border-t border-white/5 flex flex-wrap justify-center lg:justify-start items-center gap-16">
            <div v-for="stat in cvData.profile.stats" :key="stat.label" class="group text-center lg:text-left">
              <div class="text-4xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors" style="font-family: 'Outfit', sans-serif">{{ stat.value }}</div>
              <div class="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Visual Content (Less rotate, cleaner) -->
        <div class="relative hidden lg:block">
          <div class="absolute inset-0 rounded-[4rem] rotate-3 scale-105 opacity-10 pointer-events-none transition-transform duration-1000"
               style="background: linear-gradient(135deg, #3b82f6, #6366f1); filter: blur(50px)"></div>
          <div class="relative rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl shadow-black/80 transform hover:rotate-0 transition-all duration-1000">
            <img src="/Dimas alat.jpg" alt="Dimas Saputra" class="w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-1000 grayscale-[20%] hover:grayscale-0" />
            
            <!-- Float UI elements (Subtler) -->
            <div class="absolute top-12 right-12 p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-3xl border border-white/10 shadow-2xl animate-float">
               <div class="flex items-center gap-5">
                  <div class="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>
                  </div>
                  <div>
                    <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Current Status</p>
                    <p class="text-white font-black text-lg">In Production</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Quick View (Darker Cards) -->
    <section class="reveal py-40 bg-[#060e1a]/80">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-3 gap-10">
           <div v-for="service in cvData.services" :key="service.id" 
                class="group p-12 rounded-[3.5rem] bg-slate-800/10 border border-white/5 hover:border-blue-500/20 transition-all duration-700 hover:-translate-y-4 shadow-xl">
              <h3 class="text-3xl font-black text-white mb-6" style="font-family: 'Outfit', sans-serif">{{ service.title }}</h3>
              <p class="text-slate-500 text-lg leading-relaxed mb-10 font-medium line-clamp-3">{{ service.description }}</p>
              <RouterLink :to="'/services'" class="text-blue-500 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 overflow-hidden">
                <span class="group-hover:translate-x-0 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all">Explore</span>
                <span class="w-10 h-px bg-blue-500/30 group-hover:w-14 transition-all"></span>
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </RouterLink>
           </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <Testimonials class="reveal" />

    <!-- CTA Section (Full Modern Dark) -->
    <section class="reveal py-40 bg-[#060e1a]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="relative p-16 lg:p-32 rounded-[5rem] overflow-hidden text-center border border-white/5 bg-slate-800/10 backdrop-blur-3xl shadow-2xl">
           <!-- Subtle Overlay -->
           <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none"></div>
           
           <div class="relative z-10">
              <h2 class="text-5xl lg:text-8xl font-black text-white mb-12" style="font-family: 'Outfit', sans-serif">Let's Craft Some <br/> <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Visual Magic.</span></h2>
              <p class="text-slate-500 text-xl lg:text-2xl mb-16 max-w-2xl mx-auto font-medium">Ready to take your digital presence to the next level? No more templates, just art.</p>
              <RouterLink
                to="/contact"
                class="inline-flex items-center gap-4 px-14 py-6 rounded-[2.5rem] font-black text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.35)] active:scale-95 shadow-xl shadow-blue-500/10"
                style="background: linear-gradient(135deg, #3b82f6, #6366f1)"
              >
                Inquire Project
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </RouterLink>
           </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShine 8s linear infinite;
}
@keyframes gradientShine {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
