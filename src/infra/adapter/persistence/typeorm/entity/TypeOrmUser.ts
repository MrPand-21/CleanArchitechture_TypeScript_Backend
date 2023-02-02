import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UserRole } from '../../../../../core/common/enums';

@Entity('user')
export class TypeOrmUser {

    @PrimaryColumn()
    public id!: string;

    @Column()
    public firstName!: string;

    @Column()
    public lastName!: string;

    @Column()
    public email!: string;

    @Column()
    public role!: number;

    @Column()
    public passwordHash!: string;

    @Column()
    public createdAt!: Date;

    @Column()
    public lastEditedAt!: Date;

    @Column()
    public birthDate!: Date;

}