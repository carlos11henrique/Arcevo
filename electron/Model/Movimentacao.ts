import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Documento } from "./Documento";
import { Usuario } from "./Usuario";

@Entity()
export class Movimentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Documento, documento => documento.movimentacoes)
  documento: Documento;

  @ManyToOne(() => Usuario, usuario => usuario.movimentacoes)
  usuario: Usuario;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dataMovimentacao: Date;

  @Column()
  tipo: "criação" | "mudança_local" | "empréstimo" | "devolução";

  @Column({ nullable: true })
  observacao: string;
}
