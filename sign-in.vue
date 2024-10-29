<script setup lang="ts">
import { signIn } from "~/lib/auth-client.js";

const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const validatePassword = computed(() => {
  return password.value === passwordConfirmation.value;
});

const handleSignIn = async () => {
	await signIn.email(
		{
			email: email.value,
			password: password.value,
			callbackURL: "/account",
		},
		{
			onError(context) {
				alert(context.error.message);
			},
		},
	);
};
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
  <div class="text-center text-3xl mx-40">
      <h1>Log-in</h1>
  </div>
      <div class="text-center text-sm text-zinc-400">
        <p>put ur information to login</p>
      </div>
      <div class="grid max-w-sm">
        <Label for="email" class="select-none">Email</Label>
        <input required="true" class="border-2 border-zinc-800 text-zinc-500 bg-zinc-900 rounded-sm focus:outline-none scale-[100%] ease-in duration-300 focus:scale-[102%]" id="Email" placeholder="Email" v-model="email" />
      </div>
      <div class="grid max-w-sm pt-1">
        <Label for="last-name" class="select-none">Password</Label>
        <input  class="border-2 border-zinc-800 text-zinc-500 bg-zinc-900 rounded-sm focus:outline-none scale-[100%] ease-in duration-300 focus:scale-[102%]" id="password" placeholder="Password" required v-model="password" />
      </div>
      <div class="grid max-w-sm pt-1">
        <Label for="last-name" class="select-none">Confirm password</Label>
        <input class="border-2 border-zinc-800 text-zinc-500 bg-zinc-900 rounded-sm focus:outline-none scale-[100%] ease-in duration-300 focus:scale-[102%]" id="confirm-password" placeholder="Confirm password" required v-model="passwordConfirmation" />
      </div>
      <p class="text-red-400" :class="{ hidden: validatePassword }">the passwords are not the same.</p>
      <div class="mt-2 mx-auto hover:bg-zinc-800 py-1 px-1 rounded-lg ease-in duration-300">
      <Button type="button" class="w-full disabled:opacity-40" @click="handleSignIn" :disabled="!validatePassword" >Login</Button>
    </div>
    </div>
    <div class="flex mx-auto gap-1 mt-4 text-sm select-none">
      <p>Dont have account?</p>
      <RouterLink to="/sign-up" class="text-zinc-100 scale-[100%] ease-in duration-300 hover:scale-[104%]">SignUp</RouterLink>
    </div>
  </div>
  </div>
</template>