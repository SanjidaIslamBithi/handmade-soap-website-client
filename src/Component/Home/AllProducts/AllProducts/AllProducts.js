import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Allproduct from '../AllProduct/Allproduct';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://salty-hamlet-93150.herokuapp.com/allproducts')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id='allproducts'>
      <h2>
        All <span className='primary'>Products</span>
      </h2>

      <Row xs={1} md={3} className='mt-4 ms-5 g-5'>
        {products.map((product) => (
          <Allproduct key={product._id} product={product}></Allproduct>
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;

// import React, { useEffect, useState } from 'react';
// import { Button, Card, Col, Row } from 'react-bootstrap';
// import Product from '../Product/Product';
// import Allproduct from '../AllProduct/Allproduct';
// const Products = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch('https://salty-hamlet-93150.herokuapp.com/topproducts')
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);
//   return (
//     <div id='products'>
//       <h2>
//         Top <span className='primary'>Products</span>
//       </h2>

//       <Row xs={1} md={3} className='mt-4 ms-5 g-5'>
//         {products.map((product) => (
//           <AllProduct key={product._id} product={product}></AllProduct>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Products;
