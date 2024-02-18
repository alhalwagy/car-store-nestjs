import { Report } from 'src/reports/report.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInster() {
    console.log('Inserter user' + this.id);
  }

  @AfterUpdate()
  logupdate() {
    console.log('Updated user' + this.id);
  }

  @AfterRemove()
  logremove() {
    console.log('Removed user' + this.id);
  }
}
