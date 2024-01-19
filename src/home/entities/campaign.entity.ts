import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Destination } from './destination.entity';
import { Plus } from './plus.entity';
import { City } from './city.entity';

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  subtitle: string;

  @OneToMany(() => Destination, (destination) => destination.campaign)
  destinations: Destination[];

  @OneToMany(() => Plus, (plus) => plus.campaign)
  plus: Plus[];

  @OneToMany(() => City, (city) => city.campaign)
  cities: City[];
}
