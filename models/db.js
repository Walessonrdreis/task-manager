import sqlite3 from 'sqlite3';

//ativo o modo verbose, que fornece mensagens detalhadas sobre operações do banco de dados
sqlite3.verbose(); 

// Criando e exportando a conexão con o banco de dados
const db = new sqlite3.Database(':memory:', (err) =>{
    if(err) {
        console.error(err.message);
    } else{
        console.log('Banco de dados conectado com sucesso')
    }
})

export default db;