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


export default function HomePage() {
  return (

    <>
    

      <MainNavbar />
      <MovilNavbar />
      <main className="mx-5 lg:mx-10">
        {/* vista computador */}
        <section className="hidden lg:block ">
          
          <div className="flex gap-4 py-7">

            <div className="w-1/3">
            <Image src="/artista_1.jpg" alt="" width={590} height={500}></Image>
            </div>

            <div className="w-1/3">
            <Image src="/quinini_1.jpg" alt="" width={590} height={500}></Image>
            </div>

            <div className="w-1/3">
            <Image src="/foto_1.jpg" alt="" width={590} height={500}></Image>
            </div>
          </div>

          <div className=" flex gap-4 py-7">
            <div className="w-1/3 ">
            <Image src="/artista_6.jpg" alt="" width={590} height={700} ></Image>
            </div>
            <div className="w-1/3">
            <Image src="/artista_4.jpg" alt="" width={590} height={700} ></Image>
            </div>
            <div className="w-1/3 ">
            <Image src="/artista_5.jpg" alt="" width={590} height={700} ></Image>
            </div>
          </div>

          <div className=" flex gap-4 py-7">
            <div className="w-1/3">
            <Image src="/paisaje_2.jpg" alt="" width={590} height={700} ></Image>
            </div>
            <div className="w-1/3">
            <Image src="/paisaje_3.jpg" alt="" width={590} height={700} ></Image>
            </div>
            <div className="w-1/3">
            <Image src="/paisaje_4.jpg" alt="" width={590} height={700} ></Image>
            </div>
          </div>

          <div className=" flex gap-4  py-7">
            <div className="w-1/3">
            <Image src="/artista_7.jpg" alt="" width={590} height={700} ></Image>
            </div>
            <div className="w-1/3">
            <Image src="/artista_9.jpg" alt="" width={590} height={700} ></Image>
            </div>
            <div className="w-1/3 ">
            <Image src="/artista_10.jpg" alt="" width={590} height={700} ></Image>
            </div>
          </div>

        </section>


        {/* vista tablet */}
        <section className="flex-col hidden sm:block lg:hidden">
          
          <div className=" flex gap-4 py-7">
            <div className="w-1/2">
            <Image src="/artista_1.jpg" alt="" width={590} height={500}></Image>
            </div>
            
            <div className="w-1/2 ">
            <Image src="/quinini_1.jpg" alt="" width={580} height={500}></Image>
            </div>
          </div>

          <div className=" flex gap-4">
            <div className="w-1/2 ">
            <Image src="/foto_1.jpg" alt="" width={580} height={500}></Image>
            </div>
            <div className="w-1/2">
            <Image src="/artista_6.jpg" alt="" width={590} height={700} ></Image>
            </div>
          </div>

          <div className=" flex gap-4  py-7">
            <div className="w-1/2 ">
            <Image src="/artista_3.jpg" alt="" width={510} height={700} ></Image>
            </div>
            <div className="w-1/2 ">
            <Image src="/artista_10.jpg" alt="" width={590} height={700} ></Image>
            </div>
          </div>

          <div className=" flex gap-4">
            <div className="w-1/2">
            <Image src="/artista_7.jpg" alt="" width={590} height={700} ></Image></div>
            <div className="w-1/2 bg-amber-50 border-b h-[400px]"></div>
          </div>

          <div className=" flex gap-4  py-7">
            <div className="w-1/2 bg-amber-50 border-b h-[900px]"></div>
            <div className="w-1/2 bg-amber-50 border-b h-[900px]"></div>
          </div>

          <div className=" flex gap-4  py-7">
            <div className="w-1/2 bg-amber-50 border-b h-[400px]"></div>
            <div className="w-1/2 bg-amber-50 border-b h-[400px]"></div>
          </div>

        </section>


        {/* vista movil */}
        <section className="sm:hidden ">
          
        <div className="flex-col my-5">
            <div className=" bg-amber-50 border-b h-[400px]"></div>
            <div className="mt-7 bg-amber-50 border-b h-[400px]"></div>
          </div>

          <div className=" flex-col ">
            <div className=" bg-amber-50 border-b h-[400px]"></div>
            <div className="mt-7 bg-amber-50 border-b h-[400px]"></div>
          </div>

          <div className=" flex-col my-5">
            <div className=" bg-amber-50 border-b h-[400px]"></div>
            <div className="mt-7 bg-amber-50 border-b h-[400px]"></div>
          </div>

          <div className=" flex-col ">
            <div className=" bg-amber-50 border-b h-[400px]"></div>
            <div className="mt-7 bg-amber-50 border-b h-[400px]"></div>
          </div>

          <div className=" flex-col my-5">
            <div className=" bg-amber-50 border-b h-[400px]"></div>
            <div className="mt-7 bg-amber-50 border-b h-[400px]"></div>
          </div>

          <div className=" flex-col ">
            <div className=" bg-amber-50 border-b h-[400px]"></div>
            <div className="mt-7 bg-amber-50 border-b h-[400px]"></div>
          </div>

          <div className=" flex-col my-5">
            <div className=" bg-amber-50 border-b h-[400px]"></div>
            <div className="mt-7 bg-amber-50 border-b h-[400px]"></div>
          </div>

          <div className=" flex-col ">
            <div className=" bg-amber-50 border-b h-[400px]"></div>
            <div className="mt-7 bg-amber-50 border-b h-[400px]"></div>
          </div>

        </section>
        </main>
      <MovilFooter />
      <Mainfooter />
      <Footerfinal />

    
    </>
  );
}
