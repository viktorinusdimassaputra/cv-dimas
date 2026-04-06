<script setup>
import { Film, Lightbulb, Laptop, Check } from 'lucide-vue-next';
import { cvData } from '../../data/cv-data';

const icons = {
  Film,
  Lightbulb,
  Laptop
};
</script>

<template>
  <section id="services" class="py-32 bg-background relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-24">
        <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Layanan Profesional</span>
        <h2 class="text-5xl lg:text-7xl font-display font-extrabold text-white mb-8">Apa yang Bisa <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Saya Lakukan?</span></h2>
        <p class="text-slate-400 text-xl font-light leading-relaxed">Memberikan solusi kreatif digital menyeluruh untuk kebutuhan personal maupun bisnis Anda.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <div 
          v-for="service in cvData.services" 
          :key="service.id"
          class="group bg-surface p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/5 flex flex-col items-center text-center relative overflow-hidden"
        >
          <!-- Hover Glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="w-24 h-24 bg-white/5 text-primary rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-12 shadow-inner border border-white/5 group-hover:border-primary/20 relative z-10">
            <component :is="icons[service.icon]" class="w-12 h-12" />
          </div>
          
          <h3 class="text-3xl font-display font-extrabold text-white mb-6 relative z-10">{{ service.title }}</h3>
          <p class="text-slate-400 mb-10 leading-relaxed text-lg relative z-10">{{ service.description }}</p>
          
          <ul class="text-left w-full space-y-4 relative z-10">
            <li v-for="feature in service.features" :key="feature" class="flex items-center gap-3 text-slate-300 font-medium">
              <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check class="w-4 h-4 text-primary" />
              </div>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
