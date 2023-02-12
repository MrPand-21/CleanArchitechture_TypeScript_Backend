import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { IRemoveImageDTO } from '../../../../core/domain/image/abstract/DTOs/IRemoveImageDTO';

@Exclude()
export class RemoveImageDTO extends ValidatableAdapter implements IRemoveImageDTO {

    @Expose()
    @IsUUID()
    imageId!: string;

    public static async new(payload: IRemoveImageDTO): Promise<RemoveImageDTO> {
        const adapter: RemoveImageDTO = plainToInstance(RemoveImageDTO, payload);
        await adapter.validate();

        return adapter;
    }

}