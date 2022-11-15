import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const ResetPassword = () => {
    const [userEmail, setUserEmail] = useState('')
    const { resetPassword } = useContext(AuthContext);
    const handleEmail = event => {
        const email = event.target.value
        console.log(email)
        setUserEmail(email)
    }

    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                alert('send email')
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <form className='h-96 text-center pt-24'>
                <h2 className='text-3xl mb-7 font-bold'>Reset Password</h2>
                <input onBlur={handleEmail} name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br />
                <input onClick={handleReset} type="submit" className='btn btn-secondary mt-5' value={'Reset password'} />
            </form>
        </div>
    );
};

export default ResetPassword;