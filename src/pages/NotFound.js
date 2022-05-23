import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container'>
      <div className=''>404</div>
      <div className=''>Page Not Found</div>
      <Link to='/'>Back to main page</Link>
    </div>
  );
};

export default NotFound;
