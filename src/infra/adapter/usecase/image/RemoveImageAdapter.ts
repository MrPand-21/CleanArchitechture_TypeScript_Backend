import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { UseCaseValidatableAdapter } from '../../../../core/common/usecase/UseCaseValidatableAdapter';
import { IRemoveImage } from '../../../../core/domain/image/abstract/usecase/IRemoveImage';

@Exclude()
export class RemoveImageAdapter extends UseCaseValidatableAdapter implements IRemoveImage {

    @Expose()
    @IsUUID()
    imageId!: string;

    public static async new(payload: IRemoveImage): Promise<RemoveImageAdapter> {
        const adapter: RemoveImageAdapter = plainToInstance(RemoveImageAdapter, payload);
        await adapter.validate();

        return adapter;
    }

}