<script setup lang="ts">
import { useSession, signOut } from "~/lib/auth-client";
const { data: session, isPending, error } = await useSession(useFetch);
</script>
<template>
      <div
        class="opacity-100 -translate-y-2 flex h-screen items-center justify-center z-10"
      >
      
        <div class="container pb-10 flex flex-col gap-2">
          
    
          <div
            class="font-[Onest] gap-2 grid items-center text-left relative bg-zinc-900/30 mt-2 border border-zinc-900 p-5 ease-in duration-300 rounded-3xl shadow-2xl cursor-pointer scale-[100%] hover:scale-[102%] hover:shadow-xl transition"
          >
            <div class="flex items-center text-center gap-1">
              <img src="/src/assets/icons/home2.svg" class="size-5" />
              <div
                class="font-[RaleWay] flex text-sm text-zinc-300 ease-in duration-300 cursor-pointer hover:text-zinc-400/40"
              >
                <p>helo</p>
                <p>.md</p>
              </div>
            </div>
            
            <div class="flex items-center text-2xl gap-2 text-left text-zinc-300">
              <img
                src="/src/assets/icons/discordpic.jpg"
                class="size-12 rounded-3xl ease-in duration-300 cursor-pointer hover:size-16"
              />
              <p>o/!</p>
              <h1 class="flex cursor-pointer ease-in text-green-200 duration-300 hover:text-green-500">
                {{ session?.user?.name }}
              </h1>
              <div>
                <div class="flex mr-auto blur-[60px] bg-green-500 opacity-90 size-24"></div>
              </div>
            </div>
            <div class="container max-w-3xl">
              <div class="flex font-medium text-base gap-2 text-left text-zinc-300">
                <p>
                  Hi <a class="duration-300 hover:text-pink-400">:3</a>!
                  <a class="text-zinc-500">Maybe theres a some issues, if so, create issue on github pls!</a>
                </p>
              </div>
            </div>
            <div class="container flex justify-beetwen gap-2">
              <div
                class="text-left text-zinc-300 flex gap-1 items-center border px-3 py-1 rounded-2xl border-zinc-700/40 bg-neutral-900/30 ease-in duration-200 cursor-pointer hover:bg-zinc-800"
              >
                <img src="/src/assets/icons/telegramm.svg" class="size-5" />
                <RouterLink to="/">
                <Button @click="async () => {
                    await signOut()
                     }"  variant="secondary">
                    SignOut :<
                </Button>
            </RouterLink>
              </div>
              <div
                class="text-left text-zinc-300 flex gap-1 items-center border px-3 py-1 rounded-2xl border-zinc-700/40 bg-neutral-900/30 ease-in duration-200 cursor-pointer hover:bg-zinc-800"
              >
                <img src="/src/assets/icons/home2.svg" class="size-5" />
                <RouterLink to="/">
                <Button>
                  <p>Main page</p>
                </Button>
            </RouterLink>
              </div>
              <div
                class="text-left text-zinc-300 flex gap-1 items-center border px-3 py-1 rounded-2xl border-zinc-700/40 bg-neutral-900/30 ease-in duration-200 cursor-pointer hover:bg-zinc-800"
              >
                <RouterLink to="/info">
                <Button>
                  <p>→ More info</p>
                </Button>
            </RouterLink>
              </div>
              <NuxtLink to="/reset" >
              <div
                class="text-left text-zinc-300 flex gap-1 items-center border  px-2 py-1 rounded-2xl border-zinc-700/40 bg-neutral-900/30 ease-in duration-200 cursor-pointer hover:bg-zinc-800"
              >
                <img src="/src/assets/icons/moon.svg" class="size-5" />
                <p>Reset password <a class="text-red-400">doesnt work</a></p>
              </div>
            </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    
    
    </template>
    