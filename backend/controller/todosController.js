import { Todo } from '../model/todoSchema.js';

export const createTodo = async (req, res, next) => {
  try {
    await Todo.create({
        data: req.body.data,
        createdAt: Date.now()
    }); // Save the new Todo item
    res.json({ message: "Todo created successfully" }); // Sending a response back
  } catch (error) {
    next(error); // Forward the error to the error handler 
  }
};
   
// get all todo
export const getAllTodos = async (req, res, next) => {
    try {
        const todos  = await Todo.find(); // find Todos item
      res.json(todos); // Sending a response back
    } catch (error) {
      next(error); // Forward the error to the error handler
    }
  };

 export const updateTodo = async (req, res,next) => {
    const { id } = req.params; // Get the id from the request parameters

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id,  req.body, { new: true }); // Update the todo in the database
        res.json(updatedTodo); // Send back the updated todo
    } catch (error) {
      next(error); // Forward the error to the error handler
    }
    }


// Controller function to delete a todo by ID
export const deleteTodo = async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters

    try {
        const deletedTodo = await Todo.findByIdAndDelete(id); // Delete the todo in the database
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' }); // Send success response
    }catch (error) {
        next(error); // Forward the error to the error handler
      }
};

  