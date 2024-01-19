import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Campaign } from './campaign.entity';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column('varchar', { length: 255 })
  price: string;

  @Column('varchar', { length: 255 })
  picture_url: string;

  @ManyToOne(() => Campaign, (campaign) => campaign.cities)
  @JoinColumn({ name: 'campaignId' })
  campaign: Campaign;

  @Column()
  campaignId: string;
}
