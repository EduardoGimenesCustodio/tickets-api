import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketModel } from 'src/infra/database/typeOrm/models/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TicketModel])],
  exports: [TypeOrmModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
