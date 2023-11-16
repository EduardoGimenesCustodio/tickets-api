import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserModel } from './user.entity';
import { EventModel } from './event.entity';

@Entity('ticket')
export class TicketModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => UserModel, (user) => user.tickets, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user?: UserModel;

  @Column()
  event_id: number;

  @ManyToOne(() => EventModel, (event) => event.tickets, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  event?: EventModel;
}
