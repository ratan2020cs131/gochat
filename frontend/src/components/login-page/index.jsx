'use client';
import React, { useState } from 'react'
import { Input, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

const Index = ({ setLogged }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(!loading)
    setTimeout(() => {
      setLoading(false)
      window.localStorage.setItem('token', "123")
      setLogged(true)
    }, 3000)
  }

  return (
    <div className='flex flex-col min-h-screen items-center justify-center gap-5'>
      <h3 className='text-lg'>Login to your account</h3>
      <div className='flex flex-col gap-3 w-1/4'>
        <Input type="email" variant={"flat"} label="Email" />
        <Input type="password" variant={"flat"} label="Password" />
        <Button
          className="text-lg mt-5 w-full py-6"
          color="primary" variant={loading ? "light" : "flat"}
          onClick={handleLogin}
          isLoading={loading}
        >
          {loading ? 'Loading' : 'Continue'}
        </Button>
      </div>
    </div >
  )
}

export default Index
