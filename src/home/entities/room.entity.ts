import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Destination } from './destination.entity';
import { Review } from './review.entity';
import { Picture } from './picture.entity';
import { JoinColumn } from 'typeorm';
@Entity('room')
export class Room {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @ManyToOne(() => Destination, (destination) => destination.rooms)
  @JoinColumn({ name: 'destinationId' })
  destination: Destination;

  @Column()
  destinationId: number;

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

  @OneToMany(() => Review, (review) => review.room)
  reviews: Review[];

  @OneToMany(() => Picture, (picture) => picture.room)
  pictures: Picture[];
}
