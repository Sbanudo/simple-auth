<script lang="ts" setup>
import { useSession, signOut } from "~/lib/auth-client";
const { data: session } = await useSession(useFetch);
import { authClient } from "~/lib/auth-client.ts";
import { ref } from 'vue';

const firstName = ref("");
const isLoading = ref(false);

const editName = async() => {
    if(firstName.value === "") {
        alert('Please fill all fields!!');
        return;
    }
    isLoading.value = true;
    const { data, error } = await authClient.user.update({
        name: firstName.value,
    });
    if(error) {
        alert('error')
        return;
    }
    alert('success')
    isLoading.value = false;
}
</script>
<template>
  <div class="font-[Onest] ">
  <div class="grid text-zinc-300 h-full items-center justify-center pt-10 font-[Onest] ">
      <div class="flex pb-3 ">
      <div class=" text-zinc-300 px-1 py-1 rounded-2xl ease-in duration-300 scale-[100%] hover:scale-[102%] hover:text-zinc-500">
      <NuxtLink to="/" >
      <p>→ main page</p>
  </NuxtLink>
  </div>
  </div> 
      <div class=" max-w-xlfont-[Onest] gap-2 grid items-center relative bg-zinc-900/30 mt-2 border border-zinc-900 p-5 ease-in duration-300 rounded-3xl shadow-2xl cursor-pointer scale-[100%] hover:scale-[102%] hover:shadow-xl transition">
  <div class="text-center text-3xl mx-20">
      <h1>Change name</h1>
  </div>
      <div class="text-center text-sm text-zinc-400 mx-40">
        <p>your name is <a class="text-zinc-100 text-base">{{ session?.user?.name }}</a></p>
      </div>
      <div class="grid max-w-xl">
        <Label for="first-name" class="select-none">New name<a class="text-xl text-red-700">*</a></Label>
        <input required="true" class="border-2 border-zinc-800 text-zinc-500 bg-zinc-900 rounded-sm focus:outline-none scale-[100%] ease-in duration-300 focus:scale-[102%]" id="first-name" placeholder="Sbans" v-model="firstName" />

      </div>
    
      <div class="mt-2 mx-auto hover:bg-zinc-800 py-1 px-1 rounded-lg ease-in duration-300">
      <Button type="button" class="w-full disabled:opacity-40" @click="editName" >Change name</Button> 
    </div>
    </div>
  </div>
  </div>
</template>