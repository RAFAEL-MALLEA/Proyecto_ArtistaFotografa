import Navbar from "@/components/navbar/mainnavbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";
import Footerfinal from "@/components/footer/footerfinal";
// import Bannerprincipal from "@/components/bannerPrincipal/bannerprincipal";

const SobreMi = () => {
    return (
        <>
            <Navbar />
            <main className="py-2">
                <section>
                    <div className="flex justify-center">
                        <div className=""><Image src="/SobreMi/victoriagalarza.jpg" alt="" width={590} height={500}></Image></div>

                        <div className="w-1/2">
                            <p className="m-2">Las fotografías de Victoria Galarza Marabini buscan conectar sin interferencias, como si la cámara desapareciera. Son espacios donde la luz y las emociones son una constante, y donde lo esencial sucede entre personas, sin forzar, sin pretender.
                            </p><br />
                            <p className="m-2">Desde los 12 años experimenta con el retrato como una forma de observar y comprender. A los 20 ya era su modo de vida, y fue al migrar a Chile cuando esa búsqueda tomó forma definitiva. Estudió Artes Audiovisuales en la Universidad Nacional de La Plata, en Buenos Aires, y desde entonces ha dedicado su trabajo a explorar cómo nos comunicamos, cómo nos miramos, cómo nos mostramos.
                            </p><br />
                            <p className="m-2">Sus imágenes reflejan lo frágil y lo material, lo íntimo y lo real. Hay en ellas un juego constante entre luz y sombra, color y contraste. La belleza está en lo simple, en lo verdadero, en la pausa. La calma y la tranquilidad son fundamentales en su proceso creativo; permiten que todo lo demás surja con honestidad.
                            </p>
                        </div>

                    </div>
                </section>
            </main>
        <Mainfooter />
        <Footerfinal />

    
    </>
    );
};

export default SobreMi;