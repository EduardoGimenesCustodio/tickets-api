import { EventEntity } from '../entities/event.entity';

export class CreateEventDto implements Omit<EventEntity, 'id'> {
  name: string;
  description: string;
  data: Date;
  tickets_available: number;
  institution_id: number;
}
