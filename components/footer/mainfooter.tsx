import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const MainFooter = () =>{
    return(
        <>
                <section className="bg-slate-100 w-screen py-7 hidden lg:block"> 
                    <div className="px-10 flex-col">
                        <div className=" gap-4 text-2xl">Victoria Galarza - VG Artist</div>
                        <div className="sm:flex gap-11">
                        <div className="my-5 ">
                            <p className="font-bold ">Mis Redes Sociales</p>
                            <div className="flex gap-5 items-center">
                                <FaInstagram className=""/><a href="https://www.instagram.com/fragilsosiego/" className=""><p>Instagram</p></a>
                            </div>
                            <div className="flex gap-5 items-center">
                                <CiFacebook className=""/><a href="https://www.facebook.com/victoria.galarza.944" className=""><p>Facebook</p></a>
                            </div>
                        </div>

                        <div className="my-5">
                            <p className="font-bold">Enlaces</p>
                            <a href="#" className=""><p>-------------</p></a>
                            <a href="#" className=""><p>-------------</p></a>
                            <a href="#" className=""><p>-------------</p></a>
                            <a href="#" className=""><p>-------------</p></a>
                        </div>
                        </div>
                        
                    </div>
                </section>
        </>
    )
}

export default MainFooter