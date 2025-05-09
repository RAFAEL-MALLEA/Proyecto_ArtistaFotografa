'use client';

import Image from "next/image";
import React from "react";
import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";
// import Bannerprincipal from "@/components/bannerPrincipal/bannerprincipal";

const images = [
  "/espacios_atmosferas/1.jpg",
  "/espacios_atmosferas/2.jpg",
  "/espacios_atmosferas/3.jpg",
  "/espacios_atmosferas/4.jpg",
  "/espacios_atmosferas/5.jpg",
  "/espacios_atmosferas/6.jpg",
  "/espacios_atmosferas/7.jpg",
  "/espacios_atmosferas/8.jpg",
  "/espacios_atmosferas/9.jpg",
  "/espacios_atmosferas/10.jpg",
  "/espacios_atmosferas/11.jpg",
  "/espacios_atmosferas/12.jpg",
  "/espacios_atmosferas/13.jpg",
  "/espacios_atmosferas/14.jpg",
  "/espacios_atmosferas/15.jpg",
  "/espacios_atmosferas/16.jpg",
  "/espacios_atmosferas/17.jpg",
  "/espacios_atmosferas/18.jpg",
  "/espacios_atmosferas/19.jpg",
  "/espacios_atmosferas/20.jpg",
  "/espacios_atmosferas/21.jpg",
  "/espacios_atmosferas/22.jpg",
  "/espacios_atmosferas/23.jpg",
  "/espacios_atmosferas/24.jpg",
  "/espacios_atmosferas/25.jpg",
  "/espacios_atmosferas/26.jpg",
  "/espacios_atmosferas/27.jpg",
  "/espacios_atmosferas/28.jpg",
  "/espacios_atmosferas/29.jpg",
  "/espacios_atmosferas/30.jpg",
  "/espacios_atmosferas/31.jpg",
  "/espacios_atmosferas/32.jpg",
  "/espacios_atmosferas/33.jpg",
  "/espacios_atmosferas/34.jpg",
  "/espacios_atmosferas/35.jpg",
  "/espacios_atmosferas/36.jpg",
  "/espacios_atmosferas/37.jpg",
  "/espacios_atmosferas/38.jpg",
  "/espacios_atmosferas/39.jpg",
  "/espacios_atmosferas/40.jpg",
  "/espacios_atmosferas/41.jpg",
  "/espacios_atmosferas/42.jpg",
  "/espacios_atmosferas/43.jpg",
  "/espacios_atmosferas/44.jpg",
  "/espacios_atmosferas/45.jpg",
  "/espacios_atmosferas/46.jpg",
  "/espacios_atmosferas/47.jpg",
  "/espacios_atmosferas/48.jpg",
  "/espacios_atmosferas/49.jpg",
  "/espacios_atmosferas/50.jpg",
  "/espacios_atmosferas/51.jpg",
//   "/espacios_atmosferas/52.jpg",
//   "/espacios_atmosferas/53.jpg",
//   "/espacios_atmosferas/54.jpg",
//   "/espacios_atmosferas/55.jpg",
//   "/espacios_atmosferas/56.jpg",
//   "/espacios_atmosferas/57.jpg",
//   "/espacios_atmosferas/58.jpg",
//   "/espacios_atmosferas/59.jpg",
//   "/espacios_atmosferas/60.jpg",
//   "/espacios_atmosferas/61.jpg",
//   "/espacios_atmosferas/62.jpg",
//   "/espacios_atmosferas/63.jpg",
//   "/espacios_atmosferas/64.jpg",
//   "/espacios_atmosferas/65.jpg",
];
export default function retratos() {
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
