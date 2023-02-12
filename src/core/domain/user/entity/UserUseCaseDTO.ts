import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { User } from './User';

@Exclude()
export class UserUseCaseDto {

    @Expose()
    public id!: string;

    @Expose()
    public firstName?: string;

    @Expose()
    public lastName?: string;

    @Expose()
    public birthDate?: Date;

    @Expose()
    public email!: string;

    @Expose()
    public role?: number;

    public static newFromUser(user: User): UserUseCaseDto {
        return plainToInstance(UserUseCaseDto, user);
    }

    public static newListFromUsers(users: User[]): UserUseCaseDto[] {
        return users.map(user => this.newFromUser(user));
    }

}