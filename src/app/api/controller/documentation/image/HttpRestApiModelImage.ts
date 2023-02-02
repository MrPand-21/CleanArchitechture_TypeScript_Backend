import { ApiProperty } from '@nestjs/swagger';

export class HttpRestApiModelImage {

    @ApiProperty({ type: 'string' })
    public id!: string;

    @ApiProperty({ type: "string" })
    public imageUrl!: string;

    @ApiProperty({ type: 'string' })
    public title!: string;

    @ApiProperty({ type: 'string' })
    public parentId!: string;

    @ApiProperty({ type: 'number' })
    public createdAt!: number;

    @ApiProperty({ type: 'number' })
    public type!: number;

}