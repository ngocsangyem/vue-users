<template>
	<tbody class="text-sm divide-y divide-gray-100">
		<tr v-for="user in users">
			<td class="p-2 whitespace-nowrap">
				<div class="flex items-center">
					<div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
						<img
							class="rounded-full"
							:src="user.avatar"
							width="40"
							height="40"
							:alt="`${user.first_name} ${user.last_name}`"
						/>
					</div>
					<div class="font-medium text-gray-800">{{ user.first_name }} {{user.last_name}}</div>
				</div>
			</td>
			<td class="p-2 whitespace-nowrap">
				<div class="text-left">{{ user.email }}</div>
			</td>
			<td class="p-2 whitespace-nowrap">
				<div class="text-left font-medium text-green-500">
					active
				</div>
			</td>
		</tr>
	</tbody>
</template>

<script setup lang="ts">
import { IUser } from "@/@types/user.interface";

interface Props {
	users: IUser[];
}
const props = defineProps<Props>();
</script>
