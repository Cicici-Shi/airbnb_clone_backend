import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Detail } from './detail.entity';

@Entity('picture')
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Detail, (detail) => detail.pictures)
  @JoinColumn({ name: 'detailId' })
  detail: Detail;

  @Column()
  detailId: string;

  @Column('varchar', { length: 255 })
  url: string;
}
