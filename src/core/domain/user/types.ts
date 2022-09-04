import { Nullable } from "../../common/commonTypes";
import { UserRole } from "../../common/enums";

export type EditUserEntityPayload = {
    firstName?: string,
    lastName?: string,
};

export type CreateUserEntityPayload = {
    id?: string,
    role: Nullable<number>,
    firstName: Nullable<string>,
    lastName: Nullable<string>,
    birthDate: Nullable<Date>,
    email: string,
    passwordHash: string,
    createdAt?: Date,
    lastEditedAt?: Date,
};