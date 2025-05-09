import React from "react";
import Link from "next/link";

const Navbar = () =>{
    return(
        <>
        <header className="py-7">
                <div className="grid grid-flow-col-dense justify-around items-center">

                    <div className="grid grid-flow-col-dense gap-4">
                        <p>Victoria Galarza</p>
                        <p>-</p>
                        <p>Fotografa</p>
                    </div>

                    <div className="grid grid-flow-col-dense gap-4">
                        <button className=""><Link href="/" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">Home</Link></button>
                        <button className=""><Link href="/SobreMI" className="hover:text-foreground/80 open-sauce-one">Sobre mi</Link></button>
                        <button className=""><Link href="/espacios_atmosferas" className="hover:text-foreground/80 open-sauce-one">Espacios y Atmosferas</Link></button>
                        <button className=""><Link href="/retratos" className="hover:text-foreground/80 open-sauce-one">Retratos</Link></button>
                        <button className=""><Link href="/servicios" className="hover:text-foreground/80 open-sauce-one">Fotografia y Formacion</Link></button>
                        <button className=""><Link href="/eventos" className="hover:text-foreground/80 open-sauce-one">Eventos y participacion</Link></button>
                    </div>

                </div>
        </header>
        </>
    )
}

export default Navbar