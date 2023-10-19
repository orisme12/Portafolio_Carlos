import Redes from "./Redes";

export default function Perfil() {
  return (
    <div className="min-h-[100vh]">
      <div className="max-w-[100%]  flex justify-center flex-col items-center ">
        <div className="flex  h-[80vh] w-[80%] mt-10 relative  px-3 rounded ">
          <div className="w-full flex flex-col md:block md:flex-row ">
            <div className=" w-full flex flex-col   md:items-start text-black">
              <p className="font-customTwo text-xl text-[#00acb5]">
                Hi, my name is{" "}
              </p>
              <h1 className="text-gray-100   m-[-4px] text-[3rem] max-w-full  md:text-[4rem] ">Carlos Bonet.</h1>
              <p className="mt-6 text-[1.2rem] w-full text-gray-500 md:w-[45%]">
                I am an electronic engineer and lover of web development.
                Currently, I focus on{" "}
                <span className="text-[#00acb5] relative group">
                  Front End
                  <span className="absolute  left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>{" "}
                development and providing the best user experiences.
              </p>
            </div>
            <div className="mt-20">
              <Redes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
