<template>
	<thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
		<tr>
			<th class="p-2 whitespace-nowrap text-left" v-for="header in headers" :key="header.name">
				{{ header.name }}
			</th>
		</tr>
	</thead>
</template>

<script setup lang="ts">
import { IHeaderTable } from '@/@types/table.interface';
interface Props {
	headers: IHeaderTable[];
}
const props = defineProps<Props>();
</script>
