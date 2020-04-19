import React, {useEffect, useContext} from 'react'
import Product from './Product'
import { ProductsContext } from '../utils/contexts/context'
import axios from 'axios'
import {Row, Col} from 'reactstrap'

const ProductList = () => {
	const [state, dispatch] = useContext(ProductsContext)
	

	const getProducts = () => {
			axios
				.get('http://localhost:4994/products')
				.then(res => {
					console.log(res)
					dispatch({ type: 'GET_PRODUCTS', payload: res.data })
				})	
	}

	useEffect(() => {
	getProducts()
	}, [])
	console.log(state.products)

  return (
			<section>
				<div>
					<h3 className='text-title'>Our Products</h3>
			</div>
			<Row>
			{state.products.map((info, index) => {
				return(
				<Col lg='4' key={index}>
						<Product title={info.title} img={info.img} price={info.price} desc={info.description}/>
				</Col>
			)})}
			</Row>
			
			</section>
		)
}

export default ProductList
