import React from "react";

const Navbar = () =>{
    return(
        <>
            <header className="bg-slate-100 w-screen py-7  shadow-2xl hidden lg:block">
            <nav>
                <section className=""> 
                    <div className="flex-col px-10">
                        <div className="font-bold text-2xl text-center">Victoria Galarza - VG Artist</div>
                        <div className="flex gap-4 justify-center">
                        <a href="#page" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">Home</button></a>
                        <a href="#" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">Quien Soy</button></a>
                        <a href="#" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">Mis proyectos</button></a>
                        <a href="#" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">Talleres</button></a>
                        <a href="#" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">-------------</button></a>
                        <a href="#" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">-------------</button></a>
                        <a href="#" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">-------------</button></a>
                        <a href="#" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">-------------</button></a>
                        </div>
                    </div>
                </section>
            </nav>
            </header>
        </>
    )
}

export default Navbar