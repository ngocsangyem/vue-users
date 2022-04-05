<template>
	<div class="h-96 block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12 flex items-center justify-center relative">
		<div class="w-full h-full absolute inset-0 blur-sm" :style="{
			backgroundImage: `url(${user.avatar})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		}"></div>
		<div class="relative w-16 h-16 rounded-full">
			<img :src='user.avatar' alt="Trendy Pants and Shoes" class="w-16 h-16 object-cover object-top rounded-full relative" :alt="user.name" />
			<span :class="`status-badge inline-block w-2 h-2 rounded-full right-0 absolute ${user.status === 'active' ? 'bg-green-400' : 'bg-gray-400'}`"></span>
		</div>
	</div>
	<div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
		<div class="px-6 py-12 md:px-12">
			<h2 class="text-3xl font-bold mb-4 text-blue-600 display-5 relative" v-if="!isEdited">
				{{ user.name }}
				<button @click="toggleEdit">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-4 h-4" viewBox="0 0 512 512"><title>Pencil</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"/></svg>
				</button>
			</h2>
			<div class="mb-3 inline-flex" v-if="isEdited">
				<input
					type="text"
					class="
						  form-control
						  block
						  w-48
						  px-2
						  py-1
						  text-sm
						  font-normal
						  text-gray-700
						  bg-white bg-clip-padding
						  border border-solid border-gray-300
						  rounded
						  transition
						  ease-in-out
						  m-0
						  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
						"
					id="edit-text"
					name="edit-text"
					@change="onChangeUser"
					:value="user.name"
				/>
				
				<button class="ml-2" @click="toggleEdit">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-5 h-5" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
				</button>
			</div>

			<div>
				<button @click="onUpdate(userInfo)" type="button" :class="`mr-3 inline-block px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out`">Update info</button>
				<button @click="onToggleStatus(user)" type="button" class="mr-3 inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">{{ user.status === 'active' ? 'Deactivate' : 'Activate' }}</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { IUser } from "@/@types/user.interface";
import { ref, onMounted } from "vue";

interface Props {
	user: IUser;
}
const emit = defineEmits(['update', 'toggleStatus']);
const props = defineProps<Props>();

const isEdited = ref(false);
const initialUser = {
	name: '',
	last_name: '',
	first_name: '',
	id: '',
	avatar: '',
	email: '',
	status: '',
}
const userInfo = ref<IUser>(initialUser)

const onUpdate = (user: IUser) => {
	emit('update', user)
	userInfo.value = initialUser;
	toggleEdit();
}

const onToggleStatus = (user: IUser) => {
	emit('toggleStatus', user)
}

const onDeleteUser = (user: IUser) => {
	emit('delete', user)
}

const onChangeUser = (e: Event) => {
	userInfo.value.name = (e.target as HTMLInputElement).value;
}

const toggleEdit = () => {
	isEdited.value = !isEdited.value
}

onMounted(() => {
	userInfo.value = props.user;
})
</script>

<style lang="scss" scoped>
.status-badge {
	right: 6px;
	bottom: 5px;
}
button {
	[disabled] {
		pointer-events: none;
	}
}
</style>
