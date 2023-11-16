import { TicketEntity } from 'src/tickets/entities/ticket.entity';

export class EventEntity {
  id: number;
  name: string;
  description: string;
  data: Date;
  tickets_available: number;
  institution_id: number;
  tickets?: TicketEntity[];
}
