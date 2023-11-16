import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { DataSource } from 'typeorm';
import { InstitutionEntity } from './entities/institution.entity';
import { InstitutionModel } from 'src/infra/database/typeOrm/models/institution.entity';

@Injectable()
export class InstitutionsService {
  constructor(private dataSource: DataSource) {}

  async create(createInstitutionDto: CreateInstitutionDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.insert(InstitutionModel, createInstitutionDto);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<InstitutionEntity[]> {
    let institutions: InstitutionEntity[];

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      institutions = await queryRunner.manager.find(InstitutionModel);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();

      return institutions;
    }
  }

  async findOne(id: number): Promise<InstitutionEntity> {
    let institution: InstitutionEntity;

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      institution = await queryRunner.manager.findOne(InstitutionModel, {
        where: { id },
      });

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();

      return institution;
    }
  }

  async update(
    id: number,
    updateInstitutionDto: UpdateInstitutionDto,
  ): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.update(
        InstitutionModel,
        id,
        updateInstitutionDto,
      );

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
      const institution = await queryRunner.manager.findOne(InstitutionModel, {
        where: { id },
      });
      await queryRunner.manager.remove(institution);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new Error(err);
    } finally {
      await queryRunner.release();
    }
  }
}
