<script setup>
import { onMounted, ref } from 'vue'
import { cvData } from '../data/cv-data'
import gsap from 'gsap'

onMounted(() => {
  gsap.from('.profile-img', { scale: 0.9, opacity: 0, duration: 1.2, ease: 'power3.out' })
  gsap.from('.profile-text', { x: 50, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
})
</script>

<template>
  <div class="pt-32 pb-20 min-h-screen">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Profile Image -->
        <div class="profile-img relative">
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
            <img src="/Dimas alat.jpg" alt="Dimas Saputra" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div class="absolute bottom-10 left-10 text-white">
               <h2 class="text-3xl font-extrabold" style="font-family: 'Outfit', sans-serif">{{ cvData.profile.name }}</h2>
               <p class="text-blue-400 font-bold uppercase tracking-widest text-sm mt-2">{{ cvData.profile.title }}</p>
            </div>
          </div>
        </div>

        <!-- Bio Content -->
        <div class="profile-text">
          <span class="inline-block text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-6">Cerita Saya</span>
          <h1 class="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-10" style="font-family: 'Outfit', sans-serif">
            Mengenal Lebih Dekat
            <br/>
            <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
              Sosok di Balik Layar.
            </span>
          </h1>

          <div class="space-y-8 text-slate-400 text-lg leading-relaxed">
            <p>
              Halo! Saya <strong class="text-white">Viktorinus Dimas Saputra</strong>. Lahir dan besar dengan rasa ingin tahu yang tinggi terhadap bagaimana sebuah visual dapat mempengaruhi perasaan penontonnya. Kini, saya mendedikasikan waktu saya untuk memadukan <strong class="text-blue-400">logika teknologi</strong> dan <strong class="text-indigo-400">estetika kreatif</strong>.
            </p>
            <p>
              {{ cvData.profile.bio }}
            </p>
            <p class="italic p-8 rounded-3xl bg-white/5 border border-white/10 text-white font-medium text-xl relative">
              <svg class="absolute -top-4 -left-4 w-10 h-10 text-blue-500/30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.899 14.914 16 16.017 16H19.017V14H14.017V5H22.017V14C22.017 17.866 18.883 21 15.017 21H14.017ZM3.017 21V18C3.017 16.899 3.914 16 5.017 16H8.017V14H3.017V5H11.017V14C11.017 17.866 7.883 21 4.017 21H3.017Z"/></svg>
              "{{ cvData.profile.philosophy }}"
            </p>
            <p>
              Di waktu luang, saya sering mengeksplorasi spot-spot baru di Malang untuk sekadar mengambil cuplikan video b-roll atau mempelajari update terbaru dari algoritma media sosial yang kian dinamis. Saya percaya bahwa belajar adalah proses yang tak pernah usai.
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 mt-12">
            <RouterLink
              to="/contact"
              class="px-8 py-4 rounded-full font-extrabold text-white transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-xl shadow-blue-500/20"
              style="background: linear-gradient(135deg, #3b82f6, #6366f1)"
            >
              Mari Bekerja Sama
            </RouterLink>
            <a href="#" class="px-8 py-4 rounded-full font-extrabold text-white border border-white/10 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 active:scale-95">
              Unduh Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
