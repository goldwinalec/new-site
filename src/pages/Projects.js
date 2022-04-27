import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className='projects'>
      <div className='container'>
        <h2 className='projects__title title'>Projects</h2>
        <div className='projects__items items'>
          <div className='items__item'>
            <Link to='/projects/p1'>Project 1</Link>
          </div>
          <div className='items__item'>
            <Link to='/projects/p2'>Project 2</Link>
          </div>
          <div className='items__item'>
            <Link to='/projects/p3'>Project 3</Link>
          </div>
          <div className='items__item'>
            <Link to='/projects/p4'>Project 4</Link>
          </div>
          <div className='items__item'>
            <Link to='/projects/p5'>Project 5</Link>
          </div>
          <div className='items__item'>
            <Link to='/projects/p6'>Project 6</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
