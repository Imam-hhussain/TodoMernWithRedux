const initialState = {
    todos: [],
    error: null,
};

const todosReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEWTODO':
            return {
                
                todos: [action.payload, ...state],
            };
        case 'GET_TODOs':
                    return {
                        todos: action.payload, // Update the todos in the state
                    };
        case 'UPDATE_TODO':
            return {
                todos: state.todos.map(todo =>
                    todo._id === action.payload._id ? action.payload : todo // Update the todo
                ),
            };
            case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo._id !== action.payload), // Remove the deleted todo
            };
            default:
                return state;
    }
};



export default todosReducers;
