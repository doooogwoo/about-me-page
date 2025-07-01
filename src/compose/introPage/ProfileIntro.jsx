import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const ProfileIntro = () => {
  return (
    <div className=" flex font-noto text-white flex-col gap-4">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-2">
        <h1 className="text-6xl">蘇洺錚</h1>
        <h2 className="text-2xl">Ming-Jheng Su</h2>
      </div>
      <h3 className="text-4xl">後端 Java工程師</h3>
      <p className="text-2xl"><span className="text-green-400">Spring Boot </span>x <span className="text-blue-500">React</span></p>
      <div className="flex gap-4 text-white">
        <a
          href="https://github.com/你的帳號"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 hover:text-purple-500" />
        </a>
        <a
          href="https://linkedin.com/in/你的帳號"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a
          href="https://facebook.com/你的帳號"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-6 h-6 hover:text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default ProfileIntro;
