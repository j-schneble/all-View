
import React from 'react'
import { useState, Fragment } from 'react'
import { Transition, Dialog, DialogPanel, DialogBackdrop,} from '@headlessui/react'
import splitbee from '@splitbee/web'
import Link from 'next/link'
import { Bell, Sun, Settings,  Moon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/app/state';
import { MdDashboard, MdOutlineInventory } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { FaSitemap } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import {
    Layout,
    LucideIcon,
  } from "lucide-react";

interface IContainerProps {
    back?: {
      href: string
      label: string
      icon: LucideIcon;
    }
    footer?: boolean
    showNav?: boolean
    projectsNav?: string
    children?: React.ReactNode
    title?: string
    description?: string
    image?: string

}


  export default function Container({
    footer = true,
    back,
    projectsNav = '',
    showNav = true,
    children,
    title = '',
    description = 'Allview.',
    image = '',
    ...props
  }: IContainerProps): JSX.Element {
    const [open, setOpen] = useState(false)

    const meta = {
      title,
      description,
      image,
      type: 'website',
      props,
    }
    splitbee.init()

    let [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
      };



    return (

      <>
      <div className='bg-white '>
       <div className='flex border-b-2 border-zinc-800/80 justify-between bg-white   items-center w-full mb-7'>
            {/* LEFT SIDE */}
            <div className='flex justify-between items-center gap-5'>
            <button className='sticky w-7 h-7 bg-black p-2 text-white text-lg rounded-full ml-12 '
                onClick={() => setIsOpen(true)}> - </button>
                <Dialog
                    open={isOpen} onClose={() => setIsOpen(false)}
                    transition
                    className="fixed inset-0 z-10 itesm-center text-center p-4 pt-[20vh] overflow-y-auto'"
                    >
                    <DialogBackdrop className="fixed flex items-center justify-center inset-0 bg-black/30" />
                        <div className="fixed inset-0 items-center justify-center bg-black/20 z-[1] top-2 md:top-4  py-2 rounded-md  flex text-center p-4">
                            <DialogPanel className=" flex bg-black/70 rounded border border-white/50 p-6 items-center justify-evenly text-center ">
                            <div className='flex flex-col  text-lg text-white mt-4'>
                            <Link
                            href="/dashboard">

                            <p className='py-1 hover:bg-white/10 px-6 flex shadow antialiased font-normal rounded p-2 gap-2  mb-2'><MdDashboard  size={20} /> Dashboard</p>
                            </Link>
                            <Link
                            href="/products">
                            <p className='py-1 hover:bg-white/10 px-6 flex shadow antialiased font-normal rounded p-2 gap-2  mb-2'><FaSitemap size={20} /> Products</p>
                            </Link>
                            <Link
                            href="/inventory">
                            <p className='py-1 hover:bg-white/10 px-6 flex shadow antialiased font-normal rounded p-2 gap-2 mb-2'><MdOutlineInventory size={20} /> Inventory</p>
                            </Link>
                            <Link
                            href="/expenses">
                            <p className='py-1 hover:bg-white/10 px-6 flex shadow antialiased font-normal rounded gap-2  p-2 mb-2'><FaMoneyBillTransfer size={20} /> Expenses</p>
                            </Link>
                            <Link
                            href="/users">
                            <p className='py-1 hover:bg-white/10 px-6 flex shadow antialiased font-normal rounded gap-2 p-2 mb-2'><HiUsers size={20} /> Users</p>
                            </Link>
                                <div className=' mt-6 text-red-500 text-xl '>
                                <button
                               onClick={() => setIsOpen(false)}

                                >
                                  <p className=''>
                                  <IoMdCloseCircle size={20} />
                                </p>
                                </button>
                             </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>

                {/* <h1 className='font-light  text-gray-950 tracking-wider text-xl'>
    Allview
</h1> */}

            </div>
             {/* RIGHT SIDE */}


            <div className='flex mr-8 justify-between text-black my-6 items-center gap-10'>
            <div>
                <h1 className='font-normal lg:text-xl md:text-lg sm:text-lg antialiased  text-gray-950 tracking-wider text-xl'>
                Allview Mgmt
                </h1>
            </div>
             <hr
             className='w-0 h-7 border border-solid border-l border-gray-300 mx-3 '
             />
            <div className='hidden md:flex text-black marker:justify-between items-center gap-10'>
                <div>
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <Sun className="cursor-pointer text-gray-950" size={18} />
                        ) : (
                            <Moon className="cursor-pointer text-gray-950" size={18} />
                        )}
                    </button>
                </div>
                    <div className='relative'>
                        <Bell className='cursor-pointer text-black' size={20} />
                        <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
                            3
                        </span>
                    </div>
                </div>
                    <Link href="/settings">
                    <Settings className='cursor-pointer text-gray-950' size={20} />
                    </Link>
             </div>
        </div>
            {children}
            </div>
      </>
    )
  }
