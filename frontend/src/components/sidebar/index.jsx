'use client';
import React from 'react'
import { Avatar, Popover, PopoverTrigger, PopoverContent, Button, } from "@nextui-org/react";
import { LogoutIcon, UserIcon } from '@/assets/svg';
import Image from 'next/image';
import { setLogin } from '@/redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { auth } from '@/utils/apis';

const Sidebar = () => {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        window.localStorage.removeItem('token')
        dispatch(setLogin(false))
    }

    return (
        <div className='flex flex-col items-center justify-between min-h-screen w-[60px] border-r border-gray-300 bg-gradient-to-b from-zinc-300 to-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit p-3'>
            <div>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-8 h-8 text-tiny cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className='p-1 rounded-[8px]'>
                        <div className="flex flex-col min-w-[130px]">
                            <Button
                                color="default" variant="light"
                                className='flex justify-between px-3 h-[35px] rounded-[8px]'
                                endContent={
                                    <Image src={UserIcon} alt="ico" width={18} />
                                }
                                onPress={auth.login}
                            >
                                Profile
                            </Button>
                            <Button
                                color="danger" variant="light"
                                className='flex justify-between px-3 h-[35px] rounded-[8px]'
                                endContent={
                                    <Image src={LogoutIcon} alt="ico" width={19} />
                                }
                                onPress={handleLogout}
                            >
                                Logout
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default Sidebar
