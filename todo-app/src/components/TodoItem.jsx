import { useState, useRef, useEffect } from 'react';

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo, updateTodoMeta, index }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [showExtended, setShowExtended] = useState(false);
    const [timerActive, setTimerActive] = useState(false);
    const inputRef = useRef(null);

    // Focus input when editing
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    // Timer logic
    useEffect(() => {
        let interval = null;
        if (timerActive && !todo.completed) {
            interval = setInterval(() => {
                updateTodoMeta(todo.id, { timeSpent: (todo.timeSpent || 0) + 1 });
            }, 1000);
        } else if (!timerActive && interval) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerActive, todo.completed, todo.id, todo.timeSpent, updateTodoMeta]);

    // Stop timer if completed
    useEffect(() => {
        if (todo.completed && timerActive) {
            setTimerActive(false);
        }
    }, [todo.completed, timerActive]);

    const handleEditSubmit = () => {
        if (editText.trim()) {
            editTodo(todo.id, editText.trim(), todo.description);
            setIsEditing(false);
        } else {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEditSubmit();
        } else if (e.key === 'Escape') {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const isOverdue = todo.dueDate && !todo.completed && new Date() > new Date(todo.dueDate);

    return (
        <li
            className={`todo-item ${todo.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}
            style={{ '--delay': `${index * 0.1}s` }}
        >
            <div className="todo-content">
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        aria-label={`Mark ${todo.text} as ${todo.completed ? 'incomplete' : 'complete'}`}
                    />
                    <span className="checkmark"></span>
                </label>

                <div className="todo-details">
                    {isEditing ? (
                        <input
                            ref={inputRef}
                            type="text"
                            className="edit-input"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onBlur={handleEditSubmit}
                            onKeyDown={handleKeyDown}
                            aria-label="Edit todo"
                        />
                    ) : (
                        <span
                            className="todo-text"
                            onDoubleClick={() => setIsEditing(true)}
                            onClick={() => setShowExtended(!showExtended)}
                        >
                            {todo.text}
                        </span>
                    )}

                    {/* Metadata badges row */}
                    {(!isEditing && (todo.priority || todo.dueDate || isOverdue || todo.timeSpent > 0)) && (
                        <div className="todo-meta">
                            {isOverdue && (
                                <span className="badge badge-exhausted">
                                    Exhausted / Overdue
                                </span>
                            )}
                            {todo.priority && (
                                <span className={`badge badge-${todo.priority}`}>
                                    {todo.priority}
                                </span>
                            )}
                            {todo.dueDate && (
                                <span className="badge badge-date">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '3px' }}>
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {new Date(todo.dueDate).toLocaleDateString()}
                                </span>
                            )}
                            {todo.timeSpent > 0 && (
                                <span className="badge badge-timer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '3px' }}>
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {formatTime(todo.timeSpent)}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Description subtext layer (collapsible) */}
                    {showExtended && todo.description && (
                        <div className="todo-description">
                            <p>{todo.description}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="todo-actions">
                {/* Play/Pause Timer toggle */}
                {!todo.completed && (
                    <button
                        className={`action-btn timer-btn ${timerActive ? 'active' : ''}`}
                        onClick={() => setTimerActive(!timerActive)}
                        aria-label={timerActive ? "Pause Timer" : "Start Timer"}
                    >
                        {timerActive ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        )}
                    </button>
                )}

                <button
                    className="action-btn edit"
                    onClick={() => setIsEditing(!isEditing)}
                    aria-label="Edit todo"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </button>

                <button
                    className="action-btn delete"
                    onClick={() => deleteTodo(todo.id)}
                    aria-label="Delete todo"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </li>
    );
}
