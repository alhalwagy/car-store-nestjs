import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

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
