<script lang="ts" setup>
import { errorMessages } from "vue/compiler-sfc";
import { signUp } from "~/lib/auth-client.ts";
import { ref, computed } from 'vue';

const firstName = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const validatePassword = computed(() => {
  return password.value === passwordConfirmation.value;
});

const handleSignUp = async () => {
	const user = {
		firstName: firstName.value,
		email: email.value,
		password: password.value,
	};
	await signUp.email({
		email: user.email,
		password: user.password,
		name: `${user.firstName}`,
		callbackURL: "/sign-in",
		fetchOptions: {
			onError(context) {
				alert(context.error.message);
			},
		},
	});
};

const isFormValid = computed(() => {
  return firstName.value.length > 0 && password.value.length > 8; // Ensure the password field is not empty
});
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
      <h1>SignUp</h1>
  </div>
      <div class="text-center text-sm text-zinc-400 mx-40">
        <p>put ur information for signup</p>
      </div>
      <div class="grid max-w-xl">
        <Label for="first-name" class="select-none">Name<a class="text-xl text-red-700">*</a></Label>
        <input required="true" class="border-2 border-zinc-800 text-zinc-500 bg-zinc-900 rounded-sm focus:outline-none scale-[100%] ease-in duration-300 focus:scale-[102%]" id="first-name" placeholder="Sbans" v-model="firstName" />

      </div>
      <div class="grid max-w-xl pt-1">
        <Label for="email" class="select-none">Email<a class="text-xl text-red-700">*</a></Label>
        <input  class="border-2 border-zinc-800 text-zinc-500 bg-zinc-900 rounded-sm focus:outline-none scale-[100%] ease-in duration-300 focus:scale-[102%]" id="email" placeholder="Sbans@sbans.com" required v-model="email" />
      </div>
      <div class="grid pt-1">
        <Label for="password" class="select-none">Password<a class="text-xl text-red-700">*</a></Label>
      <input
        class="border-2 border-zinc-800 text-zinc-500 bg-zinc-900 rounded-sm focus:outline-none scale-[100%] ease-in duration-300 focus:scale-[102%]"
        id="password"
        placeholder="Password"
        required
        v-model="password"
      />

      </div>
      <div class="grid pt-1">
        <Label for="passwordConfirmation" class="select-none">Confirm password<a class="text-xl text-red-700">*</a></Label>
      <input
        class="border-2 border-zinc-800 text-zinc-500 bg-zinc-900 rounded-sm focus:outline-none scale-[100%] ease-in duration-300 focus:scale-[102%]"
        id="passwordConfirmation"
        placeholder="Confirm password"
        required
        v-model="passwordConfirmation"
      />
      <p class="text-red-400" :class="{ hidden: validatePassword }">The passwords are not the same.</p>
      <p class="text-red-400" :class="{ hidden: isFormValid }">The password should be atleast 8 characters.</p>
      </div>
      <div class="mt-2 mx-auto hover:bg-zinc-800 py-1 px-1 rounded-lg ease-in duration-300">
      <Button type="button" class="w-full disabled:opacity-40" @click="handleSignUp"  :disabled="!isFormValid || !validatePassword">Create account</Button> 
    </div>
    </div>
    <div class="flex mx-auto gap-1 mt-4 text-sm select-none">
      <p>Already have account?</p>
      <RouterLink to="/sign-in" class="text-zinc-100 scale-[100%] ease-in duration-300 hover:scale-[104%]">SignIn</RouterLink>
    </div>
  </div>
  </div>
</template>
