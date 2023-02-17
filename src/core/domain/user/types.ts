import { Nullable } from "../../common/utils/CommonTypes";
import { UserRole } from "../../common/utils/Enums";

export type EditUserEntityPayload = {
    firstName?: string,
    lastName?: string,
};

export type CreateUserEntityPayload = {
    id?: string,
    role: Nullable<number>,
    firstName?: Nullable<string>,
    lastName?: Nullable<string>,
    birthDate?: Nullable<Date>,
    email: string,
    passwordHash: string,
    createdAt?: Date,
    lastEditedAt?: Date,
};