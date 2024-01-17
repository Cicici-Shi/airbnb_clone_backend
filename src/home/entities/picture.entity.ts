import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Room } from './room.entity';

@Entity('picture')
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, (room) => room.pictures)
  room: Room;

  @Column('varchar', { length: 255 })
  picture_url: string;
}
