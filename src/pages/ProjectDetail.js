import React from 'react';
import projectsData from '../data/projects-data.json';
import { useParams, Link } from 'react-router-dom';
import linkIcon from '../assets/images/link.svg';
import gitHubIcon from '../assets/images/contacts-icon-4.svg';
import backIcon from '../assets/images/back.svg';
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
        <table className={`${classes.project__table} ${classes.table}`}>
          <tr className={classes.table__row}>
            <td className={classes.table__data}>Release date</td>
            <td className={classes.table__data}>{currentProject.date}</td>
          </tr>
          <tr className={classes.table__row}>
            <td className={classes.table__data}>Technologies</td>
            <td className={classes.table__data}>
              <ul className={classes.table__list}>
                {currentProject.technologies.map((item) => (
                  <li className={`${classes['table__list-item']}`}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className={classes.table__row}>
            <td className={classes.table__data}>Links</td>
            <td className={classes.table__data}>
              {currentProject.sourceLink && (
                <a
                  className={classes.table__link}
                  href={currentProject.sourceLink}
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    src={linkIcon}
                    alt='External link'
                    title='External link'
                  />
                </a>
              )}
              {currentProject.GitHubLink && (
                <a
                  className={classes.table__link}
                  href={currentProject.GitHubLink}
                  target='_blank'
                  rel='noreferrer'>
                  <img src={gitHubIcon} alt='GitHub link' title='GitHub link' />
                </a>
              )}
            </td>
          </tr>
        </table>
        <img
          className={classes.project__img}
          width='500'
          src={`/${process.env.PUBLIC_URL}${currentProject.imageSrc}`}
          alt={currentProject.name}
        />
      </div>

      <Link className={classes.project__link} to='/projects'>
        <img src={backIcon} alt='Back to projects' title='Back to projects' />
      </Link>
    </div>
  );
};

export default ProjectDetail;
