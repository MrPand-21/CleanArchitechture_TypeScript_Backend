import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { IGetImage } from '../../../../core/domain/image/abstract/DTOs/IGetImageDTO';

@Exclude()
export class GetImageDTO extends ValidatableAdapter implements IGetImage {

    @Expose()
    @IsUUID()
    public imageId!: string;

    public static async new(payload: IGetImage): Promise<GetImageDTO> {
        const adapter: GetImageDTO = plainToInstance(GetImageDTO, payload);
        await adapter.validate();

        return adapter;
    }

}