import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Content from '../Content/index';
import Footer from '../Footer';

//CSS
import '../../utils/style/Body.css';
import '../../utils/style/Navigation.css';
import '../../utils/style/Home.css';
import '../../utils/style/Auth.css';
import '../../utils/style/Create.css';
import '../../utils/style/Footer.css';

function App() {
	return (
		<div className="App">
			<div className="bar-Nav">
				<Header />
				<Navigation />
			</div>
			<div className="content-flex">
			<Content />
		</div>
		<Footer />
		</div>
	);
}

export default App;