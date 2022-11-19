import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1668619275952 implements MigrationInterface {
    name = 'initialMigration1668619275952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("transaction_id" uuid NOT NULL, "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "debitedAccountAccountId" uuid, "creditedAccountAccountId" uuid, CONSTRAINT "PK_6e02e5a0a6a7400e1c944d1e946" PRIMARY KEY ("transaction_id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("user_id" uuid NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "account" uuid, CONSTRAINT "REL_4ab2df0a57a74fdf904e0e2708" UNIQUE ("account"), CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("account_id" uuid NOT NULL, "balance" double precision NOT NULL, CONSTRAINT "PK_ea08b54a9d7322975ffc57fc612" PRIMARY KEY ("account_id"))`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_bbbfcdb3330cc4e5846f2d23200" FOREIGN KEY ("debitedAccountAccountId") REFERENCES "account"("account_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_4ece0117a7c2689832bab37209b" FOREIGN KEY ("creditedAccountAccountId") REFERENCES "account"("account_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4ab2df0a57a74fdf904e0e27086" FOREIGN KEY ("account") REFERENCES "account"("account_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4ab2df0a57a74fdf904e0e27086"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_4ece0117a7c2689832bab37209b"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_bbbfcdb3330cc4e5846f2d23200"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
