import React from 'react'
import logo from '../images/craftylogo.png'
import {Link}from 'react-router-dom'

const NavBar= () =>{
  return (
			<div>
				<header className='App-header'>
					<div className='logo-div'>
						<Link to='/'>
							<img src={logo} alt='logo' className='logo' />
					</Link>
					</div>
					<div className='nav-div'>
						<Link to='/products'>
							<button className='nav-btn'>Products</button>
						</Link>
						<Link to='/cart'>
							<button className='nav-btn'>
								<i className='fas fa-shopping-cart'/>Cart
							</button>
						</Link>
					</div>
				</header>
			</div>
		)
}
export default NavBar