import { defineStore } from 'pinia';
import { IUserState } from '@/@types/user.interface';
import { IUser } from '../@types/user.interface';

export const useUserStore = defineStore('user', {
	state: (): IUserState => ({
		userList: [],
	}),
	getters: {
		getUserList: (state: IUserState) => state.userList,
	},
	actions: {
		setUserList: (state: IUserState, payload: IUser[]) => {
			state.userList = payload;
		},
		removeUser: (state: IUserState, payload: IUser) => {
			state.userList = state.userList.filter((user: IUser) => user.id !== payload.id);
		},
		toggleUserStatus: (state: IUserState, payload: IUser) => {
			const user = state.userList.find((user: IUser) => user.id === payload.id);
			const id = state.userList.findIndex((user: IUser) => user.id === payload.id);
			if (user) {
				user.status = user.status === 'active' ? 'inactive' : 'active';
				state.userList[id].status = user.status;
			}
		}
	}
});
