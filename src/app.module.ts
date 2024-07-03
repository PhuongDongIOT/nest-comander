import { Module } from '@nestjs/common'
import { GetDateCommand } from './modules/get-date.command'

@Module({
  imports: [],
  controllers: [],
  providers: [GetDateCommand],
})
export class AppModule { }
