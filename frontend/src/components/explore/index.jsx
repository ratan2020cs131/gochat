'use client'
import React, { useEffect, useState } from 'react'
import { Input } from "@nextui-org/react";
import { SearchIcon } from '@/assets/svg/index';
import UserCard from './user-card';
import Image from 'next/image';

const Explore = () => {
    const [beingSearch, setBeingSearch] = useState();
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className='flex flex-col items-center min-h-screen w-[300px] gap-2 border-r border-grey-400 p-2'>
            <Input
                type="text"
                variant={"flat"}
                placeholder='Search people'
                onFocus={() => setBeingSearch(true)}
                onBlur={() => setBeingSearch(false)}
                startContent={
                    <Image src={SearchIcon} alt="ico" width={20} />
                }
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            {
                searchInput?.length > 0 ?
                    <>
                        {searchInput?.length > 0 ?
                            < UserCard loaded={false} /> :
                            null
                        }
                    </> :
                    < UserCard loaded={true} />
            }
        </div>
    )
}

export default Explore
