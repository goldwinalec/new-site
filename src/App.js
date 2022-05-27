import React, { Suspense, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Loader from './components/Loader';

const Hero = React.lazy(() => import('./pages/Hero'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const Technologies = React.lazy(() => import('./pages/Technologies'));
const Reviews = React.lazy(() => import('./pages/Reviews'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:projectId' element={<ProjectDetail />} />
            <Route path='/technologies' element={<Technologies />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <MainFooter />
    </Fragment>
  );
};

export default App;
