import { Image } from '@core/domain/image/entity/Image';
import { Exclude, Expose, plainToClass, plainToInstance } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { ValidatableAdapter } from '../../../../core/common/persistance/ValidatableAdapter';
import { ICreateImageDTO } from '../../../../core/domain/image/abstract/DTOs/ICreateImageDTO';

@Exclude()
export class CreateImageDTO extends ValidatableAdapter implements ICreateImageDTO {

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

    public static async new(payload: ICreateImageDTO): Promise<CreateImageDTO> {
        const adapter: CreateImageDTO = plainToInstance(CreateImageDTO, payload);
        await adapter.validate();

        return adapter;
    }

}