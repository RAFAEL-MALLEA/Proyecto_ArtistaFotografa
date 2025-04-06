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

const SobreMi = () => {
    return (
        <>
            <Navbar />
            <main className="py-2">
                <section>
                    <div className="flex justify-center">
                        <div className=""><Image src="/SobreMi/quinini_1.jpg" alt="" width={590} height={500}></Image></div>

                        <div className="w-1/2">
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, assumenda illum. Nihil sed laborum quaerat culpa, architecto voluptates sequi commodi quos quo saepe ea ducimus ad, doloribus deleniti aspernatur dicta.
                            </p>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat totam repellendus eius non, soluta, enim voluptas laudantium tenetur dolor quia ab maiores, facilis quasi voluptatem officia? Ducimus, quia odit!
                            </p>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, assumenda illum. Nihil sed laborum quaerat culpa, architecto voluptates sequi commodi quos quo saepe ea ducimus ad, doloribus deleniti aspernatur dicta.
                            </p>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat totam repellendus eius non, soluta, enim voluptas laudantium tenetur dolor quia ab maiores, facilis quasi voluptatem officia? Ducimus, quia odit!
                            </p>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, assumenda illum. Nihil sed laborum quaerat culpa, architecto voluptates sequi commodi quos quo saepe ea ducimus ad, doloribus deleniti aspernatur dicta.
                            </p>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat totam repellendus eius non, soluta, enim voluptas laudantium tenetur dolor quia ab maiores, facilis quasi voluptatem officia? Ducimus, quia odit!
                            </p>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, assumenda illum. Nihil sed laborum quaerat culpa, architecto voluptates sequi commodi quos quo saepe ea ducimus ad, doloribus deleniti aspernatur dicta.
                            </p>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat totam repellendus eius non, soluta, enim voluptas laudantium tenetur dolor quia ab maiores, facilis quasi voluptatem officia? Ducimus, quia odit!
                            </p>
                        </div>

                    </div>
                </section>
            </main>
        <MovilFooter />
        <Mainfooter />
        <Footerfinal />

    
    </>
    );
};

export default SobreMi;