import axios from 'axios';

const url = 'http://localhost:8000';

export const addNewTodo = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${url}/createTodo`, {data});
            dispatch({
                type: 'ADD_NEWTODO',
                payload: response.data,
            });
        } catch (error) {
            console.error("Error adding new todo:", error);
            dispatch({
                type: 'ADD_TODO_FAILURE',
                payload: error.message,
            });
        }
    };
    
};
export const getAllTodos = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${url}/getTodo`);
            console.log('Fetched todos from API:', response.data); // Log the response data
            dispatch({
                type: 'GET_TODOs',
                payload: response.data,
            });
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    }
};
export const updateTodo = (id, updateData) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${url}/updateTodo/${id}`, { data: updateData });
            dispatch({
                type: 'UPDATE_TODO',
                payload: response.data, 
            });
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${url}/deleteTodo/${id}`); // Call your delete endpoint
            dispatch({
                type: 'DELETE_TODO',
                payload: id, // Send the id of the todo to be deleted
            });
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };
};