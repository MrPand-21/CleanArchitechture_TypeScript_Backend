import { IsString } from 'class-validator';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { IRemoveImageDTO } from '../../../../core/domain/image/abstract/DTOs/IRemoveImageDTO';

@Exclude()
export class RemoveImageDTO extends ValidatableAdapter implements IRemoveImageDTO {

    @Expose()
    @IsString()
    // add is custom id decorator
    imageId!: string;

    public static async new(payload: IRemoveImageDTO): Promise<RemoveImageDTO> {
        const adapter: RemoveImageDTO = plainToInstance(RemoveImageDTO, payload);
        await adapter.validate();

        return adapter;
    }

}