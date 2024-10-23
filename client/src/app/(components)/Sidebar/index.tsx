"use client"

import React from 'react';
import { Archive, CircleDollarSign, Clipboard, Menu, SlidersHorizontal, User } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/app/state';
import {
    Layout,
    LucideIcon,
  } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import cube from "@/../public/cube.png"
import open from "@/../public/openside.png"
import close from "@/../public/closeside.png"

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
  }

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
  }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href}>
        <div
          className={`cursor-pointer border-t border-b border-gray-400/10 bg-gray-100 flex items-center ${
            isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          }
          hover:text-blue-500 hover:bg-zinc-200/90 gap-3 transition-colors ${
            isActive ? "border-2 border-r-blueGray-800 rounded " : "bg-gray-100"
          }
        }`}
        >
          <Icon className={`w-6 h-6  my-6 ${
          isActive ? "text-zinc-800" :"text-zinc-600"
          }`}
          />

          <span
            className={`${
              isCollapsed ? "hidden" : "block"
            } font-medium text-gray-700`}
          >
            {label}
          </span>
        </div>
      </Link>
    );
  };

  const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
      (state) => state.global.isSidebarCollapsed
    );

    const toggleSidebar = () => {
      dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col ${
      isSidebarCollapsed ? "w-0 md:w-20" : "w-72 md:w-64"
    } bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-200 border-zinc-300 border-r-2 transition-all duration-300 overflow-hidden h-full shadow-md z-40`;


  return (
    <div className={sidebarClassNames}>
        {/* TOP LOGO */}
        <div
        className={`flex  gap-3 justify-between md:justify-normal items-center pt-8 ${
            isSidebarCollapsed ? "px-5" : "px-8"
          }`}
      >

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
        <Image
            src={cube}
            alt="db logo"
            width={33}
            height={33}
/>



        </div>
         {/* LINKS */}
         <div className='flex-grow mt-8'>
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

         </div>

        {/* FOOTER */}
        <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
            <p className='text-center text-xs text-gray-500'>&copy; 2024 stockOver</p>
        </div>

    </div>
  )
}

export default Sidebar
