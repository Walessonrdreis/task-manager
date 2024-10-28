import express from 'express';
import * as taskController from '../controllers/taskController.js';

const router = express.Router();// Cria uma instância do router

//Definindo as rotas da API
router.post('/tasks',taskController.addTask);
router.put('/tasks/:id/complete',taskController.completedTask);
router.get('/tasks/',taskController.listTasks);

export default router;