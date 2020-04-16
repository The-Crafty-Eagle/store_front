import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Routes from './utils/Routes'
import Footer from './components/Footer';


function App() {
  return (
			<section className='App'>
				<NavBar />
				<br />
				<Routes/>
      <br />
      <Footer/>
			</section>
		)
}

export default App;
