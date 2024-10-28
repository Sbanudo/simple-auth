<template>
  <div class="font-[Onest] flex my-5 h-full justify-center text-center">
    <div class="grid">
    <div class="text-red-800 text-5xl"><h1>Error</h1></div>
    <div class="text-zinc-300 text-2xl" v-if="props.error.statusCode === 500">
      <h2>Server error <a class="text-zinc-500">500</a></h2>
    </div>
    <div  class="text-zinc-300 text-2xl" v-else-if="props.error.statusCode === 404">
      <h2>Page not found <a class="text-zinc-500">404</a></h2>  
    </div>
    <div v-else>
      <h1 class="text-zinc-300 text-2xl">Something went wrong <a class="text-zinc-500">only you know what happened..</a></h1>
    </div>
    <button @click="handleError" class="px-1 py-1 text-zinc-100 mt-3">Back on main page</button>
  </div> 
</div> 
</template>


<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

</script>
