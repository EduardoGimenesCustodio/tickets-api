import { InstitutionEntity } from '../entities/institution.entity';

export class CreateInstitutionDto implements Omit<InstitutionEntity, 'id'> {
  name: string;
}
