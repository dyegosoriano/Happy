const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist'

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SINCRONIZE === 'true' ? true : false,
  logging: false,
  migrations: [`${rootDir}/database/migrations/*.{js,ts}`],
  entities: [`${rootDir}/app/models/*.{js,ts}`],
  cli: {
    migrationsDir: [`src/database/migrations/`],
    entitiesDir: [`src/app/models/`],
  },
}
