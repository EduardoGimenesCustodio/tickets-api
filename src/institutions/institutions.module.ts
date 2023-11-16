import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionModel } from 'src/infra/database/typeOrm/models/institution.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstitutionModel])],
  exports: [TypeOrmModule],
  controllers: [InstitutionsController],
  providers: [InstitutionsService],
})
export class InstitutionsModule {}
