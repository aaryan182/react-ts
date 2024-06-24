import React, { useState, useEffect } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Todo } from './types';
import FloatingQuotes from './components/FloatingQuotes';


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [waterAlert, setWaterAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaterAlert(true);
    }, 3600000); 

    return () => clearInterval(interval);
  }, []);

  const addTodo = (text: string, startTime: string, endTime: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false, startTime, endTime };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleWaterAlertClose = () => {
    setWaterAlert(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      {waterAlert && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-500 ease-in-out">
          <div className="bg-white p-8 rounded-lg shadow-2xl transform scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-2xl font-extrabold mb-4 text-blue-600">Time to drink water!</h2>
            <button onClick={handleWaterAlertClose} className="bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">OK</button>
          </div>
        </div>
      )}
      <FloatingQuotes/>
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-3xl font-extrabold mb-6 text-purple-600">Daily Agenda</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  );  
};

export default App;
