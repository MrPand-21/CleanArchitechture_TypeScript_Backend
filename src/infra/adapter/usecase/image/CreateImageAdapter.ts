import { Exclude, Expose, plainToClass, plainToInstance } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { UseCaseValidatableAdapter } from '../../../../core/common/usecase/UseCaseValidatableAdapter';
import { ICreateImage } from '../../../../core/domain/image/abstract/usecase/ICreateImage';

@Exclude()
export class CreateImageAdapter extends UseCaseValidatableAdapter implements ICreateImage {

    @Expose()
    @IsString()
    public title!: string;

    @Expose()
    @IsNumber()
    public type!: number;


    @Expose()
    public parentId!: string;

    @Expose()
    @IsString()
    public imageUrl!: string;

    public static async new(payload: ICreateImage): Promise<CreateImageAdapter> {
        const adapter: CreateImageAdapter = plainToInstance(CreateImageAdapter, payload);
        await adapter.validate();

        return adapter;
    }

}