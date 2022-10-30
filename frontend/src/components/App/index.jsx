import { useEffect, useState } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Content from '../Content/index';
import Footer from '../Footer';
import { UidContext } from "../../utils/context";
import axios from "axios";
import './App.css';

function App() {
	const [uid, setUid] = useState(null);

	useEffect(() => {
		const fetchToken = async () => {
			await axios ({
				methode: "get",
				url:`http://localhost:4000/jwtid`,
      			withCredentials: false,
      		})
			.then((res) => setUid(res.data))
			.catch((err) => {setUid(true);
			console.log("No token");
		})
	}
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