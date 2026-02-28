import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import ProgressBar from './components/ProgressBar';
import Toast from './components/Toast';
import ThemeToggle from './components/ThemeToggle';
import BackgroundDecoration from './components/BackgroundDecoration';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState({ message: '', type: '' });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const addTodo = (todoData) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: todoData.text,
      description: todoData.description || '',
      priority: todoData.priority || 'medium',
      dueDate: todoData.dueDate || '',
      timeSpent: 0,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([newTodo, ...todos]);
    showToast('Task launched into orbit!');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        const isCompleted = !todo.completed;
        if (isCompleted) showToast('Stellar mission accomplished!', 'success');
        return { ...todo, completed: isCompleted };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    showToast('Task removed from the fleet.', 'error');
  };

  const editTodo = (id, newText, newDesc = '') => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText, description: newDesc } : todo
    ));
    showToast('Mission objectives updated.');
  };

  const updateTodoMeta = (id, metaData) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, ...metaData } : todo
    ));
  };

  const clearCompleted = () => {
    const activeTodos = todos.filter(t => !t.completed);
    if (activeTodos.length < todos.length) {
      setTodos(activeTodos);
      showToast('Completed tasks cleared.');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <BackgroundDecoration />

      {/* Corner Overlays */}
      <div className="corner-tag tr">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="corner-tag bl">
        <div className="branding-mini">
          <span>Made by</span>
          <strong>Aditya Hans</strong>
        </div>
      </div>

      <div className="header-wrapper">
        <Header />
      </div>

      <ProgressBar todos={todos} />
      <TodoInput addTodo={addTodo} />

      <div className="filters-container">
        <Filters filter={filter} setFilter={setFilter} />
        {todos.some(t => t.completed) && (
          <button className="clear-btn" onClick={clearCompleted}>
            Clear Completed
          </button>
        )}
      </div>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        updateTodoMeta={updateTodoMeta}
      />

      <div className="footer-links-fixed">
        <a href="mailto:adityahans.17@gmail.com" className="footer-link-icon" title="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
        <a href="https://linkedin.com/in/adityahans17" target="_blank" rel="noopener noreferrer" className="footer-link-icon" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://github.com/AddyTheDeveloper" target="_blank" rel="noopener noreferrer" className="footer-link-icon" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: '' })}
      />
    </div>
  );
}

export default App;
