import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TicketModel } from './ticket.entity';

@Entity('user')
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => TicketModel, (ticket) => ticket.user)
  tickets?: TicketModel[];
}
