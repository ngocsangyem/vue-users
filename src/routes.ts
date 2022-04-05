import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home/Home.vue';
import UserDetail from '@/views/UserDetail/UserDetail.vue';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/users/:id',
		component: UserDetail
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
