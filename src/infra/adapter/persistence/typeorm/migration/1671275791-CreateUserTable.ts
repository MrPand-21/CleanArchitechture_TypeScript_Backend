import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1594856827930 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query("\
      CREATE TABLE `turix`.`user`(\
        `id`        VARCHAR(90) PRIMARY KEY,\
        `firstName` VARCHAR(100) NULL,\
        `lastName`  VARCHAR(100) NULL,\
        `email`     VARCHAR(100),\
        `role`      INT NULL,\
        `passwordHash`  VARCHAR(200),\
        `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,\
        `lastEditedAt`  TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,\
        `birthDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP\
      );\
    ");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `turix`.`user`;');
  }

}
