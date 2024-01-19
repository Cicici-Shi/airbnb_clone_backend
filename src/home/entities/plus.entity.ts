import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Review } from './review.entity';
import { Campaign } from './campaign.entity';
import { JoinColumn } from 'typeorm';
@Entity('plus')
export class Plus {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @ManyToOne(() => Campaign, (campaign) => campaign.plus)
  @JoinColumn({ name: 'campaignId' })
  campaign: Campaign;

  @Column({ type: 'varchar' })
  campaignId: string;

  @Column('varchar', { length: 255 })
  picture_url: string;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('int', { nullable: true })
  star_rating: number;

  @Column('int')
  reviews_count: number;

  @Column('decimal', { precision: 8, scale: 6 })
  lat: number;

  @Column('decimal', { precision: 9, scale: 6 })
  lng: number;

  @Column('text')
  verify_info: string;

  @OneToMany(() => Review, (review) => review.plus)
  reviews: Review[];
}
