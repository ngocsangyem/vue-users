<template>
	<section class="antialiased h-screen px-4">
		<div class="flex flex-col justify-center h-full">
			<div
				class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200"
			>
				<header class="px-5 py-4 border-b border-gray-100">
					<h2 class="font-semibold text-gray-800">User Data</h2>
				</header>
				<div class="p-3">
					<div class="overflow-x-auto">
						<table class="table-auto w-full">
							<header-table :headers="headersData"></header-table>
							<body-table :users="users"></body-table>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import HeaderTable from './HeaderTable/HeaderTable.vue';
import BodyTable from './BodyTable/BodyTable.vue';
import {IHeaderTable} from "@/@types/table.interface";

const headersData: IHeaderTable[] = [
	{
		name: 'Name'
	},
	{
		name: 'Email'
	},
	{
		name: 'Status'
	},
];
const users = [
	{
		"id": 7,
		"email": "michael.lawson@reqres.in",
		"first_name": "Michael",
		"last_name": "Lawson",
		"avatar": "https://reqres.in/img/faces/7-image.jpg"
	},
	{
		"id": 8,
		"email": "lindsay.ferguson@reqres.in",
		"first_name": "Lindsay",
		"last_name": "Ferguson",
		"avatar": "https://reqres.in/img/faces/8-image.jpg"
	},
	{
		"id": 9,
		"email": "tobias.funke@reqres.in",
		"first_name": "Tobias",
		"last_name": "Funke",
		"avatar": "https://reqres.in/img/faces/9-image.jpg"
	},
]
</script>

<style lang="scss">
.table {
	border-spacing: 0 15px;
}

i {
	font-size: 1rem !important;
}

.table tr {
	border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
}
</style>
