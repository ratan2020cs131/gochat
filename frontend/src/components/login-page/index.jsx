'use client';
import React, { useState } from 'react'
import { Input, Button, Link, Divider, Card } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { auth } from '@/utils/apis';


const Index = ({ setLogin }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(!loading)
    setTimeout(() => {
      setLoading(false)
      window.localStorage.setItem('token', "123")
      dispatch(setLogin(true))
    }, 1000)
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
        <Input type="email" variant={"flat"} label="Email" />
        <Input type="password" variant={"flat"} label="Password" />
        <Link href="#" className='px-2'>Reset password</Link>
        <Button
          className="text-lg w-full py-6"
          color="primary" variant={loading ? "light" : "flat"}
          onPress={auth.login}
          isLoading={loading}
        >
          {loading ? 'Loading' : 'Login'}
        </Button>
      </Card>
    </div >
  )
}

export default Index
