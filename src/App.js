import React from 'react';
import './App.css';
import GoalsList from './components/GoalsList';
import NewGoal from './components/newGoals/NewGoal';
function App() {
	const courseGoals = [
		{
			id: '1',
			text: 'finish the course',
		},
		{
			id: '2',
			text: 'learning more',
		},
		{
			id: '3',
			text: 'this the last course',
		},
	];

	const addNewGoalHandler = (newGoal) => {
		courseGoals.push(newGoal);
		console.log(courseGoals);
	};
	return (
		<div className='course-goals'>
			<h2>Course Goals</h2>
			<NewGoal onAddGoal={addNewGoalHandler} />
			<GoalsList goals={courseGoals} />
		</div>
	);
}
// class App extends React.Component {
// 	render() {
// 		return React.createElement(
// 			'div',
// 			{ title: 'div' },
// 			React.createElement('h2', { title: 'a new h2' }, 'this is amazing')
// 		);
// 	}
// }

export default App;
