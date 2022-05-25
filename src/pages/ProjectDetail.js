import React from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const params = useParams();

  return (
    <div className='container'>
      <h1>{params.projectId}</h1>
      <Link to='/projects'>Back to all projects</Link>
    </div>
  );
};

export default ProjectDetail;
