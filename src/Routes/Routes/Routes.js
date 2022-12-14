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
import AddDoctor from '../../Pages/DashBoard/AddDoctor/AddDoctor';
import ManageDoctors from '../../Pages/DashBoard/ManageDoctors/ManageDoctors';
import Payment from '../../Pages/DashBoard/Payment/Payment';
import DisplayError from '../../Share/DisplayError/DisplayError';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Myappointment></Myappointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute> <ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctor-portal-server-psi.vercel.app/bookings/${params.id}`)
            }
        ]
    }
]);



export default router;