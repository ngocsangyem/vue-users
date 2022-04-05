import { v4 as uuidv4 } from 'uuid';
import { IUser } from '@/@types/user.interface';

export const mapUsers = (users: Exclude<IUser, 'status'>[]) => {
	return users.map((user: IUser) => ({
		...user,
		name: `${user.first_name} ${user.last_name}`,
		id: uuidv4(),
		status: 'active',
	}));
};
