import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
