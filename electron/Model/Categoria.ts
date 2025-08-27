import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Documento } from "./Documento";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @OneToMany(() => Documento, documento => documento.categoria)
  documentos: Documento[];

  
}
