import { MigrationInterface, QueryRunner } from 'typeorm'

export default class createOrphanages1604508094785
  implements MigrationInterface {
  name = 'createOrphanages1604508094785'

  public async up(queryRunner: QueryRunner): Promise<void> {
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
  }
}
