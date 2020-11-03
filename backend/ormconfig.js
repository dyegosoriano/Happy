module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'happy',
  synchronize: true,
  logging: false,
  migrations: ['src/app/database/migration/**/*.{js,ts}'],
  subscribers: ['src/app/subscriber/**/*.{js,ts}'],
  entities: ['src/app/models/**/*.{js,ts}'],
  cli: {
    migrationsDir: [`src/database/migrations/`],
    entitiesDir: [`src/app/models/`],
  },
}
