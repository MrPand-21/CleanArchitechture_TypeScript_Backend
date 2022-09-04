import { IsDate, IsEmail, IsEnum, isNumber, IsOptional, IsString } from "class-validator";
import { Nullable } from "../../../common/commonTypes";
import { Entity } from "../../../common/entity/entity";
import { UserRole } from "../../../common/enums";
import { CreateUserEntityPayload } from "../types";
import { compare, genSalt, hash } from "bcryptjs";

export class User extends Entity<string> {

    @IsOptional()
    @IsString()
    private firstName: Nullable<string>;

    @IsOptional()
    @IsString()
    private lastName: Nullable<string>;

    @IsEmail()
    private readonly email: string;

    @IsOptional()
    @IsEnum(UserRole)
    private readonly role: Nullable<number>;

    @IsString()
    private passwordHash: string;

    @IsDate()
    private readonly createdAt: Date;

    @IsOptional()
    @IsDate()
    private lastEditedAt: Nullable<Date>;

    @IsOptional()
    @IsDate()
    private birthDate: Nullable<Date>;

    constructor(payload: CreateUserEntityPayload) {
        super();

        this.firstName = payload.firstName;
        this.lastName = payload.lastName;
        this.email = payload.email;
        this.role = payload.role;
        this.passwordHash = payload.passwordHash;

        this.id = payload.id || undefined;
        this.createdAt = payload.createdAt || new Date();
        this.lastEditedAt = payload.lastEditedAt || null;
        this.birthDate = payload.birthDate || null;
    }

    public getFirstName(): Nullable<string> {
        return this.firstName;
    }

    public getLastName(): Nullable<string> {
        return this.lastName;
    }

    public getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getEmail(): string {
        return this.email;
    }

    public getRole(): Nullable<number> {
        return this.role;
    }

    public getPasswordHash(): string {
        return this.passwordHash;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public getlastEditedAt(): Nullable<Date> {
        return this.lastEditedAt;
    }

    public getbirthDate(): Nullable<Date> {
        return this.birthDate;
    }

    public async hashPasswordHash(): Promise<void> {

        const salt: string = await genSalt();
        this.passwordHash = await hash(this.passwordHash, salt);

        await this.validate();
    }

    public async comparePasswordHash(passwordHash: string): Promise<boolean> {
        return compare(passwordHash, this.passwordHash);
    }

    public static async new(payload: CreateUserEntityPayload): Promise<User> {
        const user: User = new User(payload);
        await user.hashPasswordHash();
        await user.validate();

        return user;
    }

}