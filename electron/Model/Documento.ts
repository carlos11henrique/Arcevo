import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Categoria } from "./Categoria";
import { Local } from "./Local";
import { Movimentacao } from "./Movimentacao";

@Entity()
export class Documento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ unique: true })
  codigo: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ type: "date", nullable: true })
  dataCriacao: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dataRegistro: Date;

  @Column({ default: "ativo" })
  status: "ativo" | "arquivado" | "emprestado" | "perdido";

  @ManyToOne(() => Categoria, categoria => categoria.documentos)
  categoria: Categoria;

  @ManyToOne(() => Local, local => local.documentos)
  local: Local;

  @OneToMany(() => Movimentacao, movimentacao => movimentacao.documento)
  movimentacoes: Movimentacao[];
}
