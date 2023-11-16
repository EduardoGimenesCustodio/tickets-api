import { EventEntity } from 'src/events/entities/event.entity';

export class Institution {
  id: number;
  name: string;
  email: string;
  password: string;
  events?: EventEntity[];
}
