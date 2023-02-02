import { ApiProperty } from '@nestjs/swagger';
export class HttpRestApiModelCreateUserBody {

    @ApiProperty({ type: 'string' })
    public firstName!: string;

    @ApiProperty({ type: 'string', required: false })
    public lastName: string | undefined;

    @ApiProperty({ type: 'string' })
    public email!: string;

    @ApiProperty({ type: 'integer' })
    public role!: number;

    @ApiProperty({ type: 'string' })
    public passwordHash!: string;

    @ApiProperty({ type: 'date', required: false })
    public birthDate: Date | undefined;

}