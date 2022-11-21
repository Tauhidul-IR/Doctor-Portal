import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOutUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOutUser()
            .then(() => { navigate('/') })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <p className='text-red-400'>Somethings Wrong</p>
            <p className='text-3xl'>{error}</p>
            <h4>Please <button onClick={handleLogOut}>SignOut</button></h4>
        </div>
    );
};

export default DisplayError;