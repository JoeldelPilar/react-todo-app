import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../models/Todos';
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';

export const TodoApp = () => {
	const [todos, setTodos] = useState<Todo[]>([
		new Todo(uuidv4(), 'Current todo', false),
	]);

	const addTodo = (textFromUser: string) => {
		setTodos([...todos, new Todo(uuidv4(), textFromUser, false)]);
	};

	const removeTodo = (id: string) => {
		setTodos(todos.filter((todo) => todo.id != id));
	};

	const toggleTodo = (id: string) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.done = !todo.done;
				}
				return todo;
			})
		);
	};

	return (
		<>
			<AddTodo addTodo={addTodo}></AddTodo>
			<Todos
				todosList={todos}
				removeTodo={removeTodo}
				toggleTodo={toggleTodo}
			></Todos>
		</>
	);
};
