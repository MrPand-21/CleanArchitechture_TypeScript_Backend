
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { IGetUserDTO } from '../../../../core/domain/user/abstract/DTOs/IGetUserDTO';

@Exclude()
export class GetUserDTO extends ValidatableAdapter implements IGetUserDTO {

    @Expose()
    //add is custom id decorator here
    @IsString()
    @IsOptional()
    public userId?: string;

    @Expose()
    @IsString()
    @IsOptional()
    public email?: string;


    public static async new(payload: IGetUserDTO): Promise<GetUserDTO> {

        const adapter: GetUserDTO = plainToInstance(GetUserDTO, payload);
        await adapter.validate();

        return adapter;
    }

}