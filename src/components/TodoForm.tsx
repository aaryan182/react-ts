import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string, startTime: string, endTime: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, startTime, endTime);
    setText('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`peer border border-blue-300 p-3 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out placeholder-transparent`}
          placeholder=" "
        />
        <label
          className={`absolute left-3 px-1 transition-all duration-300 ease-in-out bg-white ${
            text ? '-top-2.5 text-xs text-blue-500' : 'top-3 text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-500'
          }`}
        >
          Enter the task of today
        </label>
      </div>
      <div className="relative mb-6">
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className={`peer border border-blue-300 p-3 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out placeholder-transparent`}
          placeholder=" "
        />
      </div>
      <div className="relative mb-6">
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className={`peer border border-blue-300 p-3 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out placeholder-transparent`}
          placeholder=" "
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white p-3 rounded-lg w-full shadow-lg hover:from-purple-600 hover:to-blue-700 transition-colors duration-300"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
