import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UserRole } from '../../../../../core/common/utils/Enums';

@Entity('user')
export class TypeOrmUser {

    @PrimaryColumn({
        type: 'varchar',
        length: 255,
        unique: true,
    })
    public id!: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public firstName!: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public lastName!: string;

    @Column({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: false,
    })
    public email!: string;

    @Column({
        type: 'int',
        nullable: false,
    })
    public role!: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    public passwordHash!: string;

    @Column({
        type: 'datetime',
        nullable: false,
    })
    public createdAt!: Date;

    @Column({
        type: 'datetime',
        nullable: false,
    })
    public lastEditedAt!: Date;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    public birthDate!: Date;

}