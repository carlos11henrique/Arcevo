import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Documento } from "./Documento";

@Entity()
export class Local {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  tipo!: string;

  @Column({ nullable: true, type: 'text' })
  descricao!: string;

  @ManyToOne(() => Local, local => local.subLocais, { nullable: true, eager: false })
  pai!: Local;

  @OneToMany(() => Local, local => local.pai, { eager: false })
  subLocais!: Local[];

  @OneToMany(() => Documento, documento => documento.local, { eager: false })
  documentos!: Documento[];
}