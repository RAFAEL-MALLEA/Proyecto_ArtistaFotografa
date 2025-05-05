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
      <main>

          <div className="w-1/4 flex">
            <img src="/home/20.jpg" alt="" loading="lazy"></img>
            <img src="/home/34.jpg" alt="" loading="lazy"></img>
            <img src="/home/1.jpg" alt="" loading="lazy"></img>
            <img src="/home/2.jpg" alt="" loading="lazy"></img>
          </div>
          <div className="w-1/4 flex">
            <img src="/home/3.jpg" alt="" loading="lazy" ></img>
            <img src="/home/4.jpg" alt="" loading="lazy" ></img>
            <img src="/home/5.jpg" alt="" loading="lazy" ></img>
            <img src="/home/6.jpg" alt="" loading="lazy" ></img>
          </div>
          <div className="w-1/4 flex">
            <img src="/home/7.jpg" alt="" loading="lazy"></img>
            <img src="/home/12.jpg" alt="" loading="lazy"></img>
            <img src="/home/9.jpg" alt="" loading="lazy"></img>
            <img src="/home/10.jpg" alt="" loading="lazy"></img>
          </div>
          <div className="w-1/4 flex">
            <img src="/home/11.jpg" alt="" loading="lazy"></img>
            <img src="/home/8.jpg" alt="" loading="lazy"></img>
            <img src="/home/13.jpg" alt="" loading="lazy"></img>
            <img src="/home/22.jpg" alt="" loading="lazy"></img>
          </div>
          <div className="w-1/4 flex">
            <img src="/home/15.jpg" alt="" loading="lazy"></img>
            <img src="/home/16.jpg" alt="" loading="lazy"></img>
            <img src="/home/17.jpg" alt="" loading="lazy"></img>
            <img src="/home/18.jpg" alt="" loading="lazy"></img>
          </div>
          <div className="w-1/4 flex">
            <img src="/home/19.jpeg" alt="" loading="lazy"></img>
            <img src="/home/21.jpg" alt="" loading="lazy"></img>
            <img src="/home/14.jpg" alt="" loading="lazy"></img>
            <img src="/home/23.jpg" alt="" loading="lazy"></img>
          </div>
          <div className="w-1/4 flex">
            <img src="/home/25.jpg" alt="" loading="lazy"></img>
            <img src="/home/26.jpg" alt="" loading="lazy"></img>
            <img src="/home/27.jpg" alt="" loading="lazy"></img>
            <img src="/home/28.jpg" alt="" loading="lazy"></img>
          </div>
          <div className="w-1/4 flex">
            <img src="/home/29.jpg" alt="" loading="lazy"></img>
            <img src="/home/30.jpg" alt="" loading="lazy"></img>
            <img src="/home/32.jpg" alt="" loading="lazy"></img>
            <img src="/home/31.jpg" alt="" loading="lazy"></img>
          </div>
          <div className="w-1/4 flex">
            <img src="/home/24.jpg" alt="" loading="lazy"></img>
            <img src="/home/33.jpg" alt="" loading="lazy"></img>
          </div>
        </main>
      <Mainfooter />
    </>
  );
}
