import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';
import { logger } from './utils/logger'

async function bootstrap() {
  logger.info('app start')
  await CommandFactory.run(AppModule);
}
bootstrap();
