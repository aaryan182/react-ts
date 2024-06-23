import React from 'react';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className="flex flex-col justify-between items-start mb-4 bg-gray-50 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer text-lg font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300`}
              >
                {todo.text}
              </span>
              <div className="flex justify-between w-full mt-2">
                <span className="text-sm text-gray-500">Start: {todo.startTime}    </span>
                <span className="text-sm text-gray-500">End: {todo.endTime}</span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="mt-4 text-red-500 hover:text-red-700 self-end transition-colors duration-300"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      );
};
