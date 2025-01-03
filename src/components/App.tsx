import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { C } from '../constants'
import Nav from './Nav'
import { Helmet } from 'react-helmet'
import { useAppStore } from './AppState'
import { useLocalStorage, useWindowSize } from 'usehooks-ts'
import { isQuickConnection } from '../utils/config'

export default function App() {

  // console.log(import.meta.env.MODE + " this is added text")
  // console.log(import.meta.env.MYVAR)

  const navigate = useNavigate();
  const location = useLocation();
  const {
    setEnableEffects,
    setNarrowWindow,
    setSlowConnection,
  } = useAppStore()

  const { width, height } = useWindowSize();
  const [enableEffectsLS] = useLocalStorage("enableEffects", true);

  useEffect(() => {
    if (location.pathname === "/") navigate(C.PROJECT_PATH);
  }, [location.pathname, navigate])

  useEffect(() => {
    setEnableEffects(enableEffectsLS)
  }, [enableEffectsLS, setEnableEffects])

  useEffect(() => {
    setSlowConnection(!isQuickConnection())
  }, [setSlowConnection])

  useEffect(() => {
    if (height > (width * 1.2) || width <= 896) {
      setNarrowWindow(true);
      setEnableEffects(false);
    } else {
      setNarrowWindow(false);
      setEnableEffects(enableEffectsLS);
    }
  }, [height, width, enableEffectsLS, setEnableEffects, setNarrowWindow])


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