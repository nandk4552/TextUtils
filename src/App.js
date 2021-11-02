import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";


function App() {


	// checks whether the dark mode is enabled or not
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);
 

	const showAlert = (message, type) =>{
		setAlert({
			msg: message,
			type: type
		})
		setTimeout(() => {
			setAlert(null);	
		}, 1500);
	}



	const toggleMode = () => {
		if(mode === 'light'){
			setMode('dark');
			document.body.style.backgroundColor = 'grey';
			showAlert("Dark mode has been enabled", "success");
			document.title = 'TextUtils - Dark Mode';
		}
		else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("Light mode has been enabled", "success");
			document.title = 'TextUtils - Light Mode';

		}
	}


	return (
		<>
			<Router>
			<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert}/>
			<div className="container my-3">
			<Switch>
				<Route exact path="/about">
					<About/>
				</Route>
				<Route exact path="/">
					<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
				</Route>
			</Switch>				
			</div>
			</Router>
		</>
	);
}

export default App;
