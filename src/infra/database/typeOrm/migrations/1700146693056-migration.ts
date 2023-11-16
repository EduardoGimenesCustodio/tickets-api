import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700146693056 implements MigrationInterface {
    name = 'Migration1700146693056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "institution" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "institution" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "institution" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institution" ADD "email" character varying NOT NULL`);
    }

}
