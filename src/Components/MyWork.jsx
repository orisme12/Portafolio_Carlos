import { Link } from "react-router-dom";
import myveterinarian from "../assets/image2.png";
import tokners from "../assets/image3.jpg";
import metav from "../assets/image4.jpg";
import clonegithub from "../assets/image5.png";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoCss3, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";

export default function MyWork({ title, id }) {
  return (
    <div className=" h-[115rem] md:h-[80rem] lg:h-[60rem] text-black flex flex-col items-center">
      <div id={id} className="max-w-[80vh] mt-60 ">
        <h2 className="text-white text-[1.5rem] font-customThree mt-4 ">
          {title}{" "}
        </h2>
        <hr />
      </div>
      <div className="flex  h-[80vh] w-[80%] mt-10 relative  px-3 rounded  flex-wrap gap-2 justify-center ">
        <div className="relative h-min w-max md:w-[45%] group bg-blend-color-burn border border-gray-50 border-opacity-10 md:drop-shadow-lg md:shadow-gray-700 rounded-xl overflow-hidden">
          <div className="hidden   lg:flex absolute inset-0 bg-black bg-opacity-95 cursor-pointer backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className=" hidden relative lg:flex lg:gap-8 lg:flex-col lg:justify-around md:transform md:translate-x-full md:group-hover:translate-x-0 md:transition-transform md:duration-300 md:p-3">
              <div>
                <p className="text-white font-customTwo text-lg mb-2">
                  my veterinarian
                </p>
                <p className="font-customTwo text-sm text-gray-400">
                  This was one of the first static pages I made in my process of
                  learning HTML and CSS. It has a very beautiful and dynamic
                  design for a veterinary.
                </p>
              </div>
              <div>
                <ul className="flex gap-6 items-center ">
                  <li>
                    <BiLogoCss3 className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <AiFillHtml5 className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <TbBrandJavascript className="w-6 h-6 text-[#00acb5]" />
                  </li>
                </ul>
              </div>
              <div className="flex gap-1 justify-end absolute right-3 top-3">
                <Link
                  to="/"
                  className=" transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
                >
                  <AiFillGithub className="w-6 h-6 text-white" />{" "}
                </Link>
                <Link
                  to="/"
                  className="transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
                >
                  <FiExternalLink className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-items-stretch h-[400px] lg:justify-around  lg:h-max ">
            <img
              src={myveterinarian}
              alt="ImageVeterinarian"
              className="rounded-lg rounded-b-none"
            />
            <div className="flex flex-col items-centerp p-2 lg:hidden">
              <p className="text-white font-customTwo text-lg mb-2 text-center">
                my veterinarian
              </p>
              <p className="font-customTwo text-sm text-gray-400">
                This was one of the first static pages I made in my process of
                learning{" "}
                <span className="relative group">
                  HTML and CSS
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
                . It has a very beautiful and dynamic design for a veterinary.
              </p>
            </div>
            <div className="flex gap-1 justify-center lg:hidden mb-2 items-end h-[50%]">
              <Link
                to="/"
                className=" transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
              >
                <AiFillGithub className="w-6 h-6 text-white" />{" "}
              </Link>
              <Link
                to="/"
                className="transform hover:translate-x-1  hover:rounded-full hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
              >
                <FiExternalLink className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* proyecto 2  */}
        <div className="relative h-min w-max md:w-[45%] group bg-blend-color-burn border border-gray-50 border-opacity-10 md:drop-shadow-lg md:shadow-gray-700 rounded-xl overflow-hidden">
          <div className="hidden   lg:flex absolute inset-0 cursor-pointer bg-black bg-opacity-95  backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className=" hidden relative lg:flex lg:gap-4 lg:flex-col lg:justify-around md:transform md:translate-x-full md:group-hover:translate-x-0 md:transition-transform md:duration-300 md:p-3">
              <div>
                <p className="text-white font-customTwo text-lg mb-2">
                  Tokners
                </p>
                <p className="font-customTwo text-sm text-gray-400">
                  Tokners was the second page on which I started web
                  development, it is a page that applies essential topics such
                  as FlexBox, simple animations and the use of Mediaquery for
                  mobile devices.
                </p>
              </div>
              <div>
                <ul className="flex gap-6 items-center ">
                  <li>
                    <BiLogoCss3 className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <AiFillHtml5 className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <TbBrandJavascript className="w-6 h-6 text-[#00acb5]" />
                  </li>
                </ul>
              </div>
              <div className="flex gap-1 justify-end absolute right-2 top-1">
                <Link
                  to="/"
                  className=" transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
                >
                  <AiFillGithub className="w-6 h-6 text-white" />{" "}
                </Link>
                <Link
                  to="/"
                  className="transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
                >
                  <FiExternalLink className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-items-stretch h-[400px] lg:justify-around  lg:h-max">
            <img
              src={tokners}
              alt="ImageVeterinarian"
              className="rounded-lg rounded-b-none"
            />
            <div className="flex flex-col items-centerp p-2 lg:hidden">
              <p className="text-white font-customTwo text-lg mb-2 text-center">
                Tokners
              </p>
              <p className="font-customTwo text-sm text-gray-400">
                Tokners was the second page on which I started web development,
                it is a page that applies essential topics such as FlexBox,
                simple animations and the use of Mediaquery for mobile devices.
              </p>
            </div>
            <div className="flex gap-1 justify-center lg:hidden mb-2 items-end h-[50%]">
              <Link
                to="/"
                className=" transform hover:translate-x-1 hover:shadow-lg hover:rounded-full hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white   transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
              >
                <AiFillGithub className="w-6 h-6 text-white" />{" "}
              </Link>
              <Link
                to="/"
                className="transform hover:translate-x-1 hover:shadow-lg hover:rounded-full hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
              >
                <FiExternalLink className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* proyecto 3  */}
        <div className="relative h-min w-max md:w-[45%] group bg-blend-color-burn border border-gray-50 border-opacity-10 md:drop-shadow-lg md:shadow-gray-700 rounded-xl overflow-hidden">
          <div className="hidden   lg:flex absolute inset-0 cursor-pointer bg-black bg-opacity-95  backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className=" hidden relative lg:flex lg:gap-4 lg:flex-col lg:justify-around md:transform md:translate-x-full md:group-hover:translate-x-0 md:transition-transform md:duration-300 md:p-3">
              <div>
                <p className="text-white font-customTwo text-lg mb-2">MetaV</p>
                <p className="font-customTwo text-sm text-gray-400">
                  MetaV is one of the most visually beautiful projects I have
                  ever done, its colors and animations make this a page that
                  stands out too much.
                </p>
              </div>
              <div>
                <ul className="flex gap-6 items-center ">
                  <li>
                    <BiLogoCss3 className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <AiFillHtml5 className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <TbBrandJavascript className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <FaBootstrap className="w-6 h-6 text-[#00acb5]" />
                  </li>
                </ul>
              </div>
              <div className="flex gap-1 justify-end absolute right-2 top-1">
                <Link
                  to="/"
                  className=" transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
                >
                  <AiFillGithub className="w-6 h-6 text-white" />{" "}
                </Link>
                <Link
                  to="/"
                  className="transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
                >
                  <FiExternalLink className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-items-stretch h-[400px] lg:justify-around  lg:h-max">
            <img
              src={metav}
              alt="ImageVeterinarian"
              className="rounded-lg rounded-b-none"
            />
            <div className="flex flex-col items-centerp p-2 lg:hidden">
              <p className="text-white font-customTwo text-lg mb-2 text-center">
                MetaV
              </p>
              <p className="font-customTwo text-sm text-gray-400">
                MetaV is one of the most visually beautiful projects I have ever
                done, its colors and animations make this a page that stands out
                too much.
              </p>
            </div>
            <div className="flex gap-1 justify-center lg:hidden mb-2 items-end h-[50%]">
              <Link
                to="/"
                className=" transform hover:translate-x-1 hover:shadow-lg hover:rounded-full hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white   transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
              >
                <AiFillGithub className="w-6 h-6 text-white" />{" "}
              </Link>
              <Link
                to="/"
                className="transform hover:translate-x-1 hover:shadow-lg hover:rounded-full hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
              >
                <FiExternalLink className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
        </div>
        {/* proyecto 4  */}
        <div className="relative h-min w-max md:w-[45%] group bg-blend-color-burn border border-gray-50 border-opacity-10 md:drop-shadow-lg md:shadow-gray-700 rounded-xl overflow-hidden">
          <div className="hidden   lg:flex absolute inset-0 cursor-pointer bg-black bg-opacity-95  backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className=" hidden relative lg:flex lg:gap-4 lg:flex-col lg:justify-around md:transform md:translate-x-full md:group-hover:translate-x-0 md:transition-transform md:duration-300 md:p-3">
              <div>
                <p className="text-white font-customTwo text-lg mb-2">
                  CloneGitHUb
                </p>
                <p className="font-customTwo text-sm text-gray-400">
                  This is the last project I was working on, it is a project
                  developed in react and Firebase was used as a database. In
                  this project the user can register an email, search for GitHub
                  users and be able to add their favorite repositories as well
                  as delete them.
                </p>
              </div>
              <div>
                <ul className="flex gap-6 items-center ">
                  <li>
                    <BiLogoReact  className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <BiLogoCss3 className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <AiFillHtml5 className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  <li>
                    <TbBrandJavascript className="w-6 h-6 text-[#00acb5]" />
                  </li>
                  
                  <li>
                    <BiLogoTailwindCss className="w-6 h-6 text-[#00acb5]"/>
                  </li>
                </ul>
              </div>
              <div className="flex gap-1 justify-end absolute right-2 top-1">
                <Link
                  to="/"
                  className=" transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
                >
                  <AiFillGithub className="w-6 h-6 text-white" />{" "}
                </Link>
                <Link
                  to="/"
                  className="transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
                >
                  <FiExternalLink className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-items-stretch h-[400px] lg:justify-around  lg:h-max">
            <img
              src={clonegithub}
              alt="clonedegithub"
              className="rounded-lg rounded-b-none"
            />
            <div className="flex flex-col items-centerp p-2 lg:hidden">
              <p className="text-white font-customTwo text-lg mb-2 text-center">
                CloneGitHub
              </p>
              <p className="font-customTwo text-sm text-gray-400">
                This is the last project I was working on, it is a project
                developed in react and Firebase was used as a database. In this
                project the user can register an email, search for GitHub users
                and be able to add their favorite repositories as well as delete
                them.
              </p>
            </div>
            <div className="flex gap-1 justify-center lg:hidden mb-2 items-end h-[50%]">
              <Link
                to="/"
                className=" transform hover:translate-x-1 hover:shadow-lg hover:rounded-full hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white   transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
              >
                <AiFillGithub className="w-6 h-6 text-white" />{" "}
              </Link>
              <Link
                to="/"
                className="transform hover:translate-x-1 hover:shadow-lg hover:rounded-full hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2"
              >
                <FiExternalLink className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
