import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Destination } from './destination.entity';

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
}
