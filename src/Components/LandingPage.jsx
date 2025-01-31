import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStoreContext } from "../contextApi/ContextApi";
import Card from "./Card";
import CreateNewShorten from "./Dashboard/CreateNewShorten";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigateDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Acortando simplifica la creación de URLs para que las compartas con
            quien quieras.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            Acortando simplifica el proceso de acortamiento de URLs, haciendo
            que compartir enlaces sea fácil y eficiente.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={handleNavigateDashboard}
              className="bg-custom-gradient w-40 text-white rounded-md py-2"
            >
              Gestionar Enlaces
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => setIsModalOpen(true)}
              className="border-btnColor border w-40 text-btnColor rounded-md py-2"
            >
              Crear Enlace Corto
            </motion.button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.jpg"
            alt="Imagen de acortador de URLs"
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Confían en nosotros muchas empresas e individuos de todo el mundo!
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Acortamiento de URLs Simple"
            desc="Crea URLs cortas y memorables en solo unos clics."
          />
          <Card
            title="Analíticas Poderosas"
            desc="Seguimiento de clics y datos para optimizar estrategias."
          />
          <Card
            title="Seguridad Mejorada"
            desc="Protección con encriptación avanzada."
          />
          <Card
            title="Rápido y Confiable"
            desc="Redirecciones ultrarrápidas y alta disponibilidad."
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <button onClick={() => setIsModalOpen(false)}></button>
          <CreateNewShorten setOpen={setIsModalOpen} />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
