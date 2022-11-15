import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../Share/Navbar/Navbar';
import DashBoardTable from './DashBoardTable';

const DashBoard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section class="grid grid-cols-5 gap-4 ">
                <div class=" text-center">Appointment </div>
                <div class="col-span-4 bg-slate-200">
                    <div className='px-20 pt-10'>
                        <div className='flex justify-between items-center '>
                            <h1 className='text-2xl font-bold'>My Appointment</h1>
                            <button className="btn btn-outline">Date</button>
                        </div>
                        <div className='mt-10'>
                            <DashBoardTable></DashBoardTable>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashBoard;