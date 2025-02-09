import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import DashBoard from './DashBoard';
import Navbar from './Navbar';
import ParamComp from './ParamComp';
import Courses from './child/Courses';
import MockTest from './child/MockTest';
import Reports from './child/Reports';
import NotFound from './NotFound';

// Define the router configuration
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <div>
                    <Navbar />
                    <Home />
                </div>
            ),
        },

        {
            path: '/about',
            element: (
                <div>
                    <Navbar />
                    <About />
                </div>
            ),
        },

        {
            path: '/dashboard',
            element: (
                <div>
                    <Navbar />
                    <DashBoard />
                </div>
            ),
            children: [
                {
                    path: 'courses',
                    element: <Courses />,
                },
                {
                    path: 'mock-tests',
                    element: <MockTest />,
                },
                {
                    path: 'reports',
                    element: <Reports />,
                },
            ],
        },

        {
            path: '/student/:id',
            element: (
                <div>
                    <Navbar />
                    <ParamComp />
                </div>
            ),
        },

        {
            path: '*',
            element: <NotFound />,
        },
    ]
);

export default router;