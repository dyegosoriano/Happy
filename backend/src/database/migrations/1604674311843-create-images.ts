import { MigrationInterface, QueryRunner } from 'typeorm'

export default class createImages1604674311843 implements MigrationInterface {
  name = 'createImages1604674311843'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "path" character varying NOT NULL, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "orphanages" ALTER COLUMN "latitude" TYPE numeric`,
    )
    await queryRunner.query(`COMMENT ON COLUMN "orphanages"."latitude" IS NULL`)
    await queryRunner.query(
      `ALTER TABLE "orphanages" ALTER COLUMN "longitude" TYPE numeric`,
    )
    await queryRunner.query(
      `COMMENT ON COLUMN "orphanages"."longitude" IS NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `COMMENT ON COLUMN "orphanages"."longitude" IS NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "orphanages" ALTER COLUMN "longitude" TYPE numeric`,
    )
    await queryRunner.query(`COMMENT ON COLUMN "orphanages"."latitude" IS NULL`)
    await queryRunner.query(
      `ALTER TABLE "orphanages" ALTER COLUMN "latitude" TYPE numeric`,
    )
    await queryRunner.query(`DROP TABLE "images"`)
  }
}
