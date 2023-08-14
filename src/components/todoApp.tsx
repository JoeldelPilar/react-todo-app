import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../models/Todos';
import { Todos } from './Todos';

export const TodoApp = () => {
	const [todos, setTodos] = useState<Todo[]>([
		new Todo(uuidv4(), 'Current todo', false),
	]);

	return (
		<>
			<Todos todosList={todos}></Todos>
		</>
	);
};
