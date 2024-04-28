'use client';
import React, { useState } from 'react'
import { Input, Button, Link, Divider, Card } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { auth } from '@/utils/apis';
import { setLogin } from '@/redux/auth/authSlice';
import { capitalizeSentence } from '@/utils/utility-func';

const Index = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })

  const loginHandler = async () => {
    setError('')
    setLoading(true);
    const res = await auth.login(credentials);
    if (res.status === 200) {
      window.localStorage.setItem('token', res?.data?.token)
      dispatch(setLogin(true))
    } else if (res.status === 401) {
      setError(capitalizeSentence(res?.data?.message))
    }
    setLoading(false)
  }

  return (
    <div className='flex flex-col min-h-screen items-center justify-center gap-5'>
      <Card className='flex flex-col gap-3 w-1/4 p-5'>
        <Button
          className="text-md w-full py-6"
          color="primary" variant={"light"}
        >
          Signup to new account
        </Button>
        <div className='flex items-center justify-center relative py-3'>
          <Divider orientation="horizontal" />
          <h2 className='absolute bg-white p-2'>or</h2>
        </div>
        <Input type="email" variant={"flat"} label="Email" name="email" onChange={handleChange} value={credentials?.email} />
        <Input type="password" variant={"flat"} label="Password" name="password" onChange={handleChange} value={credentials?.password} />
        <Link href="#" className='px-2 text-[12px]'>Reset password</Link>
        <Button
          className="text-lg w-full py-6"
          color="primary" variant={loading ? "light" : "flat"}
          onPress={loginHandler}
          isLoading={loading}
        >
          {loading ? '' : 'Login'}
        </Button>
        <h6 className='text-center text-[13px] h-[15px] text-red-500'>{error && error}</h6>
      </Card>
    </div >
  )
}

export default Index
