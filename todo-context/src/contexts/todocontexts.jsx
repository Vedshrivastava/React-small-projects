import { createContext, useContext } from 'react';

// Create the context with initial values
export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

// Custom hook to use the TodoContext
export const useTodo = () => {
    return useContext(TodoContext);
};

// Provider component for the TodoContext
export const TodoProvider = ({ children, value }) => {
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};
