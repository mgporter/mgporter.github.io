import Nav from './components/Nav';
import Main from './components/Main';
import { Outlet, Route, Routes } from 'react-router-dom';
import ProjectDetailsPage from './components/ProjectDetailsPage';

export function App() {

  return (
    <div id="container" className="text-lg text-slate-200">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="projects/:project" element={<ProjectDetailsPage />} />
        </Route>
      </Routes>
      {/* <Main /> */}
    </div>
  )
}
