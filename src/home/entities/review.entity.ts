import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Room } from './room.entity';
import { Plus } from './plus.entity';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn()
  review_id: number;

  @ManyToOne(() => Room, (room) => room.reviews)
  room: Room;

  @ManyToOne(() => Plus, (plus) => plus.reviews)
  plus: Plus;

  @Column('text')
  comments: string;

  @Column('varchar', { length: 255 })
  localized_date: string;

  @Column('varchar', { length: 255 })
  reviewer_image_url: string;
}
