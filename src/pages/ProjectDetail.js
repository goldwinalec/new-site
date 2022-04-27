import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const params = useParams();

  return <h1>{params.projectId}</h1>;
};

export default ProjectDetail;
