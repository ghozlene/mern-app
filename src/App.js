import React from 'react';
import './App.css';
import GoalsList from './components/GoalsList';
function App() {
	return (
		<div className='course-goals'>
			<h2>Course Goals</h2>
			<GoalsList />
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
