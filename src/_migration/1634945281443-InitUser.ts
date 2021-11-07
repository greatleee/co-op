import {MigrationInterface, QueryRunner} from "typeorm";

export class InitUser1634945281443 implements MigrationInterface {
    name = 'InitUser1634945281443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "discordId" character varying(24) NOT NULL, "email" character varying(50) NOT NULL, "username" character varying(30) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
