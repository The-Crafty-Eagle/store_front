import React from 'react'
import logo from '../images/craftylogo.png'


const NavBar= () =>{
  return (
			<div>
				<header className='App-header'>
					<div className='logo-div'>
						<img src={logo} alt='logo' className='logo' />
					</div>
					<div className='nav-div'>
						<button>PlaceHold Content</button>
					</div>
				</header>
			</div>
		)
}
export default NavBar