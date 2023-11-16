import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModel } from 'src/infra/database/typeOrm/models/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventModel])],
  exports: [TypeOrmModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
