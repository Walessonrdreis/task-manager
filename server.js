import express from 'express';//Framework para construção de aplicações web
import bodyParser from 'body-parser';// Middleware para processar dados JSON
import db from './models/db.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(bodyParser.json());

//usando rotas de tarefas
app.use('/api',taskRoutes);// prefixando rotas com /api

//inicializando o banco de dados e criando a tabela de tarefas
db.serialize(()=>{
    db.run("CREATE TABLE tasks (id INTEGER PRIMARY KEY, description TEXT, completed BOOLEAN)");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta ${PORT}`);
});
