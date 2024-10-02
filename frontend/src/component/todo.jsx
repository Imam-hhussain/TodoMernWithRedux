import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo,deleteTodo  } from '../redux/action'; // Import your update action


function Todo({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.data); // Initialize with current todo text
    const dispatch = useDispatch();

    const handleEditClick = () => {
        setIsEditing(!isEditing); 
    };

    const handleUpdate = () => {
        dispatch(updateTodo(todo._id, newText)); // Dispatch update action
        setIsEditing(false); // Exit editing mode
    };
  
    const handleDelete = () => {
        dispatch(deleteTodo(todo._id)); // Dispatch delete action
    };
    return (
        <div>
            <li className='task'>
                {isEditing ? (
                    <input 
                        type='text' 
                        value={newText} 
                        onChange={(e) => setNewText(e.target.value)} // Update newText as user types
                        className='edit-input' // Add a class for styling
                    />
                ) : (
                    <span className='todo-text'>{todo.data}</span> // Display the todo text
                )}
                <span className='icon' onClick={handleEditClick}>
                    <i className='fa fa-pen' />
                </span>
                {isEditing && (
                    <button className='update-button' onClick={handleUpdate}>Update</button> // Styled button
                )}
                 <button className='delete-button' onClick={handleDelete}>Delete</button> {/* Add delete button */}
            </li>
        </div>
    );
}

export default Todo;
