import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { C } from './constants'
import Nav from './components/Nav'


export default function App() {

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






// function App() {
//   const [count, setCount] = useState(0)
//   const screen = useScreen()

//   return (
//     <>
//       <div>
//         <p>screen size is {screen.width} by {screen.height}</p>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
