<script setup>
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Linkedin, Github } from 'lucide-vue-next';
import { cvData } from '../../data/cv-data';
</script>

<template>
  <section id="contact" class="py-32 bg-surface relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 -z-10"></div>
    
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-12 gap-20">
        
        <div class="lg:col-span-5">
          <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Mari Terhubung!</span>
          <h2 class="text-5xl lg:text-7xl font-display font-extrabold text-white mb-8">Punya Proyek <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Menarik?</span></h2>
          <p class="text-slate-400 text-xl font-light mb-16 leading-relaxed">
            Mari berkolaborasi! Saya siap membantu mewujudkan visi kreatif Anda dengan sentuhan profesional dan strategi yang tepat.
          </p>
          
          <div class="space-y-10">
            <div class="flex items-center gap-8 group">
              <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-xl group-hover:shadow-primary/20">
                <Mail class="w-8 h-8" />
              </div>
              <div>
                <p class="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                <p class="text-white font-display font-extrabold text-2xl group-hover:text-primary transition-colors">{{ cvData.profile.email }}</p>
              </div>
            </div>
            <div class="flex items-center gap-8 group">
              <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-secondary text-2xl group-hover:bg-secondary group-hover:text-white transition-all shadow-xl group-hover:shadow-secondary/20">
                <Phone class="w-8 h-8" />
              </div>
              <div>
                <p class="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                <p class="text-white font-display font-extrabold text-2xl group-hover:text-secondary transition-colors">{{ cvData.profile.whatsapp }}</p>
              </div>
            </div>
            <div class="flex items-center gap-8 group text-slate-400">
              <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-200 text-2xl">
                <MapPin class="w-8 h-8" />
              </div>
              <div>
                <p class="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">Lokasi</p>
                <p class="text-white font-display font-extrabold text-2xl">{{ cvData.profile.location }}</p>
              </div>
            </div>
          </div>
          
          <div class="mt-20 flex gap-6">
            <a href="#" class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all shadow-xl"><Instagram class="w-8 h-8" /></a>
            <a href="#" class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 transition-all shadow-xl"><Youtube class="w-8 h-8" /></a>
            <a href="#" class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-xl"><Linkedin class="w-8 h-8" /></a>
            <a href="#" class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all shadow-xl"><Github class="w-8 h-8" /></a>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="bg-background/50 backdrop-blur-xl p-12 lg:p-16 rounded-[3rem] border border-white/5 shadow-2xl shadow-black/50">
            <form class="space-y-10" @submit.prevent>
              <div class="grid md:grid-cols-2 gap-10">
                <div class="space-y-4">
                  <label class="block text-sm font-bold text-slate-500 uppercase tracking-widest">Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama Anda" class="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-white placeholder:text-slate-600 text-lg shadow-inner font-medium" />
                </div>
                <div class="space-y-4">
                  <label class="block text-sm font-bold text-slate-500 uppercase tracking-widest">Alamat Email</label>
                  <input type="email" placeholder="contoh@email.com" class="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-white placeholder:text-slate-600 text-lg shadow-inner font-medium" />
                </div>
              </div>
              <div class="space-y-4">
                <label class="block text-sm font-bold text-slate-500 uppercase tracking-widest">Subjek Proyek</label>
                <input type="text" placeholder="Contoh: Edit Video YouTube / Manajemen Sosmed" class="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-white placeholder:text-slate-600 text-lg shadow-inner font-medium" />
              </div>
              <div class="space-y-4">
                <label class="block text-sm font-bold text-slate-500 uppercase tracking-widest">Pesan & Detail</label>
                <textarea placeholder="Ceritakan sedikit tentang kebutuhan Anda..." rows="6" class="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-white placeholder:text-slate-600 resize-none text-lg shadow-inner font-medium"></textarea>
              </div>
              <button type="submit" class="w-full py-6 rounded-2xl bg-primary text-white font-extrabold text-xl hover:bg-primary/80 transition-all flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-primary/40 active:scale-95 group">
                Kirim Pesan <Send class="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
