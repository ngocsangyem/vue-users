export interface IUser {
	id: string;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
	status: string;
	name: string;
}

export interface  IUserState {
	userList: IUser[];
}
