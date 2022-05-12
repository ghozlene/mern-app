import React, { useState } from 'react';
import './NewGoal.css';
const NewGoal = ({ onAddGoal }) => {
	const [entredText, setEntredText] = useState('');

	const addGoalHandler = (event) => {
		event.preventDefault();
		const newGoal = { id: Math.random(), text: entredText };

		onAddGoal(newGoal);
		setEntredText('');
	};

	const inputHandler = (event) => {
		setEntredText(event.target.value);
	};

	return (
		<form className='new-goal' onSubmit={addGoalHandler}>
			<input type='text' value={entredText} onChange={inputHandler} />
			<button type='submit'>add goal</button>
		</form>
	);
};

export default NewGoal;
