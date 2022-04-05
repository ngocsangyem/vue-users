import { defineStore } from 'pinia';
import { IUserState } from '@/@types/user.interface';
import { IUser } from '../@types/user.interface';

export const useUserStore = defineStore('user', {
	state: (): IUserState => ({
		userList: [],
	}),
	getters: {
		getUsersList: (state: IUserState) => state.userList,
	},
	actions: {
		setUserList(payload: IUser[]) {
			this.userList = payload;
		},
		removeUser(payload: IUser) {
			this.userList = this.userList.filter((user: IUser) => user.id !== payload.id);
		},
		toggleUserStatus(payload: IUser) {
			const { user, id } = this.findUser(payload)
			if (user) {
				user.status = user.status === 'active' ? 'inactive' : 'active';
				this.userList[id].status = user.status;
			}
		},
		changeUsername(payload: IUser) {
			const { user, id } = this.findUser(payload);
			if (user) {
				this.userList[id].name = user.name;
			}
		},
		findUser(payload: IUser) {
			const user = this.userList.find((user: IUser) => user.id === payload.id);
			const id = this.userList.findIndex((user: IUser) => user.id === payload.id);
			
			return {
				user,
				id
			}
		}
	}
});
