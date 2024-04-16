'use client'
import React, { useEffect, useState } from 'react'
import { Input } from "@nextui-org/react";
import { SearchIcon } from '@/assets/svg/Search';
import UserCard from './user-card';

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
                    <SearchIcon />
                }
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            {
                beingSearch || searchInput?.length > 0 ?
                    <>
                        {searchInput?.length > 0 ?
                            < UserCard loading={false} /> :
                            null
                        }
                    </> :
                    <h3 className='w-full font-medium text-left'>Suggestions</h3>
            }
        </div>
    )
}

export default Explore
