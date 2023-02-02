import { Exclude, Expose, plainToClass, plainToInstance } from 'class-transformer';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { RepositoryFindOptions } from '../../../../core/common/persistance/RepositoryOptions';
import { UseCaseValidatableAdapter } from '../../../../core/common/usecase/UseCaseValidatableAdapter';
import { IGetImages } from '../../../../core/domain/image/abstract/usecase/IGetImages';

@Exclude()
export class GetImagesAdapter extends UseCaseValidatableAdapter implements IGetImages {

    @Expose()
    @IsOptional()
    public options!: RepositoryFindOptions;

    @Expose()
    @IsOptional()
    @IsUUID()
    public parentId!: string;


    public static async new(payload: IGetImages): Promise<GetImagesAdapter> {
        const adapter: GetImagesAdapter = plainToInstance(GetImagesAdapter, payload);
        await adapter.validate();

        return adapter;
    }

}