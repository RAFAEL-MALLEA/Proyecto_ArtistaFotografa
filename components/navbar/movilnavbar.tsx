import React from "react";
import { TiThMenu } from "react-icons/ti";



const MovilNavbar = () =>{
    return(
        <>
            <header className="bg-slate-100 w-screen py-7 shadow-2xl lg:hidden ">
                <section className=""> 
                    <div className="flex-col px-10">
                        <div className="justify-center text-center font-bold text-2xl">
                            <p className="">VG Artist</p>
                            <TiThMenu className="sm:hidden my-4"/>
                        </div>

                        <div className="hidden sm:flex gap-4">
                            <button className="border-b">Quien Soy</button>
                            <button className="border-b">Mis proyectos</button>
                            <button className="border-b">Tienda</button>
                            <button className="border-b">-------------</button>
                            <button className="border-b">-------------</button>
                            <button className="border-b">-------------</button>
                            <button className="border-b">-------------</button>
                            <button className="border-b">-------------</button>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default MovilNavbar