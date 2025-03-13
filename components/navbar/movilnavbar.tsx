import React from "react";
import { TiThMenu } from "react-icons/ti";



const MovilNavbar = () =>{
    return(
        <>
            <header className="bg-[#f4ece7] w-screen py-7 shadow-2xl lg:hidden text-[#2D2926]">
                <section className=""> 
                    <div className="flex-col px-10 ">
                        <div className="justify-center text-center font-bold text-2xl ">
                            <p className="open-sauce-one">Victoria Galarza</p>
                            <p className="items-center flex justify-center"><TiThMenu/>Menu</p>
                        </div>

                        <div className="hidden gap-4">
                            <button className="border-b"><a href="/"></a>Home</button>
                            <button className="border-b"><a href="/SobreMI"></a>Sobre mi</button>
                            <button className="border-b"><a href="/Retratos"></a>Retratos</button>
                            <button className="border-b"><a href="/Arte_y_ProcesoCreativo"></a>Arte y proceso creativo</button>
                            <button className="border-b"><a href="/Espacios_Atmosfera"></a>Espacios y atmosferas</button>
                            <button className="border-b"><a href="/Eventos_Participacion"></a>Eventos y participacion</button>
                            <button className="border-b"><a href="/Servicios"></a>Servicios</button>
                            <button className="border-b"><a href="/Contacto"></a>Contacto</button>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default MovilNavbar