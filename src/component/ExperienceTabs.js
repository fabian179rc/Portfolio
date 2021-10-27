/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { Tab } from "@headlessui/react";

export default function ExperienceTabs() {
  return (
    <div className="pt-16 mx-2 md:mx-0">
      <Tab.Group>
        <div className="pb-10">
          <Tab.List>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-pink-500 border-pink-500 rounded text-white cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0  mr-5"
                  : "text-pink-500 border-pink-500 rounded cursor-pointer border-2  inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0 mr-5"
              }
            >
              Education & Skills
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-pink-500 border-pink-500 rounded text-white cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0"
                  : "text-pink-500 border-pink-500 rounded cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0"
              }
            >
              Experience
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="gridLayout">
              <div
                className="col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 md:p-8 mb-4 lg:mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="tab-title md:mb-16 md:inline-block dark:bg-gray-700 dark:text-white text-gray-700">
                  Education
                </span>
                <div className="single-section border-b dark:text-white dark:border-gray-600">
                  <h2 className="text-lg font-semibold">BSC in CSE</h2>
                  <h4>
                    Dhaka International University
                    <span className="text-gray-400 text-sm">
                      - Dhaka, Bangladesh
                    </span>
                  </h4>
                  <p>2016-2020</p>
                </div>
                <div className="single-section border-b dark:text-white dark:border-gray-600">
                  <h2 className="text-lg font-semibold">Diploma in CSE</h2>
                  <h4>
                    Cumilla Polytechnic Institute
                    <span className="text-gray-400 text-sm">
                      - Cumilla, Bangladesh
                    </span>
                  </h4>
                  <p>2011-2015</p>
                </div>
                <div className="single-section dark:text-white">
                  <h2 className="text-lg font-semibold">SSC</h2>
                  <h4>
                    Madartek Abdul Aziz High School
                    <span className="text-gray-400 text-sm">
                      - Dhaka, Bangladesh
                    </span>
                  </h4>
                  <p>2011</p>
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
                <div className="relative mb-7">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm md:text-lg font-semibold inline-block text-gray-600 dark:text-white">
                        HTML
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-purple-500 dark:text-white">
                        95%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div
                      style={{ width: "95%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                    ></div>
                  </div>
                </div>
                <div className="relative mb-7">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm md:text-lg font-semibold inline-block text-gray-600 dark:text-white">
                        CSS/SASS
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-purple-500">
                        90%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div
                      style={{ width: "90%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                    ></div>
                  </div>
                </div>
                <div className="relative mb-7">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm md:text-lg font-semibold inline-block text-gray-600 dark:text-white">
                        JavaScript
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-purple-500">
                        85%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div
                      style={{ width: "85%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                    ></div>
                  </div>
                </div>
                <div className="relative mb-7">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm md:text-lg font-semibold inline-block text-gray-600 dark:text-white">
                        Jquery
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-purple-500">
                        90%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div
                      style={{ width: "85%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                    ></div>
                  </div>
                </div>
                <div className="relative mb-7">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm md:text-lg font-semibold inline-block text-gray-600 dark:text-white">
                        WordPress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-purple-500">
                        80%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div
                      style={{ width: "80%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                    ></div>
                  </div>
                </div>
                <div className="relative mb-7">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm md:text-lg font-semibold inline-block text-gray-600 dark:text-white">
                        Photoshop/Illustrator
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-purple-500">
                        70%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div
                      style={{ width: "80%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="gridLayout">
              <div
                className="col-span-1 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 md:p-8 mb-4 lg:mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2 className="text-lg font-semibold">Front-end Developer</h2>
                <h4 className="text-sm italic mb-2">Full Time | Remote</h4>
                <h3 className=" mb-3 text-gray-500">2017 - Present</h3>
                <hr className="dark:border-gray-600" />
                <span className="tab-title text-purple-500 hover:bg-purple-500 hover:text-white transition-all md:mb-5 md:inline-block mt-5 dark:bg-gray-600 dark:text-white dark:hover:bg-purple-500 dark:hover:text-white">
                  <a target="_blank" href="https://eunoiaits.com/">
                    Eunoia I.T Solutions
                  </a>
                </span>
                <p className="mb-4 text-sm">My Responsibilities: </p>
                <ul className="list-disc pl-4 text-sm leading-7">
                  <li>
                    Design and Developed 40+ Fully responsive and Eye-Catchy
                    websites with HTML, CSS, JavaScript.
                  </li>
                  <li>
                    Developed 5+ websites in PHP & C# .NET Platform (I am
                    working as a Front-end developer)
                  </li>
                  <li>Design and Developed 10+ WordPress websites. </li>
                  <li>
                    {" "}
                    Doing a huge amount of R&D to design & developed on many
                    websites
                  </li>
                </ul>
              </div>
              <div
                className="col-span-2 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 md:p-8 md:mb-0 "
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h2 className="text-lg font-semibold">Front-end Developer</h2>
                <h4 className="text-sm italic mb-2">Part Time | Remote</h4>
                <h3 className=" mb-3 text-gray-500">2016 - 2020</h3>
                <hr />
                <span className="tab-title text-purple-500 hover:bg-purple-500 hover:text-white transition-all md:mb-5 md:inline-block mt-5 dark:bg-gray-600 dark:text-white dark:hover:bg-purple-500">
                  <a href="#">Upwork</a>
                </span>
                <p className="mb-4 text-sm">
                  I was doing Freelancing as Front-end Developer for the last 6
                  years.{" "}
                </p>
                <ul className="list-disc pl-4 leading-7 text-sm">
                  <li>Successfully completed 17 Jobs with 5-StarRatings.</li>
                </ul>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
