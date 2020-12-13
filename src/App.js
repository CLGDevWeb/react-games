import React from 'react';
// Compenents and pages
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
// Routing
import {Route} from 'react-router-dom';


function App() {

	return (
		<div className="App">
			<GlobalStyles/>
			<Route path={["/game/:id", "/"]}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
