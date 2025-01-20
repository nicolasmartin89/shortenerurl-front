import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8  ">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic  mb-3">
          Sobre Acortando
        </h1>
        <p className="text-gray-700 text-sm  mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          Este es un proyecto de acortamiento de URL simple y fácil de usar que
          le permite convertir URLs largas en enlaces cortos y fáciles de
          compartir. Con una interfaz intuitiva y un proceso de configuración
          rápido, puede comenzar a acortar URLs sin complicaciones. Además,
          ofrecemos análisis detallados para que pueda realizar un seguimiento
          del rendimiento de sus enlaces y optimizar sus estrategias de
          marketing.
        </p>
        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Es simple!
              </h2>
              <p className="text-gray-600">
                Experiencia acortando liks en pocos minutos.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Analiza datos!
              </h2>
              <p className="text-gray-600">
                Obtenga información sobre el rendimiento de sus enlaces con
                nuestro panel de análisis. Realice un seguimiento de los clicks,
                los datos geográficos y las fuentes de referencia para optimizar
                sus estrategias de marketing.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Es seguro!
              </h2>
              <p className="text-gray-600">
                Tenga la tranquilidad de contar con nuestras sólidas medidas de
                seguridad. Todas las URL acortadas están protegidas con cifrado
                avanzado, lo que garantiza que sus datos permanezcan seguros.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Rápido y Confiable.
              </h2>
              <p className="text-gray-600">
                Disfrute de redireccionamientos ultrarrápidos y un alto tiempo
                de actividad con nuestra infraestructura confiable. Sus URL
                acortadas siempre estarán disponibles y responderán, lo que
                garantiza una experiencia perfecta para sus usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
