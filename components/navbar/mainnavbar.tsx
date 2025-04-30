import React from "react";
import Link from "next/link";

const Navbar = () =>{
    return(
        <>
            <header className=" py-7 hidden lg:block ">
            <nav>
                <section className=""> 
                    <div className="flex justify-between px-16 md:flex-col xl:flex-row">
                        <h1 className="flex font-bold text-2xl text-center justify-center open-sauce-one">Victoria Galarza <p className="justify-center items-center">-</p>
                        <p className="flex font-bold text-2xl text-center justify-center italic">Fotografa</p></h1>
                        <div className="flex gap-4 justify-center">
                        <button className="border-b"><Link href="/" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">Home</Link></button>
                        <button className="border-b"><Link href="/SobreMI" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">Sobre mi</Link></button>
                        {/* <button className="border-b"><a href="/Retratos" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">Retratos</a></button>
                        <button className="border-b"><a href="/Arte_y_ProcesoCreativo" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">Arte y proceso creativo</a></button>
                        <button className="border-b"><a href="/espacios_atmosferas" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">Espacios y atmósferas</a></button>
                        <button className="border-b"><a href="/Eventos_Participacion" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">Eventos y participación</a></button>
                        <button className="border-b"><a href="/Servicios" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">Servicios</a></button>
                        <button className="border-b"><a href="/Contacto" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">contacto</a></button> */}
                        </div>
                    </div>
                </section>
            </nav>
            </header>
        </>
    )
}

export default Navbar