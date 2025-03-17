'use client';

import Navbar from "@/components/navbar/mainnavbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";
import MovilNavbar from "@/components/navbar/movilnavbar";
import MovilFooter from "@/components/footer/movilfooter";
import Footerfinal from "@/components/footer/footerfinal";
// import Bannerprincipal from "@/components/bannerPrincipal/bannerprincipal";


import Router from 'next/router';
export default function HomePage() {
  return (

    <>
    

      <MainNavbar />
      <MovilNavbar />
      {/* <Bannerprincipal />  */}
      <main className="mx-16 bg-[#f4ece7] text-[#2D2926]" >

      

        {/* vista computador */}
        <section  className="hidden lg:block ">
          

            <div className="flex py-2">


            <div className="w-1/4"><Image src="/home/7.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/5.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/3.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/4.jpg" alt="" width={590} height={500}></Image></div>

            </div>

            <div className="flex py-2">

            <div className="w-1/4 "><Image src="/home/2.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/10.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/12.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/14.jpg" alt="" width={590} height={500}></Image></div>

            </div>

            <div className="flex py-2">

            <div className="w-1/4 "><Image src="/home/17.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/18.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/1.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/16.jpg" alt="" width={590} height={500}></Image></div>
            
            </div>

            <div className="flex py-2">
            
            <div className="w-1/4"><Image src="/home/29.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/25.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/31.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/15.jpg" alt="" width={590} height={500}></Image></div>

            </div>

            <div className="flex py-2">
            
            <div className="w-1/4"><Image src="/home/23.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/26.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/20.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/28.jpg" alt="" width={590} height={500}></Image></div>
            
            </div>



            <div className="flex">
            
            <div className="w-1/4 "><Image src="/home/13.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4"><Image src="/home/8.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/6.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/11.jpg" alt="" width={590} height={500}></Image></div>
            
            </div>

            <div className="flex">
            
            <div className="w-1/4 "><Image src="/home/22.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/27.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/30.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/32.jpg" alt="" width={590} height={500}></Image></div>
            
            </div>

            <div className="flex ">
            
            <div className="w-1/4 "><Image src="/home/21.jpg" alt="" width={590} height={500}></Image></div>
            
            <div className="w-1/4 "><Image src="/home/19.jpeg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/9.jpg" alt="" width={590} height={500}></Image></div>
            <div className="w-1/4 "><Image src="/home/24.jpg" alt="" width={590} height={500}></Image></div>
            
            </div>




        </section>


        {/* vista tablet */}
        <section className="hidden sm:block lg:hidden">
          
          

        </section>


        {/* vista movil */}
        <section className="sm:hidden ">
          
        

        </section>
        </main>
      <MovilFooter />
      <Mainfooter />
      <Footerfinal />

    
    </>
  );
}
