import React from 'react';
import './GoalsList.css';
const GoalsList = ({ goals }) => {
	console.log(goals);
	return (
		<ul className='goal-list'>
			{goals.map((item) => {
				return <li key={item.id}>{item.text}</li>;
			})}
		</ul>
	);
};

export default GoalsList;
