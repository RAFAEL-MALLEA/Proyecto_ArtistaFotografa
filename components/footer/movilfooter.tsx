import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


const MovilFooter = () =>{
    return(
        <>
                <section className="bg-[#f4ece7] w-screen py-7 my-5 lg:hidden text-[#2D2926]"> 
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
                            <p>Enlaces</p>
                            <a href="/" className="font-bold"><p>Home</p></a>
                            <a href="/SobreMI" className="font-bold"><p>Sobre mi</p></a>
                            <a href="/Retratos" className="font-bold"><p>Retratos</p></a>
                            <a href="/Arte_y_ProcesoCreativo" className="font-bold"><p>Arte y proceso creativo</p></a>
                        </div>
                        </div>
                        
                            <button className="border-b"><a ></a>Sobre mi</button>
                            <button className="border-b"><a ></a>Retratos</button>
                            <button className="border-b"><a ></a>Arte y proceso creativo</button>
                            <button className="border-b"><a href="/Espacios_Atmosfera"></a>Espacios y atmosferas</button>
                            <button className="border-b"><a href="/Eventos_Participacion"></a>Eventos y participacion</button>
                            <button className="border-b"><a href="/Servicios"></a>Servicios</button>
                            <button className="border-b"><a href="/Contacto"></a>Contacto</button>
                    </div>
                </section>
        </>
    )
}

export default MovilFooter