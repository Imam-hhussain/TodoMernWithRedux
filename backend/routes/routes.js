import  express from "express";
import { createTodo,getAllTodos,updateTodo,deleteTodo} from '../controller/todosController.js'
const router=express.Router()
// Route to create a todo
router.post('/createTodo',createTodo);
// Route to get all todos
router.get('/getTodo',getAllTodos);
// Route to update a todo
router.put('/updateTodo/:id', updateTodo);
// delete todo
router.delete('/deleteTodo/:id', deleteTodo);

export default router;



// router.route('/todo/:id').get(getTodoById)
// router.route('/update-todo/:id').put(updateTodo)
// router.route('/delete-todo/:id').delete(deleteTodo)

// getAllTodos,
// getTodoById,
// updateTodo,
// deleteTodo