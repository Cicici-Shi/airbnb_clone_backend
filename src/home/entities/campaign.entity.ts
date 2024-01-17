import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Destination } from './destination.entity'; // 假设您已经定义了 Destination 实体

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
