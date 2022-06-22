import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css'

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
