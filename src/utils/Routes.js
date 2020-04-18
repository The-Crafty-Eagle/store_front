import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductList from '../components/ProductList'
import Details from '../components/Details'
import Cart from '../components/Cart'
import LandingPage from '../components/LandingPage'

const Routes=() =>{
  return (
		<Switch>
		<Route exact path='/' component={LandingPage}/>
	  <Route path='/products' component={ProductList} />
	  <Route path='/details' component={Details} />
	  <Route path='/cart' component={Cart} />
</Switch>
  )
}

export default Routes


