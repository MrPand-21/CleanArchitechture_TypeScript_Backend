import { ApiProperty } from '@nestjs/swagger';

export class HttpRestApiModelGetImagesQuery {
    @ApiProperty({ type: 'string', required: false })
    public parentId: string | undefined;
}