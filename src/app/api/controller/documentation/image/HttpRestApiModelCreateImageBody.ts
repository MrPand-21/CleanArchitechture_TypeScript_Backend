import { ApiProperty } from '@nestjs/swagger';

export class HttpRestApiModelCreateImageBody {

    @ApiProperty({ type: 'string' })
    public title!: string;

    @ApiProperty({ type: 'string' })
    public imageUrl!: string;

    @ApiProperty({ type: 'number' })
    public type!: number;

}