import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import DashBoard from '../../Pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ResetPassword from '../../Pages/Login/ResetPassword';
import DashBoardLayout from '../../layout/DashBoardLayout';
import Myappointment from '../../Pages/DashBoard/MyAppointment/Myappointment';
import AllUsers from '../../Pages/DashBoard/AllUsers/AllUsers';
import AdminRoute from '../AdminRoute/AdminRoute';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/resetPassword',
                element: <ResetPassword></ResetPassword>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Myappointment></Myappointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);



export default router;