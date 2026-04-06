<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isScrolled = ref(false)
const isMobileOpen = ref(false)
const route = useRoute()

const navLinks = [
  { name: 'Beranda', to: '/' },
  { name: 'Tentang', to: '/about' },
  { name: 'Layanan', to: '/services' },
  { name: 'Portofolio', to: '/portfolio' },
  { name: 'Pengalaman', to: '/experience' },
  { name: 'Sertifikat', to: '/certificates' },
  { name: 'Blog', to: '/blog' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-700',
      isScrolled
        ? 'py-4 bg-[#060e1a]/80 backdrop-blur-3xl border-b border-white/5 shadow-2xl'
        : 'py-8 bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo (Premium) -->
      <RouterLink to="/" class="flex items-center gap-4 group">
        <div class="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:border-blue-500/30 transition-all duration-500">
          <span class="bg-gradient-to-tr from-blue-500 to-indigo-500 bg-clip-text text-transparent">D</span>
        </div>
        <div class="hidden sm:block">
          <p class="font-black text-white text-lg tracking-tighter leading-none" style="font-family: 'Outfit', sans-serif">
            Dimas<span class="text-blue-500">.</span>
          </p>
          <p class="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none mt-1">Creative Studio</p>
        </div>
      </RouterLink>

      <!-- Desktop Links (High-End) -->
      <div class="hidden xl:flex items-center gap-10">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-all duration-300 relative group/link px-2 py-1"
          :class="{ 'text-white': route.path === link.to }"
        >
          {{ link.name }}
          <span
            class="absolute -bottom-1 left-0 h-px bg-blue-500 transition-all duration-500"
            :class="route.path === link.to ? 'w-full' : 'w-0 group-hover/link:w-full'"
          ></span>
        </RouterLink>

        <RouterLink
          to="/contact"
          class="ml-6 px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] transition-all duration-500 shadow-xl shadow-blue-500/5 group/btn overflow-hidden relative"
          style="background: linear-gradient(135deg, #3b82f6, #6366f1)"
        >
          <span class="relative z-10 text-white">Start Project</span>
          <div class="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
        </RouterLink>
      </div>

      <!-- Mobile Toggle (Minimalist) -->
      <button
        class="xl:hidden w-12 h-12 flex items-center justify-center text-white rounded-2xl border border-white/5 bg-white/5 active:scale-95 transition-all"
        @click="isMobileOpen = !isMobileOpen"
      >
        <div class="w-6 h-5 relative flex flex-col justify-between">
           <span :class="['h-0.5 w-full bg-current rounded-full transition-all duration-300', isMobileOpen ? 'rotate-45 translate-y-2' : '']"></span>
           <span :class="['h-0.5 w-2/3 bg-current rounded-full transition-all duration-300 self-end', isMobileOpen ? 'opacity-0' : '']"></span>
           <span :class="['h-0.5 w-full bg-current rounded-full transition-all duration-300', isMobileOpen ? '-rotate-45 -translate-y-2.5' : '']"></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu (Full Overlay Style) -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 -translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-10"
    >
      <div
        v-if="isMobileOpen"
        class="absolute top-full left-4 right-4 mt-4 bg-[#0d1522] border border-white/5 rounded-[3rem] py-10 flex flex-col gap-2 px-8 xl:hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-8 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-white hover:bg-white/5 transition-all"
          :class="{ 'text-blue-500 bg-blue-500/5': route.path === link.to }"
          @click="isMobileOpen = false"
        >
          {{ link.name }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="mt-8 px-8 py-6 rounded-[1.5rem] bg-gradient-to-tr from-blue-500 to-indigo-500 text-white font-black text-xs uppercase tracking-[0.25em] text-center shadow-2xl shadow-blue-500/20"
          @click="isMobileOpen = false"
        >
          Contact Me
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>
