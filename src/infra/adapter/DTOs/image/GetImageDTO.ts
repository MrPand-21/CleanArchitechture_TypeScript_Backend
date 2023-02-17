import { IsString } from 'class-validator';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { IGetImageDTO } from '../../../../core/domain/image/abstract/DTOs/IGetImageDTO';

@Exclude()
export class GetImageDTO extends ValidatableAdapter implements IGetImageDTO {

    @Expose()
    @IsString()
    // add custom is id decorator here
    public imageId!: string;

    public static async new(payload: IGetImageDTO): Promise<GetImageDTO> {
        const adapter: GetImageDTO = plainToInstance(GetImageDTO, payload);
        await adapter.validate();

        return adapter;
    }

}