import { error } from 'console';
import db from '../models/db.js';

// função para adicionar uma nova tarefa
exports.addTask = (req,res)=>{
    const {description,date} = req.body;
    db.run("INSERT INTO tasks (description,date,completed) VALUES (?,?,?)",[description,date,false],function(err){
        if(err){
            return res.status(400).json({error:err.message});
        }
        res.status(201).json({id:this.lastID,description,date,completed:false})
    })
}

//função para marcar um tarefa como concluída
exports.completedTask = (req,res)=>{
    const id = req.params.id;
    db.run("UPDATE tasks SET completed = ? WHERE id = ?",[true,id],function(err){
        if(err){
            return res.status(400).json({error:err.message});
        }
        res.json({id,completed: true});
    });

}

//função para listar todas as tarefas 
exports.listTasks = (req,res)=>{
    db.all("SELECT * FROM tasks",[],(err,rows)=>{
        if(err) return res.status(400).json({error:err.message});
    });
    res.json(rows);

}