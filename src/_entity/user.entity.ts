import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 24 })
  discordId: string;

  @Column('varchar', { length: 50 })
  email: string;

  @Column('varchar', { length: 30 })
  username: string;

  @Column({ default: true })
  isActive: boolean;
}
