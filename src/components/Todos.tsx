import Todo from '../models/Todos';
import '../styles/todos.css';

interface ITodosProps {
	todosList: Todo[];
	removeTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
}

export const Todos = ({ todosList, removeTodo, toggleTodo }: ITodosProps) => {
	const reversedTodos = [...todosList].reverse();
	const lis = reversedTodos.map((todo) => (
		<li key={todo.id}>
			<span className={todo.done ? 'done' : ''}>{todo.text}</span>
			<button
				className='material-symbols-outlined'
				onClick={() => {
					toggleTodo(todo.id);
				}}
			>
				check_circle
			</button>
			<button
				className='material-symbols-outlined'
				onClick={() => {
					removeTodo(todo.id);
				}}
			>
				Delete
			</button>
		</li>
	));

	return (
		<>
			<ul>{lis}</ul>
		</>
	);
};

<span>delete</span>;
