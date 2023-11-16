import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketEntity } from './entities/ticket.entity';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto): Promise<void> {
    return await this.ticketsService.create(createTicketDto);
  }

  @Get()
  async findAll(): Promise<TicketEntity[]> {
    return await this.ticketsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TicketEntity> {
    return await this.ticketsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ): Promise<void> {
    return await this.ticketsService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.ticketsService.remove(+id);
  }
}
