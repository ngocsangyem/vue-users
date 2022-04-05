import { IUser } from './user.interface';

export interface IResponse {
	page: number;
	par_page: number;
	total: number;
	total_pages: number;
	data: Exclude<IUser, 'status'>[]
}
