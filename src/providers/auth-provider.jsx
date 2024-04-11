'use client'
import React, { useEffect, useState } from 'react';
import LoginComponent from '@/components/login-page/index';

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
                    <div className='flex items-center justify-center min-h-screen'>
                        <p>Loading</p>
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
