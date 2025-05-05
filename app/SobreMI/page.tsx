import Navbar from "@/components/navbar/mainnavbar";
import Image from "next/image";
import React from "react";
import Mainfooter from "@/components/footer/mainfooter";
import Link from "next/link";

const SobreMi = () => {
    return (
        <>
            <Navbar />
            <main className="flex gap-4">
                <div className="">
                    
                    <img src="/SobreMi/victoriagalarza.jpg" alt="" loading="lazy" width="1500"></img>

            </div>
                <div className="flex flex-col gap-4">
                        <p className="">Las fotografías de Victoria Galarza Marabini buscan conectar sin interferencias, como si la cámara desapareciera. Son espacios donde la luz y las emociones son una constante, y donde lo esencial sucede entre personas, sin forzar, sin pretender.
                        </p>
                        <p className="">Desde los 12 años experimenta con el retrato como una forma de observar y comprender. A los 20 ya era su modo de vida, y fue al migrar a Chile cuando esa búsqueda tomó forma definitiva. Estudió Artes Audiovisuales en la Universidad Nacional de La Plata, en Buenos Aires, y desde entonces ha dedicado su trabajo a explorar cómo nos comunicamos, cómo nos miramos, cómo nos mostramos.
                        </p>
                        <p className="">Sus imágenes reflejan lo frágil y lo material, lo íntimo y lo real. Hay en ellas un juego constante entre luz y sombra, color y contraste. La belleza está en lo simple, en lo verdadero, en la pausa. La calma y la tranquilidad son fundamentales en su proceso creativo; permiten que todo lo demás surja con honestidad.
                        </p>
                        <div className="flex gap-4 justify-center items-center">
                        <button><Link href="https://www.instagram.com/fragilsosiego/">Instagram</Link></button>
                        <button><Link href="mailto:vickgalarza@gmail.com">Email</Link></button>
                        <button><Link href="https://api.whatsapp.com/send?phone=56955148483">WhatsApp</Link></button>
                        
                </div>
                </div>
                
            </main>
        <Mainfooter />

    
    </>
    );
};

export default SobreMi;