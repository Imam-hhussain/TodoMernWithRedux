import React, { useEffect } from 'react';
import { getAllTodos } from '../redux/action/index.js';
import Todo from './todo.jsx';
import { useDispatch, useSelector } from 'react-redux';

export const DispalyTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos); // Access the todos array from state

    useEffect(() => {
        dispatch(getAllTodos()); // Fetch todos 
    }, []);

    return (
        <article>
            <ul>
                {Array.isArray(todos) && todos.map(todo => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ul>
        </article>
    );
};
