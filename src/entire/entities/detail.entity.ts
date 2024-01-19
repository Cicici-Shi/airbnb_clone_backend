import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Review } from '../../home/entities/review.entity';
import { Picture } from './picture.entity';
@Entity('detail')
export class Detail {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

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

  @OneToMany(() => Review, (review) => review.detail)
  reviews: Review[];

  @OneToMany(() => Picture, (picture) => picture.detail)
  pictures: Picture[];
}
