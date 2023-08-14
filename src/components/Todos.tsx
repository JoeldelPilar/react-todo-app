import Todo from '../models/Todos';

interface ITodosProps {
	todosList: Todo[];
}

export const Todos = ({ todosList }: ITodosProps) => {
	const lis = todosList.map((todo, id) => (
		<li key={id}>
			<span>{todo.text}</span>
		</li>
	));

	return (
		<>
			<ul>{lis}</ul>
		</>
	);
};
