import { Nullable } from '../../../../common/utils/CommonTypes';
export interface ICreateUserDTO {
    firstName: Nullable<string>;
    lastName: Nullable<string>;
    email: string;
    role: Nullable<number>;
    birthDate: Nullable<Date>;
    passwordHash: string;
}