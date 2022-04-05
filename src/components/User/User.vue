<template>
	<user-info
		v-if="user"
		:user="user"
		@toggleStatus="onToggleStatus"
		@update="onUpdateUserInfo"
	></user-info>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.store';
import UserInfo from '@/components/User/UserInfo/UserInfo.vue';
import { IUser } from '@/@types/user.interface';

const $userStore = useUserStore();
const { getUsersList } = storeToRefs($userStore);
const $routes = useRoute();
const user = computed(() =>
	getUsersList.value.find((user: IUser) => user.id === $routes.params.id)
);

const onToggleStatus = (user: IUser) => {
	$userStore.toggleUserStatus(user);
};

const onUpdateUserInfo = (user: IUser) => {
	$userStore.changeUsername(user);
};
</script>
