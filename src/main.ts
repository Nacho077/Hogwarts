import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => console.log(
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11¶1¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶1¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶¶1¶¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶¶¶1¶¶¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶¶¶¶1¶¶¶¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶111111111¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶¶111111¶¶¶1¶¶¶111111¶¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶¶1111¶¶¶¶¶¶1¶¶¶¶¶¶1111¶¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶¶111¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶111¶¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶¶111¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶111¶¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶¶1111¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶1111¶¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶¶11¶11¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶11¶11¶¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶¶11¶¶11¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶11¶¶11¶¶¶¶¶¶¶\n" +
    "¶¶¶¶¶¶11¶¶¶¶1¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶1¶¶¶¶11¶¶¶¶¶¶\n" +
    "¶¶¶¶¶11¶¶¶¶¶11¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶11¶¶¶¶¶11¶¶¶¶¶\n" +
    "¶¶¶¶11¶¶¶¶¶¶¶111¶¶¶¶¶¶1¶¶¶¶¶¶111¶¶¶¶¶¶¶11¶¶¶¶\n" +
    "¶¶¶11¶¶¶¶¶¶¶¶¶¶111¶¶¶¶1¶¶¶¶111¶¶¶¶¶¶¶¶¶¶11¶¶¶\n" +
    "¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶11111111111¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶\n" +
    "¶1111111111111111111111111111111111111111111¶"));
}
bootstrap();
