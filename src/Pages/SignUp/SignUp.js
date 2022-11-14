import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)

    const handleSignUp = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }





    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>Sign Up</h2>
                {/* -----------------Start Form------------------ */}
                <form onSubmit={handleSubmit(handleSignUp)}>
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





                    {/* --------------password---------------------------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Password</span></label>
                        <input
                            {...register("password", {
                                required: "Password is Required",
                                minLength: { value: 6, message: 'Password must be 6 characters or more.!!!' },
                                // regular expression
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password Must be Strong" }
                            })}
                            type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    {/* --------------password---------------------------------- */}


                    {/* --------------Submit Btn---------------------------------- */}
                    <input className='btn btn-neutral w-full mt-5' type="submit" value={'Sign Up'} />
                </form>
                {/* -------------End Form-------------- */}




                <p className='font-semibold my-5'>Already have an Account? <Link to={'/login'} className='text-secondary'>Login</Link></p>
                <div className="divider">OR</div>
                {/* -------------Google Sign in-------------- */}
                <button className='btn btn-outline w-full my-4'>CONTINUE WITH GOOGLE</button>
                {/* -------------Google Sign in-------------- */}
            </div>
        </div>
    );
};

export default SignUp;