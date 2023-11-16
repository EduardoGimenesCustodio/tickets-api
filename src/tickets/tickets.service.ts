import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { DataSource } from 'typeorm';
import { TicketEntity } from './entities/ticket.entity';
import { TicketModel } from 'src/infra/database/typeOrm/models/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(private dataSource: DataSource) {}

  async create(createTicketDto: CreateTicketDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.insert(TicketModel, createTicketDto);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<TicketEntity[]> {
    let tickets: TicketEntity[];

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      tickets = await queryRunner.manager.find(TicketModel);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();

      return tickets;
    }
  }

  async findOne(id: number): Promise<TicketEntity> {
    let ticket: TicketEntity;

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      ticket = await queryRunner.manager.findOne(TicketModel, {
        where: { id },
      });

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();

      return ticket;
    }
  }

  async update(id: number, updateTicketDto: UpdateTicketDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.update(TicketModel, id, updateTicketDto);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const ticket = await queryRunner.manager.findOne(TicketModel, {
        where: { id },
      });
      await queryRunner.manager.remove(ticket);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();
    }
  }
}
