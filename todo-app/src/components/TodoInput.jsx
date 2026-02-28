import { useState } from 'react';

export default function TodoInput({ addTodo }) {
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriority] = useState('medium');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            addTodo({
                text: trimmedValue,
                description: description.trim(),
                priority: priority,
                dueDate: dueDate
            });
            setInputValue('');
            setDescription('');
            setPriority('medium');
            setDueDate('');
            setShowOptions(false);
        }
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What's next on your journey?"
                    aria-label="New todo input"
                />
                <button type="button" className={`options-toggle-btn ${showOptions ? 'active' : ''}`} onClick={() => setShowOptions(!showOptions)} aria-label="Toggle options">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="21" x2="4" y2="14"></line>
                        <line x1="4" y1="10" x2="4" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="3"></line>
                        <line x1="20" y1="21" x2="20" y2="16"></line>
                        <line x1="20" y1="12" x2="20" y2="3"></line>
                        <line x1="1" y1="14" x2="7" y2="14"></line>
                        <line x1="9" y1="8" x2="15" y2="8"></line>
                        <line x1="17" y1="16" x2="23" y2="16"></line>
                    </svg>
                </button>
                <button type="submit" className="submit-btn" aria-label="Add todo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>

            {showOptions && (
                <div className="input-options">
                    <div className="options-row">
                        <div className="option-group">
                            <label>Priority</label>
                            <div className="priority-selector">
                                <button
                                    type="button"
                                    className={`prio-btn low ${priority === 'low' ? 'active' : ''}`}
                                    onClick={() => setPriority('low')}
                                >Low</button>
                                <button
                                    type="button"
                                    className={`prio-btn medium ${priority === 'medium' ? 'active' : ''}`}
                                    onClick={() => setPriority('medium')}
                                >Med</button>
                                <button
                                    type="button"
                                    className={`prio-btn high ${priority === 'high' ? 'active' : ''}`}
                                    onClick={() => setPriority('high')}
                                >High</button>
                            </div>
                        </div>
                        <div className="option-group">
                            <label>Due Date</label>
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="date-input"
                            />
                        </div>
                    </div>
                    <div className="option-group">
                        <label>Description (Optional)</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add more details..."
                            className="desc-input"
                            rows="2"
                        />
                    </div>
                </div>
            )}
        </form>
    );
}
