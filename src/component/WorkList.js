import { Link } from "react-router-dom";
import Starcards from "../assets/img/Starcards.png";
import VideoGames from "../assets/img/VideoGames.png";
import PersonalFinance from "../assets/img/PersonalFinance.png";
import useAosAnimation from "../hooks/useAosAnimation";
import GoWebsite from "./GoWebsite";
export default function WorkList() {
  useAosAnimation();
  return (
    <>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: "https://starcards.vercel.app/" }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-2 lg:mt-0">
          <h3 className="text-2xl mb-2 font-semibold">Starcards</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            App web & e-commerce
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            Es un juego web de cartas basado en el mundo Starcraft, consta de su
            propio sistema de monetización y e-commerce incorporado. Puedes
            chatear con tus amigos en un chat tanto público como privado,
            coleccionar cartas o vender las que no te gusten, crear tus propios
            mazos ¡y mucho más!
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white  dark:bg-gray-700">
              Javascript
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              React
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Redux
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Node
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Express
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Socket.io
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Firebase
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              JWT
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Sequelize
            </span>
          </div>
          <GoWebsite />
        </div>
        <div className="col-span-1">
          <img
            src={Starcards}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Starcards"
          />
        </div>
      </Link>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: "https://pi-video-game.vercel.app/" }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-1">
          <img
            src={VideoGames}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="VideoGame"
          />
        </div>
        <div className="col-span-2 lg:mt-0 md:ml-20">
          <h3 className="text-2xl mb-2 font-semibold">VideoGames</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            App VideoGames Gallery
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            Es un catalogo de Videojuegos obteniendo informacion de una API
            REST, donde el usuario podra encontrar el juego que busca por nombre
            o crear el suyo. En la App puede realizar filtrados u ordenamientos
            de contenido. Ademas contiene verificaciones de formularios tanto de
            HTML como JS.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white  dark:bg-gray-700">
              JavaScript
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              React
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Node
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              API REST
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              CSS
            </span>
          </div>
          <GoWebsite />
        </div>
      </Link>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: "https://finance-personal.vercel.app/" }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-2 lg:mt-0">
          <h3 className="text-2xl mb-2 font-semibold">Personal Finance</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            App Finanzas Personales
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            App web de finanzas personales, donde se puede registrar los
            ingresos y egresos, mostrando los ultimos 10 registros, pudiendo
            modificarlos. La informacion se guarda en el usuario de Google, ya
            que cuenta con un Login.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white  dark:bg-gray-700">
              JavaScript
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              React
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Redux
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Node
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Express
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              CSS
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Sequelize
            </span>
          </div>
          <GoWebsite />
        </div>
        <div className="col-span-1">
          <img
            src={PersonalFinance}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="PersonalFinance"
          />
        </div>
      </Link>
    </>
  );
}
