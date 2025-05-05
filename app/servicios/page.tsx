import React from "react";
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
        <h1 className="text-5xl font-bold">Ofrezco Servicios Profesionales</h1>
        <p className="text-xl">Talleres y Fotografias</p>
      </section>

      {/* Servicios */}
      <section>
      <p className="text-center text-4xl font-bold py-5">Servicios Fotograficos y formacion</p>
      <div className="flex text-white gap-4">
        {[
        { title: "Retrato artistico personal", desc: "Una sesión íntima y cuidada para retratarte tal como sos. Ideal para quienes desean habitar su imagen desde un lugar real, sensible y sin poses forzadas", desc2: " Incluye: planificación previa, 1 a 2 horas de sesión, entrega de 25 fotos editadas en alta calidad." },
        { title: "Fotografia para artistas", desc: "Dirigido a músicos, pintores, actores y creadores visuales. Creamos imágenes que representen tu universo personal y artístico, ya sea en tu espacio de trabajo, en escena o con propuestas conceptuales", desc2: " Incluye: planificación personalizada, sesión de hasta 2 horas, entrega de 15 a 20 fotos editadas." },
        { title: "fotografia editorial / marcas", desc: "Retratos y fotografía lifestyle para marcas conscientes, proyectos culturales o colaboraciones editoriales. Trabajamos juntos la narrativa visual que tu proyecto necesita", desc2: " Incluye: propuesta creativa, moodboard opcional, sesión de medio día, entrega de fotos editadas según requerimientos del proyecto." },
        { title: "sesiones de pareja / vinculos", desc: "Fotografía de vínculos reales: parejas, amistades, madres e hijos. Un espacio para registrar el afecto y la conexión en entornos cotidianos o naturales", desc2: " Incluye: 1 hora de sesión en exterior o domicilio, entrega de 20 fotos editadas."},
        { title: "sesiones familiares / maternales", desc: "Registro cálido y cercano de momentos en familia o procesos de gestación y crianza. Se realiza con respeto al ritmo y hogar", desc2: " Incluye: hasta 1 hora y media de sesión, entrega de 15 fotos editadas." }
        ].map((service, i) => (
            <div key={i} className=" shadow-xl rounded-2xl p-6 ">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-300">{service.desc}</p>
                <p className="mt-2 text-gray-300">{service.desc2}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-4xl font-bold py-8">Clases y talleres</p>
        <div className="flex text-white gap-4">
        {[
        { title: "edicion fotografia profesional", desc: "Servicio de edición en Lightroom para fotógrafos o proyectos que necesiten una postproducción sensible y coherente con su identidad visual", desc2: " Modalidad: online", desc3: " incluye: revisión de estilo, colorimetría y tratamiento personalizado." },
        { title: "Taller de retrato fotografico para mujeres", desc: "Encuentro fotográfico en el Jardín Botánico de Viña del Mar, enfocado en la experiencia colectiva, la luz natural y la expresión íntima." },
        { title: "taller teorico-practico de retrato fotografico con modelo", desc: "Sesiones realizadas en Valparaíso y Viña del Mar. Se abordan fundamentos técnicos y creativos del retrato, explorando el vínculo entre fotógrafo y retratado." },
        { title: "clases online de lightroom", desc: "Clases personalizadas enfocadas en desarrollar tu estilo, aprender herramientas clave de edición y mejorar tu flujo de trabajo desde una mirada narrativa y emocional." },
        { title: "curso de iniciacion a la fotografia presencial y online", desc: "Dirigido a personas de todas las edades y niveles. Un recorrido desde lo básico hacia una mirada personal, práctica y sensible del mundo fotográfico." },

        ].map((service, i) => (
          <div key={i} className=" shadow-xl rounded-2xl p-6 ">
            <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-300">{service.desc}</p>
                <p className="mt-2 text-gray-300">{service.desc2}</p>
                <p className="mt-2 text-gray-300">{service.desc3}</p>
          </div>
        ))}
      </div>
      </section>

    </main>


    
        <Mainfooter />
        </>
    );
    }
