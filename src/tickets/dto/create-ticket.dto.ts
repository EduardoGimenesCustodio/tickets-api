import { TicketEntity } from '../entities/ticket.entity';

export class CreateTicketDto implements Omit<TicketEntity, 'id'> {
  user_id: number;
  event_id: number;
}
