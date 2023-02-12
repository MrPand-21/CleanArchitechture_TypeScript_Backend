import { Exclude, Expose, plainToClass, plainToInstance } from 'class-transformer';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { RepositoryFindOptions } from '../../../../core/common/persistance/RepositoryOptions';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { IGetImagesDTO } from '../../../../core/domain/image/abstract/DTOs/IGetImagesDTO';

@Exclude()
export class GetImagesDTO extends ValidatableAdapter implements IGetImagesDTO {

    @Expose()
    @IsOptional()
    public options!: RepositoryFindOptions;

    @Expose()
    @IsOptional()
    @IsUUID()
    public parentId!: string;


    public static async new(payload: IGetImagesDTO): Promise<GetImagesDTO> {
        const adapter: GetImagesDTO = plainToInstance(GetImagesDTO, payload);
        await adapter.validate();

        return adapter;
    }

}