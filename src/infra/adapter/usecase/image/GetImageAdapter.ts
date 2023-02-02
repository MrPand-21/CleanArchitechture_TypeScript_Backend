import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { UseCaseValidatableAdapter } from '../../../../core/common/usecase/UseCaseValidatableAdapter';
import { IGetImage } from '../../../../core/domain/image/abstract/usecase/IGetImage';

@Exclude()
export class GetImageAdapter extends UseCaseValidatableAdapter implements IGetImage {

    @Expose()
    @IsUUID()
    public imageId!: string;

    public static async new(payload: IGetImage): Promise<GetImageAdapter> {
        const adapter: GetImageAdapter = plainToInstance(GetImageAdapter, payload);
        await adapter.validate();

        return adapter;
    }

}