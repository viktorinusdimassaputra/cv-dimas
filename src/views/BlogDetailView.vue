<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { cvData } from '../data/cv-data'
import gsap from 'gsap'

const route = useRoute()
const router = useRouter()
const postId = ref(parseInt(route.params.id))
const post = computed(() => cvData.blog.find(p => p.id === postId.value))

onMounted(() => {
  if (!post.value) {
    router.push('/blog')
    return
  }
  gsap.from('.blog-header', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from('.blog-article', { y: 30, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
})
</script>

<template>
  <div v-if="post" class="pt-32 pb-20 min-h-screen bg-[#060e1a]">
    <div class="max-w-4xl mx-auto px-6">
      
      <!-- Back Link -->
      <RouterLink to="/blog" class="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-all mb-16 font-black text-[10px] uppercase tracking-widest group">
        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
        </svg>
        Kembali ke Blog
      </RouterLink>

      <!-- Post Header -->
      <div class="blog-header mb-20 text-center">
        <div class="flex justify-center mb-10">
          <span class="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 border border-blue-500/10 bg-blue-500/5">
            {{ post.category }}
          </span>
        </div>
        <h1 class="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-10" style="font-family: 'Outfit', sans-serif">
          {{ post.title }}
        </h1>
        <div class="flex items-center justify-center gap-6 text-slate-500 text-[11px] font-black uppercase tracking-widest">
           <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
                <img src="/Dimas alat.jpg" class="w-full h-full object-cover" />
              </div>
              <span>{{ cvData.profile.name }}</span>
           </div>
           <span class="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
           <span>{{ post.date }}</span>
           <span class="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
           <span>5 Min Read</span>
        </div>
      </div>

      <!-- Feature Image -->
      <div class="relative h-[350px] lg:h-[550px] rounded-[3.5rem] overflow-hidden mb-24 shadow-2xl border border-white/5 shadow-black/80">
        <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>

      <!-- Content -->
      <article class="blog-article prose prose-invert lg:prose-xl max-w-none">
        <p class="text-2xl lg:text-3xl text-slate-200 leading-relaxed font-bold mb-14 px-8 border-l-4 border-blue-500" style="font-family: 'Outfit', sans-serif">
          "{{ post.excerpt }}"
        </p>
        
        <div class="space-y-10 text-slate-400 leading-relaxed text-lg lg:text-xl">
          <p>
            Kreativitas di era modern bukan lagi soal bakat semata, melainkan bagaimana kita menggabungkan insting visual dengan alat yang tepat. 
            Dalam dunia video editing yang kian kompetitif, memahami setiap frame bukan lagi opsional, melainkan kewajiban bagi setiap kreator.
          </p>
          
          <h2 class="text-4xl font-black text-white mt-20 mb-8" style="font-family: 'Outfit', sans-serif">Eksplorasi Warna & Mood</h2>
          
          <p>
            Color grading seringkali dianggap sebagai tahap akhir yang membosankan. Padahal, di sinilah jiwa dari sebuah video terbentuk. 
            Bayangkan bagaimana film-film besar seperti "The Matrix" atau "Oppenheimer" menggunakan palet warna tertentu untuk membangun emosi penonton. 
            Dalam skala kecil seperti Reels atau TikTok, pemilihan warna yang 'Premium' dapat membedakan konten Anda dari ribuan konten lainnya.
          </p>

          <div class="grid grid-cols-2 gap-6 my-20">
             <div class="aspect-video rounded-3xl overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover" />
             </div>
             <div class="aspect-video rounded-3xl overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover" />
             </div>
          </div>

          <h3 class="text-3xl font-black text-white mb-6" style="font-family: 'Outfit', sans-serif">Langkah-Langkah Strategis</h3>
          <p>
            Mulailah dengan riset audiens. Siapa yang akan menonton? Apa yang mereka cari? Setelah itu, barulah susun storyboard yang kuat. 
            Jangan terjebak pada transisi yang terlalu ramai jika tidak mendukung narasi. Simplicoty is the ultimate sophistication.
          </p>

          <blockquote class="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 text-slate-300 italic">
             "Frame by frame, we build a legacy. Every cut has a reason, and every shot holds a silent conversation with the observer."
          </blockquote>
        </div>
      </article>

      <!-- Share -->
      <div class="mt-32 pt-16 border-t border-white/5 flex flex-col items-center">
        <h4 class="text-slate-500 font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Bagikan Inspirasi</h4>
        <div class="flex items-center justify-center gap-4">
          <a v-for="s in ['WhatsApp', 'Instagram', 'LinkedIn']" :key="s" href="#" 
             class="px-8 py-4 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/30 transition-all text-xs font-black uppercase tracking-widest bg-slate-800/20 backdrop-blur-xl">
            {{ s }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
