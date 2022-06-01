import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProjectItem.module.css';

const ProjectItem = ({ data }) => {
  const tags = data.tags.map((tag, i) => {
    return (
      <div
        className={`${classes.items__tag} ${classes[`items__tag--$${tag}`]}`}>
        {tag}
      </div>
    );
  });

  return (
    <div className={classes.items__item}>
      <Link
        to={`/projects/$${data.URL}`}
        className={classes.items__link}
        style={{
          backgroundImage: `url($${data.imageSrc})`,
        }}></Link>
      <div className={classes.items__tags}>{tags}</div>
    </div>
  );
};

export default ProjectItem;
