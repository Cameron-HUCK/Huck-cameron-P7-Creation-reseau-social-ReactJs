import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Content from '../Content/index';
import Footer from '../Footer';
import { UidContext } from "../../utils/context";
import '../../utils/style/App.css';

function App() {
	return (
		<UidContext.Provider>
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
		</UidContext.Provider>
	);
}

export default App;