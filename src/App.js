import React from 'react';
import './App.css';

// function App() {
// 	return React.createElement(
// 		'div',
// 		{ title: 'div' },
// 		React.createElement('h2', { title: 'a new h2' }, 'this is amazing')
// 	);
// }

class App extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ title: 'div' },
			React.createElement('h2', { title: 'a new h2' }, 'this is amazing')
		);
	}
}

export default App;
