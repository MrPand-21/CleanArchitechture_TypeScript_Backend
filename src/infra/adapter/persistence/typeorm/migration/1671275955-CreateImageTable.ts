import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateImageTable1594769206476 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query("\
      CREATE TABLE `turix`.`image` (\
        `id`           VARCHAR(90)  NOT NULL,\
        `parentId`      VARCHAR(90) NULL,\
        `title`         VARCHAR(100) NULL,\
        `type`         INT NULL,\
        `imageUrl` VARCHAR(200) NULL,\
        `createdAt`    TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,\
        PRIMARY KEY (`id`)\
      );\
    ");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `turix`.`image`;');
  }

}
