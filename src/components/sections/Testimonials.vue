<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { cvData } from '../../data/cv-data'
import gsap from 'gsap'

const testimonials = cvData.testimonials
const activeIdx = ref(0)
const direction = ref(1) // 1 for next, -1 for prev
let timer = null

const next = () => {
  direction.value = 1
  activeIdx.value = (activeIdx.value + 1) % testimonials.length
}
const prev = () => {
  direction.value = -1
  activeIdx.value = (activeIdx.value - 1 + testimonials.length) % testimonials.length
}

const startTimer = () => {
  timer = setInterval(next, 5000)
}

const stopTimer = () => {
  if (timer) clearInterval(timer)
}

onMounted(() => {
  gsap.from('.testi-header', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' })
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <section class="py-40 relative overflow-hidden bg-[#0a121f]" @mouseenter="stopTimer" @mouseleave="startTimer">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[120px] pointer-events-none"
         style="background: radial-gradient(circle, #3b82f6, transparent)"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="testi-header text-center mb-24">
        <span class="inline-block text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Social Proof</span>
        <h2 class="text-5xl lg:text-7xl font-black text-white mb-8" style="font-family: 'Outfit', sans-serif">
          Ulasan &
          <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
             Apresiasi.
          </span>
        </h2>
        <p class="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Testimoni nyata dari kolega dan klien yang telah berkolaborasi.</p>
      </div>

      <div class="max-w-5xl mx-auto relative px-4 lg:px-24">
        <!-- Testimonial Content -->
        <div class="relative overflow-hidden min-h-[450px] lg:min-h-[400px] flex items-center justify-center">
            <TransitionGroup 
              :name="direction > 0 ? 'slide-next' : 'slide-prev'" 
              tag="div" 
              class="relative w-full"
            >
              <div 
                v-for="(testi, idx) in testimonials" 
                :key="testi.id" 
                v-show="activeIdx === idx"
                class="bg-slate-800/20 p-12 lg:p-20 rounded-[4rem] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.3)] backdrop-blur-3xl absolute top-0 left-0 w-full"
                style="transform: none;"
              >
                <!-- Quote Icon -->
                <div class="flex justify-center mb-10">
                   <svg class="w-12 h-12 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.899 14.914 16 16.017 16H19.017V14H14.017V5H22.017V14C22.017 17.866 18.883 21 15.017 21H14.017ZM3.017 21V18C3.017 16.899 3.914 16 5.017 16H8.017V14H3.017V5H11.017V14C11.017 17.866 7.883 21 4.017 21H3.017Z"/></svg>
                </div>
                
                <p class="text-2xl lg:text-3xl text-slate-200 leading-relaxed italic text-center mb-12 font-medium" style="font-family: 'Outfit', sans-serif">
                  "{{ testi.content }}"
                </p>

                <div class="flex flex-col items-center gap-4">
                  <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/20 shadow-xl">
                    <img :src="testi.avatar" :alt="testi.name" class="w-full h-full object-cover" />
                  </div>
                  <div class="text-center">
                    <h4 class="text-white font-black text-xl mb-1" style="font-family: 'Outfit', sans-serif">{{ testi.name }}</h4>
                    <p class="text-blue-500 font-black text-[10px] uppercase tracking-[0.2em]">{{ testi.role }}</p>
                  </div>
                </div>
              </div>
            </TransitionGroup>
        </div>

        <!-- Controls (Hidden on mobile for cleaner look, but functional via auto) -->
        <div class="hidden lg:flex absolute top-1/2 -left-12 -translate-y-1/2 flex-col gap-4">
          <button @click="prev" class="w-14 h-14 rounded-full flex items-center justify-center border border-white/5 bg-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all group backdrop-blur-xl">
            <svg class="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
          </button>
        </div>
        <div class="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2 flex-col gap-4">
          <button @click="next" class="w-14 h-14 rounded-full flex items-center justify-center border border-white/5 bg-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all group backdrop-blur-xl">
            <svg class="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center gap-3 mt-16">
           <button 
             v-for="(t, idx) in testimonials" 
             :key="t.id" 
             @click="activeIdx = idx"
             class="w-2.5 h-2.5 rounded-full transition-all duration-500"
             :class="activeIdx === idx ? 'w-8 bg-blue-500' : 'bg-slate-700 hover:bg-slate-500'"
           ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-next-enter-active, .slide-next-leave-active,
.slide-prev-enter-active, .slide-prev-leave-active {
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-next-enter-from { opacity: 0; transform: translateX(100px) scale(0.9); }
.slide-next-leave-to { opacity: 0; transform: translateX(-100px) scale(0.9); }

.slide-prev-enter-from { opacity: 0; transform: translateX(-100px) scale(0.9); }
.slide-prev-leave-to { opacity: 0; transform: translateX(100px) scale(0.9); }
</style>
