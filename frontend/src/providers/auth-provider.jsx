'use client'
import React, { useEffect, useState } from 'react';
import LoginComponent from '@/components/login-page/index';
import Loader from '@/components/loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '@/redux/auth/authSlice';
const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    // const [logged, setLogin] = useState(undefined)
    const logged = useSelector(state => state.auth.isLogged);
    const checkToken = () => {
        console.log(logged);
        const token = window.localStorage.getItem('token');
        if (token)
            dispatch(setLogin(true))
        else
            dispatch(setLogin(false))
    }
    useEffect(() => {
        checkToken();
    }, [])

    return (
        <>
            {
                logged === undefined ?
                    <div className='flex flex-col items-center justify-center min-h-screen'>
                        <Loader />
                        <h3 className='text-xl'>Loading</h3>
                    </div> :
                    <>
                        {logged === false ?
                            <LoginComponent setLogin={setLogin} /> :
                            (children)
                        }
                    </>
            }
        </>
    )
}

export default AuthProvider
