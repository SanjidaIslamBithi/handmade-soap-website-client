import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CommentShowing = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch('https://salty-hamlet-93150.herokuapp.com/comment')
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  //deleting comment

  const handleDeleteComment = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://salty-hamlet-93150.herokuapp.com/comment/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('removed comment successfully');
            const remainingComments = comment.filter(
              (comnt) => comnt._id !== id
            );
            setComment(remainingComments);
          }
        });
    }
  };
  return (
    <div>
      <h2>total comments: {comment.length}</h2>
      <Container className='bg-secondary'>
        <h3 className='pt-5'>Clients thoughts</h3>
        <ul>
          {comment.map((comnt) => (
            <div className='pt-5 pb-2' key={comnt._id}>
              <p className='text-lg-start fs-4 fw-bold text-info font-monospace'>
                Client Name: {comnt.name}
              </p>

              <p className='text-sm-start fs-6 fw-normal font-monospace'>
                Thoughts: {comnt.comment}
              </p>
              <Link to={`/update/${comnt._id}`}>
                <Button>edit</Button>
              </Link>

              <Button onClick={() => handleDeleteComment(comnt._id)}>
                remove
              </Button>
            </div>
          ))}
        </ul>
      </Container>
      {/* linking to write new comments page */}
      <Link to='/commentbox'>
        <h5 className='text-end'>want to share your thoughts</h5>
      </Link>
    </div>
  );
};

export default CommentShowing;
