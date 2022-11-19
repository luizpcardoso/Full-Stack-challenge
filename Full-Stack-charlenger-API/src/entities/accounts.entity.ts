import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Transaction } from "./transactions.entity";
import { User } from "./user.entity";

@Entity()
export class Account {
  @PrimaryColumn("uuid")
  readonly account_id: string;

  @Column({
    type: "float",
    nullable: false,
    readonly: false,
  })
  balance: number;

  @OneToOne((type) => User)
  user: User;

  @OneToMany((type) => Transaction, (debitedAccount) => Transaction)
  transactionsDebit: Transaction[];

  @OneToMany((type) => Transaction, (creditedAccount) => Transaction)
  transactionsCredit: Transaction[];

  constructor() {
    if (!this.account_id) {
      this.account_id = uuid();
    }
  }
}
