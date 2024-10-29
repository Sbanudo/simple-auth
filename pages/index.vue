<script setup lang="ts">
import { authClient } from "~/lib/auth-client";
const { data: session } = await authClient.useSession(useFetch);
</script>
<template>
    <div class="h-screen">
        <div class="justify-center items-center flex text-zinc-100 mt-40 pb-2">
            <div class="grid text-center">
            <div class="gap-2 items-center text-2xl pb-3">
                <p>Simple Auth with <a class="bg-zinc-900 px-1 underline" href="https://www.better-auth.com/">BetterAuth</a></p>
            </div>
            <div class="flex gap-2 items-center text-2xl max-w-xl">
                <p>o/</p>
                <p class="text-lg">if u found any issues pls, open issue on github</p>
            </div>
        <div class="justify-center items-center flex text-zinc-100 mt-4">
            <div class="flex gap-4">
            <NuxtLink to="/sign-up">
            <button class="py-1 px-1 border-2 border-zinc-800 rounded-lg duration-300 scale-[100%] hover:scale-[105%]">
                <p>SignUp</p>
            </button>
        </NuxtLink> 
            <NuxtLink to="/sign-in">
            <button class="py-1 px-1 border-2 border-zinc-800 rounded-lg duration-300 scale-[100%] hover:scale-[105%]">
                <p>SignIn</p>
            </button>
        </NuxtLink>
        <NuxtLink to="/account">
            <button :class="{ hidden: !session?.session.userId }"class="py-1 px-1 border-2 border-zinc-800 rounded-lg duration-300 scale-[100%] hover:scale-[105%]">
                <p>{{ session?.user.name }}</p>
            </button>
        </NuxtLink>
        
    </div>
    </div>
    </div>
    </div>
    <div class="text-zinc-100 items-center justify-center text-center mt-10 text-2xl">
        <p>I used:</p>
        <div class="grid text-xl text-center justify-center">
    <div class="flex items-center">
        <img src="/home/sbans/nuxt-projects/simple-auth/src/assets/icons/prisma.svg" class="w-8" />
        <p>Prisma</p>
    </div>
    <div class="flex items-center">
        <img src="/home/sbans/nuxt-projects/simple-auth/src/assets/icons/nuxt.svg" class="w-8" />
        <p>Nuxt</p>
    </div>
    <div class="flex items-center">
        <img src="/home/sbans/nuxt-projects/simple-auth/src/assets/icons/typescript.svg" class="w-8" />
        <p>TypeScript</p>
    </div>
    <div class="flex items-center">
        <img src="/home/sbans/nuxt-projects/simple-auth/src/assets/icons/tailwindcss.svg" class="w-8" />
        <p>Tailwind</p>
    </div>
    </div>
    </div>
    </div>
</template>