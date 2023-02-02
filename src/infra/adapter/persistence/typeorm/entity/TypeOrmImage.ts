import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('image')
export class TypeOrmImage {

    @PrimaryColumn()
    public id!: string;

    @Column()
    public parentId!: string;

    @Column()
    public title!: string;

    @Column()
    public createdAt!: Date;

    @Column()
    public type!: number;

    @Column()
    public imageUrl!: string;

}