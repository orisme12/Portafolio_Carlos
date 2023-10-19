import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Redes() {
  return (
    <div className="flex justify-center rounded gap-2 md:mt-40 shadow-inner shadow-[#00acb5] md:shadow-none md:justify-start">
        <div className="flex items-center">
            <hr  className="w-[50px] md:w-[100px] hidden md:flex"/>
        </div>
      <Link to="#" className="text-gray-400 transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2">
        <AiFillGithub className="w-6 h-6" />
      </Link>
      <Link to="#" className="text-gray-400 transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2">
        <AiOutlineInstagram className="w-6 h-6" />
      </Link>
      <Link to="#" className="text-gray-400 transform hover:translate-x-1 hover:shadow-inner hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2">
        <AiOutlineTwitter className="w-6 h-6" />
      </Link>
      <Link to="#" className="text-gray-400 transform hover:translate-x-1 hover:shadow-lg hover:bg-opacity-50 hover:bg-[#00acb5] hover:text-white  transition duration-300 ease-in-out md:rounded-full cursor-pointer p-2">
        <AiFillLinkedin className="w-6 h-6" />
      </Link>
    </div>
  );
}
