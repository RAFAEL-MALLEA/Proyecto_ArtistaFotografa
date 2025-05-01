'use client';

import Image from "next/image";
import React from "react";
import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";
// import Bannerprincipal from "@/components/bannerPrincipal/bannerprincipal";


export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <main className="grid-cols-4 grid-flow-row-dense grid">
            <Image src="/home/20.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/34.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/1.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/2.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/3.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/4.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/5.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/6.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/7.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/12.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/9.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/10.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/11.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/8.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/13.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/22.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/15.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/16.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/17.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/18.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/19.jpeg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/21.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/14.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/23.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/25.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/26.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/27.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/28.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/29.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/30.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/32.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/31.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/24.jpg" alt="" loading="lazy" width={590} height={500}></Image>
            <Image src="/home/33.jpg" alt="" loading="lazy" width={590} height={500}></Image>
        </main>
      <Mainfooter />
    </>
  );
}
