<script setup>
import { ref } from 'vue'
import { cvData } from '../data/cv-data'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sent = ref(false)

const submit = () => {
  // Placeholder submit logic
  sent.value = true
  setTimeout(() => { sent.value = false }, 4000)
}
</script>

<template>
  <div class="pt-32 pb-24 min-h-screen bg-[#060e1a] relative overflow-hidden">
    <!-- Subtle Background Glows -->
    <div class="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-5 blur-[150px] pointer-events-none"
         style="background: radial-gradient(circle, #3b82f6, transparent)"></div>
    <div class="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-5 blur-[120px] pointer-events-none"
         style="background: radial-gradient(circle, #6366f1, transparent)"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-32">
        <span class="inline-block text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Connect</span>
        <h1 class="text-5xl lg:text-8xl font-black text-white leading-[1.1] mb-8" style="font-family: 'Outfit', sans-serif">
          Let's Start a <br/>
          <span style="background: linear-gradient(135deg, #3b82f6, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;" class="animate-gradient">
            Conversation.
          </span>
        </h1>
        <p class="text-slate-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto">Have a project in mind or just want to say hi? I'm always open to discussing new ideas.</p>
      </div>

      <div class="grid lg:grid-cols-5 gap-20">
        <!-- Contact Sidebar (Info) -->
        <div class="lg:col-span-2 space-y-10">
          <div class="space-y-6">
            <h2 class="text-3xl font-black text-white" style="font-family: 'Outfit', sans-serif">Reach Out Directly</h2>
            <p class="text-slate-500 text-lg font-medium leading-relaxed">
               I typically respond within 24 hours. Feel free to use the form or reach out through social channels.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-4">
            <a v-for="info in [
                { label: 'Email', value: cvData.profile.email, href: `mailto:${cvData.profile.email}`, color: '#3b82f6' },
                { label: 'WhatsApp', value: cvData.profile.whatsapp, href: `https://wa.me/${cvData.profile.whatsapp.replace(/[^0-9]/g,'')}`, color: '#22c55e' }
              ]" :key="info.label" :href="info.href"
               class="group flex items-center gap-6 p-8 rounded-[2.5rem] border border-white/5 bg-slate-800/10 hover:border-white/10 transition-all duration-500">
               <div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-900/50 border border-white/5 text-slate-500 group-hover:text-white transition-colors">
                  <span class="font-black text-xs">{{ info.label.charAt(0) }}</span>
               </div>
               <div>
                  <p class="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">{{ info.label }}</p>
                  <p class="text-white font-black text-lg group-hover:text-blue-500 transition-colors">{{ info.value }}</p>
               </div>
            </a>
          </div>

          <!-- Social Matrix -->
          <div class="pt-10">
             <h4 class="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-8">Social Presence</h4>
             <div class="flex flex-wrap gap-4">
                <a v-for="s in ['Instagram', 'TikTok', 'LinkedIn', 'YouTube']" :key="s" href="#"
                   class="px-6 py-3 rounded-2xl border border-white/5 bg-slate-800/10 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white hover:border-blue-500/30 transition-all">
                   {{ s }}
                </a>
             </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="lg:col-span-3">
          <div class="p-12 lg:p-16 rounded-[4rem] border border-white/5 bg-slate-800/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
             <!-- Success Notification -->
             <Transition enter-active-class="transition duration-500" enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100" leave-active-class="transition duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
               <div v-if="sent" class="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#060e1a]/90 backdrop-blur-xl text-center p-10">
                  <div class="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                     <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 class="text-3xl font-black text-white mb-4" style="font-family: 'Outfit', sans-serif">Message Received!</h3>
                  <p class="text-slate-500 font-medium">I'll get back to you sooner than you think. Cheers!</p>
               </div>
             </Transition>

             <form @submit.prevent="submit" class="space-y-10">
               <div class="grid md:grid-cols-2 gap-10">
                 <div class="space-y-4">
                   <label class="block text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Full Name</label>
                   <input v-model="form.name" type="text" placeholder="John Doe" required
                          class="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-blue-500/50 focus:outline-none text-white font-bold transition-all placeholder:text-slate-700" />
                 </div>
                 <div class="space-y-4">
                   <label class="block text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Email Address</label>
                   <input v-model="form.email" type="email" placeholder="john@example.com" required
                          class="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-blue-500/50 focus:outline-none text-white font-bold transition-all placeholder:text-slate-700" />
                 </div>
               </div>

               <div class="space-y-4">
                 <label class="block text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Inquiry Subject</label>
                 <input v-model="form.subject" type="text" placeholder="Video Editing Project" required
                        class="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-blue-500/50 focus:outline-none text-white font-bold transition-all placeholder:text-slate-700" />
               </div>

               <div class="space-y-4">
                 <label class="block text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Your Vision</label>
                 <textarea v-model="form.message" rows="6" placeholder="Tell me about your project..." required
                           class="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-blue-500/50 focus:outline-none text-white font-bold transition-all placeholder:text-slate-700 resize-none"></textarea>
               </div>

               <button type="submit"
                       class="w-full py-6 rounded-[2rem] font-black text-white text-lg flex items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 active:scale-95 shadow-xl shadow-blue-500/10"
                       style="background: linear-gradient(135deg, #3b82f6, #6366f1)">
                 Dispatch Message
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
               </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
