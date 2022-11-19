import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Account } from "./accounts.entity";

@Entity()
export class Transaction {
  @PrimaryColumn("uuid")
  readonly transaction_id: string;

  @ManyToOne((type) => Account, (accounts) => Account, { eager: true })
  @JoinColumn()
  debitedAccount: Account;

  @ManyToOne((type) => Account, (accounts) => Account, { eager: true })
  @JoinColumn()
  creditedAccount: Account;

  @Column({ type: "decimal" })
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.transaction_id) {
      this.transaction_id = uuid();
    }
  }
}
