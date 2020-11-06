import { MigrationInterface, QueryRunner } from 'typeorm'

export default class addFieldRelationOneTwoMany1604674473283
  implements MigrationInterface {
  name = 'addFieldRelationOneTwoMany1604674473283'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "images" ADD "orphanage_id" uuid`)
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
    await queryRunner.query(
      `ALTER TABLE "images" ADD CONSTRAINT "FK_aa7e04fdd620f748adad5b96bbb" FOREIGN KEY ("orphanage_id") REFERENCES "orphanages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "images" DROP CONSTRAINT "FK_aa7e04fdd620f748adad5b96bbb"`,
    )
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
    await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "orphanage_id"`)
  }
}
