import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InstitutionEntity } from './entities/institution.entity';

@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  async create(
    @Body() createInstitutionDto: CreateInstitutionDto,
  ): Promise<void> {
    return await this.institutionsService.create(createInstitutionDto);
  }

  @Get()
  async findAll(): Promise<InstitutionEntity[]> {
    return await this.institutionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<InstitutionEntity> {
    return await this.institutionsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInstitutionDto: UpdateInstitutionDto,
  ): Promise<void> {
    return await this.institutionsService.update(+id, updateInstitutionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.institutionsService.remove(+id);
  }
}
