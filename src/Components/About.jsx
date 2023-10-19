import React from "react";
import imagenDevelope from "../assets/image1.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BiSolidRightArrow } from "react-icons/bi";

export function About({ title, id }) {
  const [texto] = useTypewriter({
    words: ["Carlos Bonet", "Front end Devloper", "Designer", "Photographer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <div className="h-auto] ">
      <div
        id={id}
        className="max-w-[100%]  flex justify-center flex-col items-center "
      >
        <div>
        <h2 className="text-white text-[1.5rem] font-customThree">{title}</h2>
        <hr />
        </div>
       

        <div className="flex flex-col md:flex-row w-[80%] mt-10 relative ">
          <div className="w-full md:w-[50%] text-gray-400 text-lg p-4">
            <p>
              Hello, my name is{" "}
              <span className="text-[#00acb5] relative group">
                Carlos Bonet
                <span className="absolute  left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </span>{" "}
              . I'm electronic engineer. I have always been a very curious
              person with the topic of technologies and their different fields
              that make it wonderful. I started in the world of web development
              because of curiosity in programming and the infinity of things
              that can be created with it.
              <br />
              <br />
              Lately I was working on developing a website that would allow
              users to register, search their GitHub repositories, like other
              people's, add their favorite repositories or be able to delete
              them.
            </p>
            <br />
            <p>Here are a few technologies I’ve been working with recently:</p>

            <br />
            <ul>
              <li className="flex items-center gap-2 font-customTwo text-sm">
                
                <BiSolidRightArrow className="text-[#00acb5] text-[0.5rem] " />
                <span className="text- relative group text-gray-400 font-customTwo">
                  JavaScript
                  <span className="absolute  left-0 bottom-0 w-0 h-[1px] bg-[#00acb5] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>{" "}
              </li>
              <li className="flex items-center gap-2 font-customTwo text-sm">
                
                <BiSolidRightArrow className="text-[#00acb5] text-[0.5rem]" />{" "}
                <span className="text- relative group text-gray-400 font-customTwo">
                  React
                  <span className="absolute  left-0 bottom-0 w-0 h-[1px] bg-[#00acb5] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>{" "}
              </li>
              <li className="flex items-center gap-2 font-customTwo text-sm">
                
                <BiSolidRightArrow className="text-[#00acb5] text-[0.5rem]" />{" "}
                <span className="text- relative group text-gray-400 font-customTwo">
                  Bootstrap
                  <span className="absolute  left-0 bottom-0 w-0 h-[1px] bg-[#00acb5] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>{" "}
              </li>
              <li className="flex items-center gap-2 font-customTwo text-sm">
                
                <BiSolidRightArrow className="text-[#00acb5] text-[0.5rem]" />
                <span className="text- relative group text-gray-400 font-customTwo">
                  Tailwind CSS
                  <span className="absolute  left-0 bottom-0 w-0 h-[1px] bg-[#00acb5] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>{" "}
              </li>
              <li className="flex items-center gap-2 font-customTwo text-sm">
                
                <BiSolidRightArrow className="text-[#00acb5] text-[0.5rem]" />{" "}
                <span className="text- relative group text-gray-400 font-customTwo">
                  Firebase
                  <span className="absolute  left-0 bottom-0 w-0 h-[1px] bg-[#00acb5] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>{" "}
              </li>
            </ul>
          </div>
          <div>hola</div>
        </div>
      </div>
    </div>
  );
}
