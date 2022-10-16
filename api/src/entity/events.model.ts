
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

import {
  validate,
  validateOrReject,
  IsEmail,
  IsDate,
} from 'class-validator';


@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @IsDate()
  @Column()
  date: Date;


}