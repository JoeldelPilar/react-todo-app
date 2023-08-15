import { ChangeEvent, FormEvent, useState } from 'react';

interface IAddTodoProps {
	addTodo: (textFromUser: string) => void;
}

export const AddTodo = ({ addTodo }: IAddTodoProps) => {
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(inputValue);
		setInputValue('');
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const addTodoForm = (
		<form onSubmit={handleSubmit}>
			<input type='text' value={inputValue} onChange={handleChange} />
			<button>Add</button>
		</form>
	);

	return <>{addTodoForm}</>;
};
