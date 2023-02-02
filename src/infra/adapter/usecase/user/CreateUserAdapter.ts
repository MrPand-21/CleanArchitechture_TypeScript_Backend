import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { UseCaseValidatableAdapter } from '../../../../core/common/usecase/UseCaseValidatableAdapter';
import { ICreateUser } from '../../../../core/domain/user/abstract/usecase/ICreateUser';

@Exclude()
export class CreateUserAdapter extends UseCaseValidatableAdapter implements ICreateUser {

    @Expose()
    birthDate!: Date;

    @Expose()
    @IsString()
    passwordHash!: string;

    @Expose()
    @IsString()
    public firstName!: string;

    @Expose()
    @IsString()
    public lastName!: string;

    @Expose()
    @IsEmail()
    public email!: string;

    @Expose()
    @IsNumber()
    public role!: number;

    public static async new(payload: ICreateUser): Promise<CreateUserAdapter> {
        const adapter: CreateUserAdapter = plainToInstance(CreateUserAdapter, payload);
        await adapter.validate();

        return adapter;
    }

}