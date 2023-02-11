/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import Progressbar from "./Progressbar";

export default function ExperienceTabs() {
  return (
    <div className="pt-16 mx-2 md:mx-0">
      <Tab.Group>
        <div className="pb-10">
          <Tab.List>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-pink-500 border-pink-500 rounded text-white cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0 mr-5"
                  : "text-pink-500 border-pink-500 rounded cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0 mr-5"
              }
            >
              Experiencia
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-pink-500 border-pink-500 rounded text-white cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0"
                  : "text-pink-500 border-pink-500 rounded cursor-pointer border-2  inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0"
              }
            >
              Educacion & Skills
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="gridLayout">
              <div
                className="col-span-1 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 md:p-8 mb-4 lg:mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2 className="text-lg font-semibold">Cargo</h2>
                <h4 className="text-sm italic mb-2">Full Time | Onsite</h4>
                <h3 className=" mb-3 text-gray-500">Fecha</h3>
                <hr className="dark:border-gray-600" />
                <span className="tab-title text-purple-500 hover:bg-purple-500 hover:text-white transition-all md:mb-5 md:inline-block mt-5 dark:bg-gray-600 dark:text-white dark:hover:bg-purple-500 dark:hover:text-white">
                  <Link target="_blank" to={{ pathname: "www.web.com" }}>
                    Empresa
                  </Link>
                </span>
                <p className="mb-4 text-sm">Responsabilidades : </p>
                <ul className="list-disc pl-4 text-sm leading-7">
                  {" "}
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                </ul>
              </div>
              <div
                className="col-span-1 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 md:p-8 mb-4 lg:mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2 className="text-lg font-semibold">Cargo</h2>
                <h4 className="text-sm italic mb-2">Full Time | Onsite</h4>
                <h3 className=" mb-3 text-gray-500">Fecha</h3>
                <hr className="dark:border-gray-600" />
                <span className="tab-title text-purple-500 hover:bg-purple-500 hover:text-white transition-all md:mb-5 md:inline-block mt-5 dark:bg-gray-600 dark:text-white dark:hover:bg-purple-500 dark:hover:text-white">
                  <Link target="_blank" to={{ pathname: "www.web.com" }}>
                    Empresa
                  </Link>
                </span>
                <p className="mb-4 text-sm">Responsabilidades : </p>
                <ul className="list-disc pl-4 text-sm leading-7">
                  {" "}
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                </ul>
              </div>
              <div
                className="col-span-1 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 md:p-8 mb-4 lg:mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2 className="text-lg font-semibold">Cargo</h2>
                <h4 className="text-sm italic mb-2">Full Time | Onsite</h4>
                <h3 className=" mb-3 text-gray-500">Fecha</h3>
                <hr className="dark:border-gray-600" />
                <span className="tab-title text-purple-500 hover:bg-purple-500 hover:text-white transition-all md:mb-5 md:inline-block mt-5 dark:bg-gray-600 dark:text-white dark:hover:bg-purple-500 dark:hover:text-white">
                  <Link target="_blank" to={{ pathname: "www.web.com" }}>
                    Empresa
                  </Link>
                </span>
                <p className="mb-4 text-sm">Responsabilidades : </p>
                <ul className="list-disc pl-4 text-sm leading-7">
                  {" "}
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                  <li>Responsabilidad</li>
                </ul>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="gridLayout">
              <div
                className="col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 md:p-8 mb-4 lg:mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="tab-title md:mb-16 md:inline-block dark:bg-gray-700 dark:text-white text-gray-700">
                  Educacion
                </span>
                <div className="single-section border-b dark:text-white dark:border-gray-600">
                  <h2 className="text-lg font-semibold">Diploma/Techskill</h2>
                  <h4>lugar de certificacion</h4>
                  <p>fecha</p>
                </div>
                <div className="single-section border-b dark:text-white dark:border-gray-600">
                  <h2 className="text-lg font-semibold">Diploma/Techskill</h2>
                  <h4>lugar de certificacion</h4>
                  <p>fecha</p>
                </div>
                <div className="single-section border-b dark:text-white dark:border-gray-600">
                  <h2 className="text-lg font-semibold">Diploma/Techskill</h2>
                  <h4>lugar de certificacion</h4>
                  <p>fecha</p>
                </div>
              </div>
              <div
                className="col-span-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 md:p-8"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <span className="tab-title text-gray-700 dark:bg-gray-700 dark:text-white">
                  Skills
                </span>
                <Progressbar text="JavaScript" progressDone="0000" />
                <Progressbar text="React" progressDone="0000" />
                <Progressbar text="Redux" progressDone="0000" />
                <Progressbar text="Node" progressDone="0000" />
                <Progressbar text="Express" progressDone="0000" />
                <Progressbar text="Sequelize" progressDone="0000" />
                <Progressbar text="MongoDb" progressDone="0000" />
                <Progressbar text="HTML" progressDone="0000" />
                <Progressbar text="CSS" progressDone="0000" />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
