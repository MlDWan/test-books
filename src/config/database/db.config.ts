import { SequelizeModule } from '@nestjs/sequelize';

export const databaseProviders = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.USER_DB,
  password: process.env.PAS_DB,
  database: process.env.DB,
  autoLoadModels: true,
  synchronize: true,
});
