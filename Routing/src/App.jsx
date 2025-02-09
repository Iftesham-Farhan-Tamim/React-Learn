import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './components/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App


// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element:
//         <div>
//           <Navbar />
//           <Home />
//         </div>
//     },

//     {
//       path: "/about",
//       element:
//         <div>
//           <Navbar />
//           <About />
//         </div>
//     },

//     {
//       path: "/dashboard",
//       element:
//         <div>
//           <Navbar />
//           <DashBoard />
//         </div>,
//       children: [
//         {
//           path: "courses",
//           element: <Courses />
//         },
//         {
//           path: "mock-tests",
//           element: <MockTest />
//         },
//         {
//           path: "reports",
//           element: <Reports />
//         },
//       ]
//     },

//     {
//       path: "/student/:id",
//       element: (
//         <div>
//           <Navbar />
//           <ParamComp />
//         </div>
//       ),
//     },

//     {
//       path: "*",
//       element: <NotFound />
//     }
//   ]
// )