import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1594856827930 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query("\
      CREATE TABLE `turix`.`user`(\
      `id` varchar(255) NOT NULL,\
      `role` int NOT NULL,\
      `firstName` varchar(255) NULL,\
      `lastName` varchar(255) NULL,\
      `email` varchar(255) NOT NULL,\
      `passwordHash` varchar(255) NOT NULL,\
      `createdAt` datetime NOT NULL,\
      `lastEditedAt` datetime NOT NULL,\
      `birthDate` datetime NULL,\
      PRIMARY KEY(`id`)\
      );\
    ");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `turix`.`user`;');
  }

}
