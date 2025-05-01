import React from "react";
import { FaInstagram } from "react-icons/fa";

const MainFooter = () =>{
    return(
        <>
                
      <footer className="  py-12 ">
          <section className="grid grid-flow-col-dense gap-4 justify-center items-center text-center">

          <div className="grid grid-flow-col-dense gap-4">
              <h3>Contectemos</h3>
                <a href="https://www.instagram.com/fragilsosiego/" className="">
                  <FaInstagram className="w-6 h-6" />
                </a>
          </div>
          <div className="grid grid-flow-col-dense gap-4">
              <p>
                <a href="mailto:vickgalarza@gmail.com" className="hover:text-foreground/80 text-foreground/160 open-sauce-one">vickgalarza@gmail.com</a>
              </p>
          </div>
            <div className="grid grid-flow-col-dense gap-4">
              <h3>Contacto</h3>
              <p>+ (56) 9 5514 8483</p> 
            </div>
          </section>
        
          <section className="grid grid-flow-col-dense gap-4 justify-center items-center text-center mt-5"> 
                        <p className="grid grid-flow-col-dense gap-4">© 2025 Victoria Galarza. Todos los derechos reservados</p>
                </section>
      </footer>
        </>
    )
}

export default MainFooter