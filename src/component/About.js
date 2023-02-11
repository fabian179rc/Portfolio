/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import aboutImg from "../assets/img/about.png";
import useAosAnimation from "../hooks/useAosAnimation";
import SectionTitle from "./SectionTitle";

export default function About() {
  useAosAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-700 relative z-50 transition duration-75">
      <div className="container px-5 mx-auto text-center md:text-left py-16 md:py-24">
        {/*-- section title --*/}
        <SectionTitle text1="Sobre Mi" text3="Sobre Mi" />

        <div className="block lg:flex mt-20">
          <div
            className="lg:w-4/12 w-full m-auto"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            <img
              src={aboutImg}
              alt="about"
              className="w-6/12 mb-5 md:mb-0 lg:w-9/12 m-auto"
            />
          </div>
          <div
            className="lg:w-8/12 px-5 md:px-0 md:ml-7 mt-0 md:mt-12 ml-0"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            <div className="dark:text-white m-auto sm:ml-0 text-justify mt-3 text-md transition duration-75">
              <p>
                Desarrollador Fullstack con experiencia en Javascript, Node JS,
                React JS, DDBB SQL y NoSQL, disfrutando aprender nuevas
                tecnologias en mi tiempo libre. Actualmente estoy trabajando
                como Tutor de Node en
                <Link
                  to={{
                    pathname: "https://www.coderhouse.com/",
                  }}
                  target="_blank"
                  className="bg-red-600 rounded-md hover:bg-white hover:text-pink-500 transiton-all duration-150 text-white p-0.5 cursor-pointer "
                >
                  CoderHouse
                </Link>{" "}
                , reforzando mis TechSkills y mejorando mis SoftSkills.
              </p>
            </div>
            <hr className="mt-5 dark:border-gray-800 transition duration-75" />
            <div className="text-center dark:text-white sm:text-left block md:flex justify-between mt-5 md:text-lg transition duration-75">
              <div className="inline-block">
                <p className=" leading-8">
                  <span className="text-purple-500 font-semibold mr-4">
                    Edad :
                  </span>{" "}
                  31
                </p>
                <p className=" leading-8">
                  <span className="text-purple-500 font-semibold mr-4">
                    Nacionalidad :
                  </span>{" "}
                  Argentina
                </p>
                <p className=" leading-8">
                  <span className="text-purple-500 font-semibold mr-4">
                    Lenguaje :
                  </span>{" "}
                  Español, Ingles(A1, in progress..)
                </p>
              </div>
              <div className="inline-block">
                <p className=" leading-8">
                  <span className="text-pink-500 font-semibold mr-4">
                    Direccion :
                  </span>{" "}
                  Rosario, Santa Fe
                </p>
                <p className=" leading-8">
                  <span className="text-pink-500 font-semibold mr-4">
                    Email :
                  </span>{" "}
                  <a href="mailto:fabianjesussantos@gmail.com">
                    FabianJesusSantos@gmail.com
                  </a>{" "}
                </p>
                <p className=" leading-8">
                  <span className="text-pink-500 font-semibold mr-4">
                    Telefono :
                  </span>{" "}
                  <a href="http://wa.me/+5493413353196" target="_blank">
                    +54 9 3413353196{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
