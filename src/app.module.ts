import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverProfitModule } from './profits/driver-profit.module';

@Module({
  imports: [DriverProfitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
