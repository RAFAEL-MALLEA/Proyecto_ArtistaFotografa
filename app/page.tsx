'use client';

import Image from "next/image";
import React from "react";
import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";
import Link from "next/link";
// import Bannerprincipal from "@/components/bannerPrincipal/bannerprincipal";

const images = [
  "/home/1.jpg",
  "/home/2.jpg",
  "/home/3.jpg",
  "/home/4.jpg",
  "/home/5.jpg",
  "/home/6.jpg",
  "/home/7.jpg",
  "/home/8.jpg",
  "/home/9.jpg",
  "/home/10.jpg",
  "/home/11.jpg",
  "/home/12.jpg",
  "/home/13.jpg",
  "/home/14.jpg",
  "/home/15.jpg",
  "/home/16.jpg",
  "/home/17.jpg",
  "/home/18.jpg",
  "/home/19.jpeg",
  "/home/20.jpg",
  "/home/21.jpg",
  "/home/22.jpg",
  "/home/23.jpg",
  "/home/24.jpg",
  "/home/25.jpg",
  "/home/26.jpg",
  "/home/27.jpg",
  "/home/28.jpg",
  "/home/29.jpg",
  "/home/30.jpg",
  "/home/31.jpg",
  "/home/32.jpg",
  "/home/33.jpg",
  "/home/34.jpg",
];
export default function HomePage() {
  return (



    <>
    <MainNavbar />
    <main>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <div key={i} className="break-inside-avoid">
            <Image
              src={src}
              alt={`Imagen ${i}`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      </main>
  <Mainfooter />
      </> 
      
    );
  }
