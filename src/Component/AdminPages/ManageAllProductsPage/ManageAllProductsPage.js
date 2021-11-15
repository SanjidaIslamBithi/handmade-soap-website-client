import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';

const ManageAllProductsPage = () => {
  const [topproducts, setTopproducts] = useState([]);

  useEffect(() => {
    fetch('https://salty-hamlet-93150.herokuapp.com/allproducts')
      .then((res) => res.json())
      .then((data) => setTopproducts(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://salty-hamlet-93150.herokuapp.com/allproducts/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert('from top product one item is deleted');
          const remaining = topproducts.filter(
            (topproduct) => topproduct._id !== id
          );
          setTopproducts(remaining);
        }
      });
  };
  return (
    <div>
      <Container>
        <h2>Manage Services</h2>
        <Row className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 ms-5 g-5'>
          {topproducts.map((topproduct) => (
            <div key={topproduct._id}>
              <Col className='position-relative'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={topproduct.img} />
                  <Card.Body>
                    <Card.Title>{topproduct.name}</Card.Title>
                    <Card.Text>{topproduct.description}</Card.Text>
                    <Button
                      variant='primary'
                      onClick={() => handleDelete(topproduct._id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
                {/* <h3>{topproduct.name}</h3>
              <button onClick={() => handleDelete(topproduct._id)}>Delete</button> */}
              </Col>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageAllProductsPage;
