
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { UseCaseValidatableAdapter } from '../../../../core/common/usecase/UseCaseValidatableAdapter';
import { IGetUser } from '../../../../core/domain/user/abstract/usecase/IGetUser';

@Exclude()
export class GetUserAdapter extends UseCaseValidatableAdapter implements IGetUser {

    @Expose()
    @IsUUID()
    public userId!: string;

    public static async new(payload: IGetUser): Promise<GetUserAdapter> {
        const adapter: GetUserAdapter = plainToInstance(GetUserAdapter, payload);
        await adapter.validate();

        return adapter;
    }

}