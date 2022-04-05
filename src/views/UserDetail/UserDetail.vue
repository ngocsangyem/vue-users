<template>
	<div class="container my-24 px-6 mx-auto">
		<section class="mb-32 text-gray-800 text-center lg:text-left">
			<router-link to="/" class="text-white mb-4 inline-block">
				<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-5 h-5" viewBox="0 0 512 512"><title>Arrow Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
			</router-link>
			<div class="block rounded-lg shadow-lg bg-white">
				<div class="flex flex-wrap items-center">
					<user></user>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import User from '@/components/User/User.vue'
</script>
