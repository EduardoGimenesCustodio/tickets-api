import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventModel } from './event.entity';

@Entity('institution')
export class InstitutionModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => EventModel, (event) => event.institution)
  events?: EventModel[];
}
