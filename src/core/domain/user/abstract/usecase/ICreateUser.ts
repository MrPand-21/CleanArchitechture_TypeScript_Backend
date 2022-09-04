import { Nullable } from './../../../../common/commonTypes';
export interface ICreateUser {
    firstName: Nullable<string>;
    lastName: Nullable<string>;
    email: string;
    role: Nullable<number>;
    birthDate: Nullable<Date>;
    passwordHash: string;
}