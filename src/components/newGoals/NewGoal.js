import React from 'react';
import './NewGoal.css';
const NewGoal = () => {
	const addGoalHandler = (event) => {
		event.preventDefault();
		const newGoal = { id: Math.random(), text: 'my newgoal' };
		console.log(newGoal);
	};

	return (
		<form className='new-goal' onSubmit={addGoalHandler}>
			<input type='text' />
			<button type='submit'>add goal</button>
		</form>
	);
};

export default NewGoal;
