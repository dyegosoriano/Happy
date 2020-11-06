module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'happy',
  synchronize: false,
  logging: false,
  migrations: ['src/database/migrations/*.{js,ts}'],
  entities: ['src/app/models/*.{js,ts}'],
  cli: {
    migrationsDir: [`src/database/migrations/`],
    entitiesDir: [`src/app/models/`],
  },
}
