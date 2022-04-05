<template>
	<tbody class="text-sm divide-y divide-gray-100">
		<template v-if="users.length > 0">
			<tr v-for="user in users" :key="user.id">
				<td class="p-2 whitespace-nowrap">
					<div class="flex items-center">
						<div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
							<img
								class="rounded-full"
								:src="user.avatar"
								width="40"
								height="40"
								:alt="user.name"
							/>
						</div>
						<div class="font-medium text-gray-800">
							<router-link :to="`/users/${user.id}`">
								{{ user.name }}
							</router-link>
						</div>
					</div>
				</td>
				<td class="p-2 whitespace-nowrap">
					<div class="text-left">{{ user.email }}</div>
				</td>
				<td class="p-2 whitespace-nowrap">
					<div
						:class="`text-left font-medium ${
							user.status === 'active'
								? 'text-green-500'
								: 'text-slate-500'
						}`"
					>
						{{ user.status }}
					</div>
				</td>
				<td class="p-2 whitespace-nowrap text-center align-middle">
					<button type="button" @click="onDeleteUser(user)">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ionicon w-5 h-5"
							viewBox="0 0 512 512"
						>
							<title>Trash</title>
							<path
								d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							/>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-miterlimit="10"
								stroke-width="32"
								d="M80 112h352"
							/>
							<path
								d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							/>
						</svg>
					</button>
				</td>
			</tr>
		</template>
		<template v-else>
			<tr>
				<td class="p-2 whitespace-nowrap">
					<p>No user found</p>
				</td>
			</tr>
		</template>
	</tbody>
</template>

<script setup lang="ts">
import { IUser } from '@/@types/user.interface';

interface Props {
	users: IUser[];
}
const props = defineProps<Props>();
const emit = defineEmits(['delete']);

const onDeleteUser = (user: IUser) => {
	emit('delete', user);
};
</script>
