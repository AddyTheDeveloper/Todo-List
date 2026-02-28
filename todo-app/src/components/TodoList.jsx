import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo, updateTodoMeta }) {
    if (todos.length === 0) {
        return (
            <div className="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                </svg>
                <p>Your universe is clear. Nothing to do here!</p>
            </div>
        );
    }

    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    updateTodoMeta={updateTodoMeta}
                />
            ))}
        </ul>
    );
}
