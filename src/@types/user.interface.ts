export interface IUser {
	id: number,
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
	status: string;
}

export interface  IUserState {
	userList: IUser[];
}
