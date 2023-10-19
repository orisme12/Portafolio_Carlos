import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function Contact({ title, id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6hxxjr8",
        "template_n3ik55p",
        form.current,
        "cVylXothl0YeujH3K"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Esta parte mani 
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="min-h-[100vh]  relative">
      
      <div id={id} className="max-w-[80vh] m-auto  text-center  mt-60 md:mt-4">
        <h2 className="text-white text-[1.5rem] font-customThree">{title}</h2>
        
      </div>
      
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[90%] containerForm max-w-md mx-auto p-4 rounded-xl bg-zinc-200 bg-opacity-5 mt-10 relative"
      >
        <p className="text-white text-center mb-6 font-customTwo">"I'm here to help you!<br/> Don't hesitate to write to me!"</p>
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className=" font-semibold text-[#00acb5] font-customTwo hover:translate-y-1"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            placeholder="Full Name"
            className="w-full p-2 border rounded-md placeholder:opacity-20 placeholder:font-customTwo placeholder:text-xs focus:outline-none bg-[#0a192f] text-white focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="text-[#00acb5] font-semibold font-customTwo"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            placeholder="Email"
            className="w-full p-2 border rounded-md placeholder:opacity-20 placeholder:font-customTwo placeholder:text-xs focus:outline-none bg-[#0a192f] text-white focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-[#00acb5] font-semibold font-customTwo"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border rounded-md focus:outline-none bg-[#0a192f] text-white focus:border-blue-400"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-[#0a192faa] text-white p-2 w-[40%] rounded-md font-customOne text-xl hover:bg-white hover:text-[#00acb5] hover:font-bold  hover:shadow-md transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
