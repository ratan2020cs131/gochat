import React from 'react'
import { Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";


const Sidebar = () => {
    return (
        <div className='flex flex-col items-center justify-between min-h-screen w-[60px] border-r border-gray-300 bg-gradient-to-b from-zinc-300 to-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit p-3'>
            <div>
                <Dropdown>
                    <DropdownTrigger>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-8 h-8 text-tiny cursor-pointer" />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">New file</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Sidebar
