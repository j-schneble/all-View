// "use client"

// import React from 'react';
// import { Archive, CircleDollarSign, Clipboard, Menu, SlidersHorizontal, User } from 'lucide-react';
// import { useAppDispatch, useAppSelector } from '@/app/redux';
// import { setIsSidebarCollapsed } from '@/app/state';
// import {
//     Layout,
//     X,
//     LucideIcon,
//   } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import cube from "@/../public/cube.png"
// import open from "@/../public/openside.png"
// import close from "@/../public/closeside.png"

// interface SidebarLinkProps {
//     href: string;
//     icon: LucideIcon;
//     label: string;
//     isCollapsed: boolean;
//   }

// const SidebarLink = ({
//     href,
//     icon: Icon,
//     label,
//     isCollapsed,
//   }: SidebarLinkProps) => {
//     const pathname = usePathname();


//     return (
//         <Link href={href}>
//         <div
//           className='cursor-pointer border-t border-b border-gray-400/10 bg-gray-100 flex items-center '

//         >
//           <Icon className='w-6 h-6  my-6 '
//           />

//           <span
//             className={`${
//               isCollapsed ? "hidden" : "block"
//             } font-medium text-gray-700`}
//           >
//             {label}
//           </span>
//         </div>
//       </Link>
//     );
//   };

//   const Sidebar = () => {
//     const dispatch = useAppDispatch();
//     const isSidebarCollapsed = useAppSelector(
//       (state) => state.global.isSidebarCollapsed
//     );

//     const toggleSidebar = () => {
//       dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//     };

//     const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
//     transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-black
//     ${isSidebarCollapsed ? "w-0 hidden" : "w-44"}
//   `;


//   return (
//     <div className={sidebarClassNames}>
//         {/* TOP LOGO */}

//       <div className="flex h-[100%] w-full flex-col justify-start">


{/* className={`${
            isSidebarCollapsed ? "hidden" : "block"
        } rounded w-8`} /> */}


        {/* <Image
            src={close}
            alt="db logo"
            width={33}
            height={33}
            onClick={toggleSidebar}
            className={`${
            isSidebarCollapsed ? "open" : "hidden"
        } `}/>
            <Image
            src={open}
            alt="db logo"
            width={33}
            height={33}
            onClick={toggleSidebar}
            className={`${
            isSidebarCollapsed ? "hidden" : "block"
        } `}

       /> */}
         {/* <div className="z-50 flex min-h-[56px] w-44 items-center justify-between bg-black px-6 pt-3 dark:bg-black">
         {isSidebarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() => {
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
              }}
            >
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}



        </div>
         {/* LINKS */}
         {/* <div className='flex-grow mt-8'>
            <SidebarLink
            href="/dashboard"
            icon={Layout}
            label="Dashboard"
            isCollapsed={isSidebarCollapsed}
            />
              <SidebarLink
            href="/products"
            icon={Clipboard}
            label="Products"
            isCollapsed={isSidebarCollapsed}
            />
              <SidebarLink
            href="/inventory"
            icon={Archive}
            label="Inventory"
            isCollapsed={isSidebarCollapsed}
            />
              <SidebarLink
            href="/expenses"
            icon={CircleDollarSign}
            label="Expenses"
            isCollapsed={isSidebarCollapsed}
            />
              <SidebarLink
            href="/users"
            icon={User}
            label="Users"
            isCollapsed={isSidebarCollapsed}
            />
              <SidebarLink
            href="/settings"
            icon={SlidersHorizontal}
            label="Settings"
            isCollapsed={isSidebarCollapsed}
            />

         </div> */}

        {/* FOOTER */}
        {/* <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
            <p className='text-center text-xs text-gray-500'>&copy; 2024 stockOver</p>
        </div>
        </div>
    </div>
  )
}

export default Sidebar */}
