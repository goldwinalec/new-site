import React from 'react';
import projectsData from '../data/projects-data.json';
import { useParams, Link } from 'react-router-dom';
import classes from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const params = useParams();
  const [currentProject] = projectsData.filter(
    (project) => project.URL === params.projectId
  );

  return (
    <div className='container'>
      <h2 className='title'>{currentProject.name}</h2>
      <div className={classes.project__info}>
        <ul className={classes.project__list}>
          <li className={classes['project__list-item']}>
            Date: {currentProject.date}
          </li>
          <li className={classes['project__list-item']}>
            <a
              className={classes['project__list-link']}
              href={currentProject.sourceLink}
              target='_blank'
              rel='noreferrer'>
              {currentProject.sourceLink}
            </a>
          </li>
          {currentProject.GitHubLink && (
            <li className={classes['project__list-item']}>
              <a
                className={classes['project__list-link']}
                href={currentProject.GitHubLink}
                target='_blank'
                rel='noreferrer'>
                {currentProject.GitHubLink}
              </a>
            </li>
          )}
        </ul>
        <img
          className={classes.project__img}
          width='500'
          src={`/${process.env.PUBLIC_URL}${currentProject.imageSrc}`}
          alt={currentProject.name}
        />
      </div>

      <Link className={classes.project__link} to='/projects'>
        Back to all projects
      </Link>
    </div>
  );
};

export default ProjectDetail;
