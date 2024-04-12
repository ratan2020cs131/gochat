'use client'
import React, { useEffect, useState } from 'react';
import LoginComponent from '@/components/login-page/index';
import Loader from '@/components/loader/loader';

const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(undefined)
    const checkToken = () => {
        const token = window.localStorage.getItem('token');
        if (token)
            setLogged(true)
        else
            setLogged(false)
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
                            <LoginComponent setLogged={setLogged} /> :
                            (children)
                        }
                    </>
            }
        </>
    )
}

export default AuthProvider
