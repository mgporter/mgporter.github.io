import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { C } from '../constants'
import Nav from './Nav'
import { Helmet } from 'react-helmet'

export default function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") navigate(C.PROJECT_PATH);
  }, [location.pathname, navigate])

  return (
    <div id="container" className="text-lg text-slate-200">
      <Helmet>
        <title>mgporter</title>
        <link rel="icon" type="image/png" href="/images/profile_page_icon32.png" />
      </Helmet>
      <Nav />
      <Outlet />
    </div>
  )
}