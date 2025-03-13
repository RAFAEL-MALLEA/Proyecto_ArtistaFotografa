import React from "react";

const Navbar = () =>{
    return(
        <>
            <header className="bg-[#f4ece7] w-screen py-7  shadow-2xl hidden lg:block text-[#2D2926]">
            <nav>
                <section className=""> 
                    <div className="flex justify-between px-10">
                        <div className="flex font-bold text-2xl text-center justify-center open-sauce-one">Victoria Galarza</div>
                        <div className="flex gap-4 justify-center">
                        <button className="border-b"><a href="/" className="hover:text-foreground/80 text-foreground/160">Home</a></button>
                        <button className="border-b"><a href="/SobreMI" className="hover:text-foreground/80 text-foreground/160">Sobre mi</a></button>
                        <button className="border-b"><a href="/Retratos" className="hover:text-foreground/80 text-foreground/160">Retratos</a></button>
                        <button className="border-b"><a href="/Arte_y_ProcesoCreativo" className="hover:text-foreground/80 text-foreground/160">Arte y proceso creativo</a></button>
                        <button className="border-b"><a href="/Espacios_Atmosfera" className="hover:text-foreground/80 text-foreground/160">Espacios y atmósferas</a></button>
                        <button className="border-b"><a href="/Eventos_Participacion" className="hover:text-foreground/80 text-foreground/160">Eventos y participación</a></button>
                        <button className="border-b"><a href="/Servicios" className="hover:text-foreground/80 text-foreground/160">Servicios</a></button>
                        <button className="border-b"><a href="/Contacto" className="hover:text-foreground/80 text-foreground/160">contacto</a></button>
                        </div>
                    </div>
                </section>

                
            </nav>
            </header>
        </>
    )
}

export default Navbar