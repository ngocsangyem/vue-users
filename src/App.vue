<script setup lang="ts">
import { useUserStore } from '@/stores/user.store';
import { useFetch } from '@vueuse/core';
import { onMounted } from 'vue';
import { mapUsers } from '@/helpers';
import { IResponse } from '@/@types/response.interface'

const $userStore = useUserStore();
const userUrl = 'https://reqres.in/api/users/';

const { setUserList } = $userStore;

onMounted(async () => {
	const { data } = await useFetch<IResponse>(userUrl).get().json();
	setUserList(mapUsers(data.value.data));
});
</script>

<template>
	<router-view></router-view>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
