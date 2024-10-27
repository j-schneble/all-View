"use client"

import React, { useEffect } from 'react';

import { useState } from 'react'
import StoreProvider, { useAppSelector } from './redux';
import Container from './(components)/Container/Container';
const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    });




    return (
        <Container>
      <div
        className={`${
            isDarkMode ? "dark" : "light"
        } flex bg-white text-zinc-950 w-full min-h-screen`}
        >

          <main className='flex flex-col w-full bg-white px-4 min-h-screen' >

               {children}
               </main>
            </div>
            </Container>
    )
  };


const DashboardWrapper = ({children} : {children: React.ReactNode}) => {
  return (

    <StoreProvider>
   <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>


  )
};

export default DashboardWrapper
