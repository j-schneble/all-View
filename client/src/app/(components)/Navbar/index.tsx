// "use client"

// import React from 'react'
// import { Bell, Sun, Settings, Menu, Moon } from 'lucide-react';
// import Link from 'next/link';
// import { useAppDispatch, useAppSelector } from '@/app/redux';
// import { setIsDarkMode, setIsSidebarCollapsed } from '@/app/state';
// import Image from "next/image";
// import cube from "@/../public/cube.png"


// const Navbar = () => {
//     const dispatch = useAppDispatch();
//     const isSidebarCollapsed = useAppSelector(
//         (state) => state.global.isSidebarCollapsed
//     );

//     const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

//     const toggleSidebar = () => {
//         dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//     };

//     const toggleDarkMode = () => {
//         dispatch(setIsDarkMode(!isDarkMode));
//       };



//     return (
//         <div className='flex  justify-between border-b-2 border-blueGray-800/10 pb-4   items-center w-full mb-7'>
//             {/* LEFT SIDE */}
//             <div className='flex justify-between items-center gap-5'>




//                 <div className="relative">
//                 {/* <h1 className='font-light  text-gray-950 tracking-wider text-xl'>
//     Allview Management
// </h1> */}
//             </div>
//             </div>
//              {/* RIGHT SIDE */}


//              <div className='flex justify-between text-black  items-center gap-5'>

// <input
//                         type="search"
//                         placeholder="Start type to search groups & products"
//                         className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
//                     />


//             <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
//                 <Bell className='text-gray-950 'size={18} />
//             </div>
//              <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3 '/>
//                 <div className='hidden md:flex text-black marker:justify-between items-center gap-5'>
//                     <div>
//                         <button onClick={toggleDarkMode}>
//                             {isDarkMode ? (
//                                 <Sun className="cursor-pointer text-gray-950" size={18} />
//                             ) : (
//                                 <Moon className="cursor-pointer text-gray-950" size={18} />
//                             )}

//                         </button>
//                     </div>

//                     <div className='relative'>
//                         <Bell className='cursor-pointer text-gray-900' size={20} />
//                         <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
//                             3
//                         </span>
//                     </div>



//                 </div>
//                     <Link href="/settings">
//                     <Settings className='cursor-pointer text-gray-950' size={20} />
//                     </Link>
//              </div>
//         </div>
//     )
// }

// export default Navbar
