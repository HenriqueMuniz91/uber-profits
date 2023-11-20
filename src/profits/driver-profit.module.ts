import { Module } from '@nestjs/common';
import { SaveProfitsController } from './use-cases/save-profits/save-profits.controller';
import { GetProfitsController } from './use-cases/get-profits/get-profits.controller';
import { ProfitsRepository } from './repositories/profits.repository';
import { GetSumProfitsController } from './use-cases/get-sum-profits/get-sum-profits.controller';

@Module({
  imports: [],
  controllers: [
    SaveProfitsController,
    GetProfitsController,
    GetSumProfitsController,
  ],
  providers: [ProfitsRepository],
})

export class DriverProfitModule {};