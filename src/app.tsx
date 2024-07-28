import Nav from './components/Nav';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'preact/hooks';
import { C } from './constants';

export function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") navigate(C.PROJECT_PATH);
  }, [])

  return (
    <div id="container" className="text-lg text-slate-200">
      <Nav />
      <Outlet />
    </div>
  )
}
