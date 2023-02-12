
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { IGetUser } from '../../../../core/domain/user/abstract/DTOs/IGetUserDTO';

@Exclude()
export class GetUserDTO extends ValidatableAdapter implements IGetUser {

    @Expose()
    @IsUUID()
    public userId!: string;

    public static async new(payload: IGetUser): Promise<GetUserDTO> {
        const adapter: GetUserDTO = plainToInstance(GetUserDTO, payload);
        await adapter.validate();

        return adapter;
    }

}