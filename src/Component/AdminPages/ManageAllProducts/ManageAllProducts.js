import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Col, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
//code to delete product from home page
const ManageAllProducts = () => {
  const [topproducts, setTopproducts] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch('https://salty-hamlet-93150.herokuapp.com/topproducts')
      .then((res) => res.json())
      .then((data) => setTopproducts(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://salty-hamlet-93150.herokuapp.com/topproducts/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          // alert('from top product one item is deleted');
          // alert('from top product one item is deleted');
          setSuccess(true);
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
      <h2 className='mt-5 pb-4 fw-bold'> <span className=' text-info'>Deleting products </span> from home products page</h2>
        <Row className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 ms-5 g-5'>
          <div>
            <Col>
              <Link to='/home'>
                <img src={logo} alt='' className='logo w-25' />
              </Link>
              <Dashboard />
            </Col>
          </div>
          {topproducts.map((topproduct) => (
            <div key={topproduct._id}>
              <Col className='position-relative'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={topproduct.img} />
                  <Card.Body>
                    <Card.Title>{topproduct.name}</Card.Title>
                    <Card.Text>{topproduct.description}</Card.Text>
                    <Link to={`/update/${topproduct._id}`}>
                      <Button>edit</Button>
                    </Link>

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
        {success && (
          <Alert variant='success'>
            <FontAwesomeIcon icon={faCheckCircle} />A product is deleted
            successfully{' '}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default ManageAllProducts;

// import React, { useEffect, useState } from 'react';

// const ManageAllProducts = () => {
//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     fetch('https://salty-hamlet-93150.herokuapp.com/top_products')
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);
//   const handleDelete = (id) => {
//     const url = `https://salty-hamlet-93150.herokuapp.com/top_products/${id}`;
//     fetch(url, {
//       method: 'DELETE',
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         if (data.deletedCount) {
//           alert('deleted');
//           const remaining = services.filter((service) => service._id !== id);
//           setServices(remaining);
//         }
//       });
//   };
//   return (
//     <div className='container'>
//       <div className='manage-section'>
//         <h2>Manage services</h2>
//         {services.map((service) => (
//           <div key={service._id}>
//             <h3>{service.name}</h3>
//             {/* <Link to={`/services/update/:id${service._id}`}>
//                 <button>update</button>
//               </Link> */}
//             <button onClick={() => handleDelete(service._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageAllProducts;
