import React from 'react';
import './App.css';
import GoalsList from './components/GoalsList';
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

	return (
		<div className='course-goals'>
			<h2>Course Goals</h2>
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
