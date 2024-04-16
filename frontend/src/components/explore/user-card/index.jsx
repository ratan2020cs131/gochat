import { Skeleton } from '@nextui-org/react'
import React from 'react'

const Index = ({ loading }) => {

    return (
        <div className="flex w-full p-2 rounded-lg bg-gray-100 items-center border-1">
            <div className="flex space-x-3  items-center">
                <Skeleton isLoaded={loading} className="rounded-full h-10 w-10" />
                <div className='space-y-1'>
                    <Skeleton isLoaded={loading} className="h-[11px] w-[110px] rounded-lg" />
                    <Skeleton isLoaded={loading} className="h-[11px] w-[140px] rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default Index
