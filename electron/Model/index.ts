import "reflect-metadata"; 
import { DataSource } from "typeorm";
import { Categoria } from "./Categoria";
import { Local } from "./Local";
import { Usuario } from "./Usuario";
import { Documento } from "./Documento";
import { Movimentacao } from "./Movimentacao";

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
