import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Technologies from './pages/Technologies';
import Feedback from './pages/Feedback';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Hero />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/projects/:projectId'>
            <ProjectDetail />
          </Route>
          <Route path='/technologies'>
            <Technologies />
          </Route>
          <Route path='/feedback'>
            <Feedback />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
        </Switch>
      </main>
      <MainFooter />
    </React.Fragment>
  );
};

export default App;
