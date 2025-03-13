 import React from "react";

const Bannerprincipal = () =>{
    return(
        <>




        
         <div className="w-screen">
         <div className="relative h-screen ">
       <div 
         className="absolute inset-0 bg-cover bg-center "
         style={{
           backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
         }}
       >
         <div className="absolute inset-0 bg-black/40" />

            {/* <header className="w-screen py-7  shadow-2xl hidden lg:block">
            <nav>
                <section className=""> 
                    <div className="flex-col px-10">
                        <div className="font-bold text-2xl text-center">Victoria Galarza - VG Artist</div>
                        <div className="flex gap-4 justify-center">
                        <a href="#home" className="hover:text-foreground/80 text-foreground/160"><button className="border-b">Home</button></a>
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
            </header> */}


       </div>
       <div className="relative h-full flex items-center justify-center text-center ">
         <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
             Capturando momentos unicos
           </h1>
           <p className="text-xl text-white/90 mb-8">
             Fotografa Profesional dando servicios de talleres, fotos, y momentos especiales, te dejo una recopilacion de mis trabajos
           </p>
         </div>
       </div>
     </div>
     </div>
         </>
     )
 }

 export default Bannerprincipal