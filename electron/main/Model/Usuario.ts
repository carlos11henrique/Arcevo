import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Movimentacao } from "./Movimentacao";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  senha!: string;

  @Column({ default: "comum" })
  tipo!: "admin" | "comum";

  @Column({ default: "ativo" })
  status!: "ativo" | "bloqueado";

  @OneToMany(() => Movimentacao, movimentacao => movimentacao.usuario)
  movimentacoes!: Movimentacao[];
}
