import { Skeleton, Avatar, Tooltip } from '@nextui-org/react'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { SpinnerIcon, UserCheckIcon, UserPlusIcon } from '@/assets/svg';
import toast, { Toaster } from 'react-hot-toast';

const Index = ({ loaded }) => {
    const [loading, setLoading] = useState(false);
    const handleFollow = async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('Request sent');
        }, 2000)
    }

    return (
        <div className={"flex w-full p-2 rounded-lg bg-gray-100 justify-between items-center border-1 " + (loaded ? "cursor-pointer" : "")}>
            <div className="flex space-x-3 items-center">
                {!loaded && <Skeleton isLoaded={loaded} className="rounded-full h-10 w-10" />}
                {loaded && <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 text-tiny cursor-pointer" />}
                <div className='flex flex-col gap-1'>
                    {!loaded && <Skeleton isLoaded={loaded} className="h-[15px] w-[100px] rounded-lg px-[5px]" />}
                    {loaded && <p className='leading-[12px] font-semibold text-[12px]'>ratan.deep.23</p>}
                    {!loaded && <Skeleton isLoaded={loaded} className="h-[15px] w-[150px] rounded-lg px-[5px]" />}
                    {loaded && <p className='leading-[15px] text-[12px] overflow-hidden whitespace-nowrap'>Ratan Deep Singh</p>}
                </div>
            </div>
            {loaded &&
                <>{loading ?
                    <Image src={SpinnerIcon} alt="add" width={24} className='animate-spin' /> :
                    <>{true ?
                        <Tooltip content="Request sent">
                            <Image src={UserCheckIcon} alt="add" width={24} className='cursor-pointer' onClick={handleFollow} />
                        </Tooltip> :
                        <Image src={UserPlusIcon} alt="add" width={24} />
                    }</>
                }</>
            }
            <Toaster />
        </div>
    )
}

export default Index
