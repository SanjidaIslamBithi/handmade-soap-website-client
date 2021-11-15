import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ClientBarPage from '../ClientBarPage/ClientBarPage';
import logo from '../../../images/logo.png';
import { Button } from 'react-bootstrap';
const ClientBookedList = () => {
  const { user } = useAuth();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const url = ` https://salty-hamlet-93150.herokuapp.com/allbuyingproducts?email=${user.email}`;

    fetch(url)
      .then((res) => res.json())

      .then((data) => setLists(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://salty-hamlet-93150.herokuapp.com/allbuyingproducts/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount) {
          alert('From bought product one item is deleted');
          const remaining = lists.filter((product) => product._id !== id);
          setLists(remaining);
          console.log(remaining);
        }
      });
  };
  return (
    <section className='booking-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12 py-3'>
            <Link to='/home'>
              <img src={logo} alt='' className='logo w-25' />
            </Link>
          </div>
          <div className='col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3'>
            <h4 className='text-brand'>Booking List</h4>
            <h4 className='text-brand'>
              Number of Booked items: {lists.length}
            </h4>
            <div className='profile'>
              <h4>{user.displayName}</h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-3'>
            <ClientBarPage />
          </div>
          <div
            className='col-md-9 col-9 container p-4'
            style={{ backgroundColor: '#E5E5E5' }}
          >
            <div className='row d-flex justify-content-between booking-card'>
              {lists.length === 0 && (
                <div className='text-center'>
                  <h4>You have no bookings!</h4>
                  <img src='' alt='loading' className='mt-3 w-25' />
                </div>
              )}
              {lists.map((product) => (
                <div className='card col-md-5 my-2' key={product._id}>
                  <div className='card-header d-flex justify-content-between'>
                    <img
                      className='img-fluid'
                      src={product.productimg}
                      alt='serviceImage'
                      width='60'
                    />
                    <h6
                      className='pt-3 px-3 rounded'
                      style={{ backgroundColor: '#FFE3E3', color: '#FF4545' }}
                    >
                      Pending
                    </h6>
                    <Button
                      variant='danger'
                      onClick={() => handleDelete(product._id)}
                    >
                      Not Buying
                    </Button>
                  </div>
                  <div className='card-body'>
                    <h6 className='card-text font-weight-bold'>
                      {product.productname}
                    </h6>
                    <p className='card-text text-success'>
                      Order price: {product.productprice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientBookedList;

// {
//   /* <div className='sidebar d-flex flex-column'> */
// }
//   <Link to='/purchase/:productId' className='py-1'>
//     <h6 className='d-inline text-brand'>
//       <FontAwesomeIcon icon={faShoppingCart} className='mr-2' /> Service
//       Booking
//     </h6>
//   </Link>
//   <Link to='/bookinglist' className='py-1'>
//     <h6 className='d-inline  text-brand'>
//       <FontAwesomeIcon icon={faClipboardCheck} className='mr-2' /> Booking
//       List
//     </h6>
//   </Link>
//   <Link to='/commentbox' className='py-1'>
//     <h6 className='d-inline  text-brand'>
//       <FontAwesomeIcon icon={faCommentAlt} className='mr-2' /> Add Review
//     </h6>
//   </Link>
//   <div>
//   <h1>hi from client booking</h1>
// </div>
// </div>
