<script setup>
import { MapPin, Video, Share2 } from 'lucide-vue-next';
import { cvData } from '../../data/cv-data';
</script>

<template>
  <section id="about" class="py-32 bg-surface relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
    
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
      <div class="lg:col-span-12 mb-12">
        <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Tentang Saya</span>
        <h2 class="text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight">Mengubah Ide Menjadi <span class="italic text-slate-400">Visual</span> yang <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Bercerita.</span></h2>
      </div>

      <div class="lg:col-span-5 relative group">
        <div class="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500 blur-xl opacity-30"></div>
        <img 
          src="https://images.unsplash.com/photo-1512758684051-ce17a9ba270c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Workspace" 
          class="relative z-10 rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
        />
        <div class="absolute -bottom-8 -right-8 bg-white text-background p-10 rounded-3xl shadow-2xl z-20 transform hover:-translate-y-2 transition-transform duration-300">
          <MapPin class="w-10 h-10 text-primary mb-4" />
          <h4 class="font-display font-extrabold text-2xl mb-1 text-slate-900 leading-none">Berbasis di</h4>
          <p class="text-slate-600 font-medium">Malang, Jawa Timur</p>
        </div>
      </div>

      <div class="lg:col-span-7">
        <p class="text-slate-400 mb-8 text-2xl leading-relaxed font-light">
          Nama saya <strong class="text-white font-bold">Viktorinus Dimas Saputra</strong>. Saat ini saya menempuh pendidikan S1 Sistem Informasi di <strong class="text-white font-bold">Universitas Merdeka Malang</strong>.
        </p>
        <p class="text-slate-400 mb-12 text-xl leading-relaxed">
          Latar belakang IT memberikan saya pemahaman kuat tentang algoritma dan teknologi digital, sementara <span class="italic">passion</span> saya di bidang kreatif menjadikan saya seorang <strong class="text-primary">Spesialis Konten</strong> dan <strong class="text-secondary">Video Editor</strong> yang handal. 
          Saya percaya bahwa konten yang baik bukan hanya visual yang indah, tetapi harus memiliki strategi.
        </p>
        
        <div class="grid sm:grid-cols-2 gap-8">
          <div class="flex items-start gap-6 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/30 transition-all group backdrop-blur-sm">
            <div class="w-14 h-14 bg-primary/20 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:rotate-6">
              <Video class="w-8 h-8" />
            </div>
            <div>
              <h4 class="font-display font-extrabold text-xl text-white mb-2">Editing Video</h4>
              <p class="text-slate-400 leading-relaxed">Premiere Pro, After Effects, CapCut.</p>
            </div>
          </div>
          <div class="flex items-start gap-6 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-secondary/30 transition-all group backdrop-blur-sm">
            <div class="w-14 h-14 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:rotate-6">
              <Share2 class="w-8 h-8" />
            </div>
            <div>
              <h4 class="font-display font-extrabold text-xl text-white mb-2">Manajemen Konten</h4>
              <p class="text-slate-400 leading-relaxed">Strategi Sosmed, Copywriting, Analitik.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
