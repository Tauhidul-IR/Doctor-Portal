import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Share/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Share/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState('');

    const closeModal = () => {
        setDeletingDoctor(null);
    }

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctor-portal-server-psi.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })


    const handleDeleteDoctor = doctor => {
        console.log(doctor);
        fetch(`https://doctor-portal-server-psi.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    refetch();
                    toast.success(`Doctor ${doctor.name} Delete SuccessFully`)
                }
            })

    }


    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(doctors)
    return (
        <div>
            <h1 className='text-xl'>Manage Doctors {doctors?.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {doctor.name}
                                </td>
                                <td>{doctor.email}</td>
                                <th>
                                    {doctor.specialty}
                                </th>
                                <th>
                                    {/* The button to open modal */}
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs hover:bg-red-900 bg-red-600 text-white">Delete</label>

                                </th>
                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure You want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    successBtnName="Delete"
                    modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;