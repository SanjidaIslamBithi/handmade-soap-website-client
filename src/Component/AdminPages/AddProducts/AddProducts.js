import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post('https://salty-hamlet-93150.herokuapp.com/topproducts', data)
      .then((res) => {
        //   console.log(res);
        if (res.data.insertedId) {
          alert('added new product successfully');
          reset();
        }
      });
  };
  return (
    <div className='add-products pt-5 mb-5'>
      <h2>Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true, maxLength: 20 })}
          placeholder='Name'
        />
        <textarea {...register('description')} placeholder='Description' />
        <input type='number' {...register('price')} placeholder='price' />
        <input {...register('img')} placeholder='image url' />
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddProducts;

// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';

// const AddProducts = () => {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);

//     axios.post('https://salty-hamlet-93150.herokuapp.com/top_products', data).then((res) => {
//       console.log(res);
//       if (res.data.insertedId) {
//         alert('added successfully');
//         reset();
//         //used rest to remove uploading data from form
//       }
//     });
//   };
//   return (
//     <div
//       className='add-products
//         '
//     >
//       <h2>Please Add a Service</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           {...register('name', { required: true, maxLength: 20 })}
//           placeholder='Name'
//         />
//         <textarea {...register('description')} placeholder='Description' />
//         <input type='number' {...register('price')} placeholder='price' />
//         <input {...register('img')} placeholder='image url' />
//         <input type='submit' />
//       </form>
//     </div>
//   );
// };

// export default AddProducts;
