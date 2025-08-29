import "reflect-metadata"; 
import { DataSource } from "typeorm";
import { Categoria } from "./Categoria";
import { Local } from "./Local";
import { Usuario } from "./Usuario";
import { Documento } from "./Documento";
import { Movimentacao } from "./Movimentacao";

// Configuração da conexão
export const AppDataSource = new DataSource({
  type: "mysql",          
  host: "localhost",     
  port: 3306,             
  username: "root",       
  password: "senha",      
  database: "acervo_db",  
  synchronize: true,      // Cria as tabelas automaticamente
  logging: false,
  entities: [Categoria, Local, Usuario, Documento, Movimentacao], 
});

// Função para conectar ao banco
export async function conectarBanco() {
  try {
    await AppDataSource.initialize();
    console.log("✅ Conectado ao banco de dados com sucesso!");
    return true;
  } catch (erro) {
    console.error("❌ Erro ao conectar ao banco de dados:", erro);
    return false;
  }
}

// Exporta os repositórios
export const repositorioCategoria = AppDataSource.getRepository(Categoria);
export const repositorioLocal = AppDataSource.getRepository(Local);
export const repositorioUsuario = AppDataSource.getRepository(Usuario);
export const repositorioDocumento = AppDataSource.getRepository(Documento);
export const repositorioMovimentacao = AppDataSource.getRepository(Movimentacao);

// Inicia a conexão
conectarBanco();
