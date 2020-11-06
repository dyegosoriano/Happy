import { MigrationInterface, QueryRunner } from 'typeorm'

export default class createOrphanages1604673805255
  implements MigrationInterface {
  name = 'createOrphanages1604673805255'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "orphanages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "latitude" numeric NOT NULL, "longitude" numeric NOT NULL, "about" character varying NOT NULL, "instructions" character varying NOT NULL, "opening_hours" character varying NOT NULL, "open_on_weekends" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_dc77fdeb165b9be655be022b719" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "orphanages"`)
  }
}
