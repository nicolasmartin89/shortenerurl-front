import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post(
        "/api/auth/public/register",
        data
      );
      reset();
      navigate("/login");
      toast.success("Registeration Successful!");
    } catch (error) {
      console.log(error);
      toast.error("Registeration Failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[450px] w-[360px]  shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
          Registrate!
        </h1>

        <hr className="mt-2 mb-5 text-black" />

        <div className="flex flex-col gap-3">
          <TextField
            label="Nombre de Usuario"
            required
            id="username"
            type="text"
            message="*Ingresa un nombre de usuario"
            placeholder="Escribe tu nombre de usuario"
            register={register}
            errors={errors}
          />

          <TextField
            label="Email"
            required
            id="email"
            type="email"
            message="*Escribe tu email"
            placeholder="Escibe tu email"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Ingresa un password"
            placeholder="Ingresa tu password"
            register={register}
            min={6}
            errors={errors}
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className="bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
        >
          {loader ? "Cargando..." : "Registrar"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-6">
          Ya tienes una cuenta?
          <Link
            className="font-semibold underline hover:text-black"
            to="/login"
          >
            <span className="text-btnColor">Iniciar Sesión</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
