import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

const Hero = React.lazy(() => import('./pages/Hero'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const Technologies = React.lazy(() => import('./pages/Technologies'));
const Feedback = React.lazy(() => import('./pages/Feedback'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Suspense fallback='Loading...'>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:projectId' element={<ProjectDetail />} />
            <Route path='/technologies' element={<Technologies />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <MainFooter />
    </React.Fragment>
  );
};

export default App;
