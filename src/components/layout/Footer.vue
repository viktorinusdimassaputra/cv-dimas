<script setup>
import { RouterLink } from 'vue-router'
import { cvData } from '../../data/cv-data'

const year = new Date().getFullYear()

const links = [
  { name: 'Beranda', to: '/' },
  { name: 'Tentang', to: '/about' },
  { name: 'Layanan', to: '/services' },
  { name: 'Pengalaman', to: '/experience' },
  { name: 'Portofolio', to: '/portfolio' },
  { name: 'Kontak', to: '/contact' },
]
</script>

<template>
  <footer style="background: #060e1a; border-top: 1px solid rgba(255,255,255,0.05)">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <RouterLink to="/" class="flex items-center gap-3 mb-5 group w-fit">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-lg group-hover:scale-110 transition-transform"
                 style="background: linear-gradient(135deg, #3b82f6, #6366f1)">VD</div>
            <span class="font-extrabold text-xl text-white" style="font-family:'Outfit',sans-serif">Viktorinus.<span style="color:#3b82f6">cv</span></span>
          </RouterLink>
          <p class="text-slate-500 leading-relaxed text-sm max-w-xs">
            Membantu brand dan personal berkembang melalui visualisasi video yang cinematic dan strategi konten yang efektif.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-bold uppercase tracking-widest text-xs mb-6">Navigasi</h4>
          <ul class="grid grid-cols-2 gap-3">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-slate-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
              >
                <span class="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact & Socials -->
        <div>
          <h4 class="text-white font-bold uppercase tracking-widest text-xs mb-6">Kontak</h4>
          <p class="text-slate-500 text-sm mb-2">{{ cvData.profile.email }}</p>
          <p class="text-slate-500 text-sm mb-6">{{ cvData.profile.whatsapp }}</p>

          <div class="flex gap-3">
            <a v-for="s in ['Instagram','TikTok','YouTube','LinkedIn']" :key="s" href="#"
               class="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 text-slate-500 hover:text-white hover:border-blue-500/30 transition-all text-xs font-bold"
               style="background: rgba(30,41,59,0.5)">
              {{ s.slice(0,2) }}
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>&copy; {{ year }} Viktorinus Dimas Saputra. All rights reserved.</p>
        <p>Dibuat dengan ❤️ di Malang, Indonesia</p>
      </div>
    </div>
  </footer>
</template>
