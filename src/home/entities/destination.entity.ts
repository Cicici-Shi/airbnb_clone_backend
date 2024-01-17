import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Campaign } from './campaign.entity';
import { Room } from './room.entity';

@Entity('destinations')
export class Destination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => Campaign, (campaign) => campaign.destinations)
  campaign: Campaign;

  @OneToMany(() => Room, (room) => room.destination) // This is the other side of the Room-Destination relationship
  rooms: Room[];
}
