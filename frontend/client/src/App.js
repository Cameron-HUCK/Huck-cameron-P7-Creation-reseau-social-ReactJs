import { useEffect, useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import { UidContext } from "../src/components/Context/AppContext";
import axios from "axios";
import './App.css';

function App() {
	const [uid, setUid] = useState(null);

	useEffect(() => {
		const fetchToken = async () => {
			await axios ({
				methode: "get",
				url:`${process.env.REACT_APP_API_URL}userid`,
      			withCredentials: true,
      		})
			.then((res) => setUid(res.data))
			.catch((err) => console.log("No token"));
		};
		fetchToken();
	}, [uid]);
	
	return (
		<UidContext.Provider value={uid}>
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
