import React, { useState } from 'react';
import { addNewTodo, getAllTodos } from '../redux/action';
import { useDispatch } from 'react-redux';

export default function Main() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onInputSubmit = async (e) => {
        e.preventDefault();
        if (text.trim()) {
            await dispatch(addNewTodo(text)); // Add the new todo
            dispatch(getAllTodos()); // Fetch all todos again
            setText(""); // Clear the input
        }
    };

    const onchangeInput = (e) => {
        setText(e.target.value); // Update the text state
    };

    return (
        <div>
            <form className="form" onSubmit={onInputSubmit}>
                <input 
                    className="input"
                    type="text" 
                    placeholder='Enter a new task' 
                    value={text} // Controlled input
                    onChange={onchangeInput}
                />
                <button 
                    type="submit" 
                    className="add-button" 
                    disabled={!text.trim()} // Disable button if input is empty
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}
