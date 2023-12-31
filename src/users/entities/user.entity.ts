import { TicketEntity } from 'src/tickets/entities/ticket.entity';

export class UserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  tickets?: TicketEntity[];
}
