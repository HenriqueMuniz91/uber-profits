import { Module } from '@nestjs/common';
import { SaveProfitsController } from './use-cases/save-profits/save-profits.controller';
import { GetProfitsController } from './use-cases/get-profits/get-profits.controller';
import { ProfitsRepository } from './repositories/profits.repository';

@Module({
    imports: [],
    controllers: [SaveProfitsController, GetProfitsController],
    providers: [ProfitsRepository],
    })

export class DriverProfitModule {}