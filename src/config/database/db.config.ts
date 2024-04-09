import { SequelizeModule } from '@nestjs/sequelize';

export const databaseProviders = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.HOST,
  port: 5435,
  username: process.env.USER_DB,
  password: process.env.PAS_DB,
  database: 'testNeew',
  autoLoadModels: true,
  synchronize: true,
});
