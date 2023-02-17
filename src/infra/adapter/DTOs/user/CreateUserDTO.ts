import { IsOptional } from 'class-validator';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { ICreateUserDTO } from '../../../../core/domain/user/abstract/DTOs/ICreateUserDTO';

@Exclude()
export class CreateUserDTO extends ValidatableAdapter implements ICreateUserDTO {

    @Expose()
    @IsOptional()
    birthDate: Date;

    @Expose()
    @IsString()
    passwordHash!: string;

    @Expose()
    @IsOptional()
    @IsString()
    public firstName: string;

    @Expose()
    @IsString()
    @IsOptional()
    public lastName: string;

    @Expose()
    @IsEmail()
    public email!: string;

    @Expose()
    @IsNumber()
    public role!: number;

    public static async new(payload: ICreateUserDTO): Promise<CreateUserDTO> {
        const adapter: CreateUserDTO = plainToInstance(CreateUserDTO, payload);
        await adapter.validate();

        return adapter;
    }

}