import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";

let desc =
  "Generá enlaces cortos y memorables con facilidad usando la interfaz intuitiva de Acortando. Compartí URLs sin esfuerzo a través de plataformas. Optimizá tu estrategia para compartir links. Seguimiento de clics y gestión de tus enlaces de manera fluida para mejorar tu presencia online. Generá enlaces cortos y fáciles de recordar usando la interfaz intuitiva de Acortando. Compartí URLs sin esfuerzo a través de plataformas.";

const LandingPage = () => {
  const navigate = useNavigate();

  const dashBoardNavigateHandler = () => {};
  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Acortando simplifica la creación de URLs para que las compartas con
            quien quieras.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            Acortando simplifica el proceso de acortamiento de URLs, haciendo
            que compartir enlaces sea fácil y eficiente. Con su interfaz
            amigable, Acortando te permite generar URLs concisas y fáciles de
            compartir en segundos.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-custom-gradient  w-40 text-white rounded-md  py-2"
            >
              Gestionar Enlaces
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="border-btnColor border w-40 text-btnColor rounded-md  py-2 "
            >
              Crear Enlace Corto
            </motion.button>
          </div>
        </div>
        <div className="   flex-1 flex   justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Confían en nosotros muchas empresas e individuos de todo el mundo!
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Acortamiento de URLs Simple"
            desc="Experimentá la facilidad de crear URLs cortas y memorables en solo unos clics. Nuestra interfaz intuitiva y proceso de configuración rápida aseguran que puedas empezar a acortar URLs sin complicaciones."
          />
          <Card
            title="Analíticas Poderosas"
            desc="Obtené información sobre el rendimiento de tus enlaces con nuestro completo panel de analíticas. Seguimiento de clics, datos geográficos y fuentes de referencia para optimizar tus estrategias de marketing."
          />
          <Card
            title="Seguridad Mejorada"
            desc="Quedate tranquilo con nuestras robustas medidas de seguridad. Todos los URLs acortados están protegidos con encriptación avanzada, asegurando que tus datos permanezcan seguros."
          />
          <Card
            title="Rápido y Confiable"
            desc="Disfrutá de redirecciones ultrarrápidas y alta disponibilidad con nuestra infraestructura confiable. Tus URLs acortados siempre estarán disponibles y respondiendo, asegurando una experiencia fluida para tus usuarios."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
