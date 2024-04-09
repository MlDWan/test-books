import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;

  await app.listen(PORT ? PORT : 5000, () => console.log(`start ${PORT}....`));
}
bootstrap();
