import React from 'react'
import { Card, CardImg, CardHeader, CardFooter, CardBody, CardTitle } from 'reactstrap'

const Product = ({title, img, price, desc}) => {
  return (
    <Card style={{height: '750px', margin: '2%'}}>
      <CardHeader >
        <CardTitle className='text-title'>{title}</CardTitle>
      </CardHeader>
      <CardImg src={img} alt="product" style={{width: '250px', height: '250px', margin: '0 auto'}}/>
      <CardBody>
        <p>{desc}</p>
      </CardBody>
      <CardFooter>
        <h4>$ {price}</h4>
      </CardFooter>
    </Card>
  )
}

export default Product
