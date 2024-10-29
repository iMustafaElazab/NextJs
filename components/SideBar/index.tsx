/* eslint-disable react/display-name */
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoBag } from "react-icons/io5";


interface IProps{
    children: ReactNode;
}

export default React.memo((props:IProps) => {

    // #region Props 
    const {children}= props;
    // #endregion
    return (
        <div className='flex'>
             <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
               <div className='flex flex-col items-center'>
                <Link href="/">
               <div className='bg-purple-800 rounded-lg text-white p-4'>
               <RiDashboardHorizontalFill size={20}/>
               </div>
                </Link>
                <span className='border-b-[1px] bg-gray-200  w-full mt-2 h-1'></span>
                <Link href="/">
               <div className='rounded-lg cursor-pointer hover:bg-gray-200 p-4'>
               <RiDashboardHorizontalFill size={20}/>
               </div>
                </Link>
                <Link href="/">
               <div className='rounded-lg cursor-pointer hover:bg-gray-200 p-4'>
               <MdPerson size={20}/>
               </div>
                </Link>
                <Link href="/">
               <div className='rounded-lg cursor-pointer hover:bg-gray-200 p-4'>
               <IoBag size={20}/>
               </div>
                </Link>
                <Link href="/">
               <div className='rounded-lg cursor-pointer hover:bg-gray-200 p-4'>
               <IoIosSettings size={20}/>
               </div>
                </Link>
               </div>
             </div>
             <main className='ml-20 w-full'>{children}</main>
        </div>
    );
});

