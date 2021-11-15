import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
const Products = () => {
  const { products } = useAuth();
  // useEffect(() => {
  //   fetch('https://salty-hamlet-93150.herokuapp.com/topproducts')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <div id='products'>
      <h2>
        Top <span className='primary'>Products</span>
      </h2>

      <Row xs={1} md={3} className='mt-4 ms-5 g-5'>
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
// import React from 'react';

// const Products = () => {
//   return <div>hi from products</div>;
// };

// export default Products;
