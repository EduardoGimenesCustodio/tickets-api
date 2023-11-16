import { EventEntity } from 'src/events/entities/event.entity';

export class InstitutionEntity {
  id: number;
  name: string;
  events?: EventEntity[];
}
