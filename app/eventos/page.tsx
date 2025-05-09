import React, { act } from "react";
import Navbar from "@/components/navbar/mainnavbar";// Adjusted the path to match the file structure

import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";
export default function Servicios() {
  return (
    <>
    <MainNavbar />

    <main className="text-white">
      {/* Hero */}
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold">Eventos y participaciones</h1>
        <p>A lo largo de los años he formado parte de diversas experiencias artísticas, educativas y colaborativas, tanto en Chile como en el extranjero. Estas son algunas de ellas:</p>
      </section>

      {/* Servicios */}
      <section>
      <div className="flex text-white gap-4">
        {[
        { title: "Exposiciones colectivas", desc: "He participado en muestras que abordan la memoria, el territorio y el retrato desde una mirada íntima:", act: "Festival Internacional de Fotografía de Valparaíso (FIFV) Muestra colectiva de las Brigadas Fotográficas — Valparaíso, Chile.", act2: "Primer Festival de Fotografía Editorial – CityLab, GAM Exposición colectiva junto a artistas destacados de la escena nacional como Rocio Aguirre Venegas — Santiago de Chile, Chile.", act3:"Feria FAST – 'El sueño habita en la piedra' Exposición colectiva para Renato Ordenes San martin — Santiago de Chile, Chile.", act4:"Festival de la Imagen Margen Fest 2024 Exposición colectiva para Renato Ordenes San martin — Toluca, México." },
        { title: "Publicaciones y medios digitales", desc: "Mi trabajo ha sido compartido en medios independientes y revistas internacionales:", act: "immemorymag Revista digital con base en Reino Unido.", act2: "Vistelacalle Fotografía para la artista Bárbara RoseArtt — Chile.", act3: "Fisheye Magazine #408: Ardiendo brillantemente Revista digital de fotografía contemporánea — Francia." },
        { title: "Colaboraciones y gestión artística", desc: "He participado activamente en proyectos de arte público y muralismo, colaborando en pintura, coordinación y acompañamiento artístico:",  act: "Mural conmemorativo por los 60 años de Los Jaivas Ayudante de pintura — Metro Cal y Canto, Santiago de Chile.", act2: "Mural por los 40 años de democracia Ayudante de pintura — Ciudad de Buenos Aires, Argentina.", act3: "Murales en calle Condell, Valparaíso Coordinadora de artistas y gestora de terreno. Encargada de convocatoria, logística y acompañamiento durante el proceso."},
        { title: "Talleres y formación", desc: "Acompaño procesos formativos con una mirada sensible y cercana. Mis talleres y clases son espacios de exploración, confianza y conexión con la imagen:", act: "Taller de retrato fotográfico para mujeres Encuentro fotográfico en el Jardín Botánico de Viña del Mar, centrado en la experiencia colectiva y la luz natural.", act2: "Taller teórico-práctico de retrato fotográfico Sesiones en Valparaíso y Viña del Mar, donde abordamos técnica y vínculo con la persona retratada.", act3: "Clases online de Lightroom Edición con enfoque narrativo y emocional, para desarrollar estilo y flujo de trabajo.", act4: "Curso de iniciación a la fotografía Para todas las edades y niveles. Una introducción al mundo de la imagen desde la observación y la práctica cotidiana." }
        ].map((service, i) => (
            <div key={i} className=" shadow-xl rounded-2xl p-6 ">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-300">{service.desc}</p><br />
                <p className="mt-2 text-gray-300"> {service.act}</p><br />
                <p className="mt-2 text-gray-300"> {service.act2}</p><br />
                <p className="mt-2 text-gray-300"> {service.act3}</p><br />
                <p className="mt-2 text-gray-300"> {service.act4}</p><br />
            </div>
          ))}
        </div>


      </section>

    </main>


    
        <Mainfooter />
        </>
    );
    }
