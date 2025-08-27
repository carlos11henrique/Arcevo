import "reflect-metadata";
import { DataSource } from "typeorm";
import { Categoria } from "./Model/Categoria";
import { Local } from "./Model/Local";
import { Usuario } from "./Model/Usuario";
import { Documento } from "./Model/Documento";
import { Movimentacao } from "./Model/Movimentacao";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "senha",
  database: "acervo_db",
  synchronize: true,
  logging: false,
  entities: [Categoria, Local, Usuario, Documento, Movimentacao],
});