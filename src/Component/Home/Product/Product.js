import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = ({ product }) => {
  const { _id, name, price, description, img } = product;
  

  return (
    <>
      {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
      <Col className='position-relative'>
        {/* <Card>
              <Card.Img variant='top' src='holder.js/100px160' />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card> */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Link to={`/purchase/${_id}`}>
              <Button variant='primary'>
                Buy now
                <FontAwesomeIcon icon={faShoppingCart} />
              </Button>
            </Link>
             
          </Card.Body>
        </Card>
      </Col>
     
      {/* ))} */}
    </>
  );
};

export default Product;