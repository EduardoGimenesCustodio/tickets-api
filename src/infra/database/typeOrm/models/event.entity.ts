import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InstitutionModel } from './institution.entity';
import { TicketModel } from './ticket.entity';

@Entity('event')
export class EventModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  tickets_available: number;

  @Column()
  institution_id: number;

  @ManyToOne(() => InstitutionModel, (institution) => institution.events, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  institution?: InstitutionModel;

  @OneToMany(() => TicketModel, (ticket) => ticket.event)
  tickets?: TicketModel[];
}
