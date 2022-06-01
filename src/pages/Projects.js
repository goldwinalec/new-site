import ProjectItem from '../components/ProjectItem';
import projectsData from '../data/projects-data';
import classes from './Projects.module.css';

const Projects = () => {
  return (
    <section>
      <div className='container'>
        <h2 className='title'>Projects</h2>
        <div className={classes.items}>
          {projectsData.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
