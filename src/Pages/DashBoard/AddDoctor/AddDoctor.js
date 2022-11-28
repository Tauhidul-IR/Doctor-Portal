import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Share/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgBB_KEY;
    const navigate = useNavigate();
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-psi.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })


    const handleAddDoctor = (data) => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    //save doctor to the DB
                    fetch('https://doctor-portal-server-psi.vercel.app/doctors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors')
                        })
                }
            })


    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <h2>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                {/* --------------Name---------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-bold">Name</span></label>
                    <input
                        {...register("name", {
                            required: 'Name Must Given.'
                        })}
                        type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}

                </div>
                {/* --------------Name---------------------------------- */}




                {/* --------------email---------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-bold">Email</span></label>
                    <input
                        {...register("email", {
                            required: "Email is Required"
                        })}
                        type="email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                {/* --------------email---------------------------------- */}





                {/* --------------Specialty---------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-bold">Specialty</span></label>
                    <select {...register("specialty", {
                        required: "Email is Required"
                    })} className="select select-bordered w-full max-w-xs">

                        {
                            specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty?.name}</option>)
                        }
                    </select>

                </div>
                {/* ----------
                {/* --------------Specialty---------------------------------- */}


                {/* --------------Upload photo---------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-bold">Photo</span></label>
                    <input
                        {...register("image", {
                            required: 'Photo is required.'
                        })}
                        type="file" className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img?.message}</p>}

                </div>
                {/* --------------Upload photo---------------------------------- */}


                {/* --------------Submit Btn---------------------------------- */}
                <input className='btn btn-neutral w-full mt-5' type="submit" value={'Add Doctor'} />
                {/* display Error */}
                <div>
                    {
                        // signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                </div>
            </form>
        </div>
    );
};


/**
 * Three place to store images
 * 1. Third party image hosting
 * 2. file system of your server
 * 3. mongoDB 
 */

export default AddDoctor;