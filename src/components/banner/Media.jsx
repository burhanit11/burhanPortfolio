import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import CV from "../../assets/Burhanud_Din_CV.pdf";
import { AiOutlineGithub } from "react-icons/ai";

const Media = () => {
  const cvUrl = CV;

  return (
    <div className=" xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        {/* <h2 className="text-base uppercase font-titleFont mb-4">Download CV</h2> */}
        <div className="flex gap-4">
          <a
            href={cvUrl}
            className="bannerIcon w-48"
            // download="Burhanud_Din_CV.pdf"
            target="_top"
          >
            <button>Download CV</button>
          </a>
          {/* 
          <button
            className="bannerIcon w-48"
            onclick={
              handleOpenCV
              // window.open("../../../public/BurhanMernStackResume.pdf")
            }
          >
            Download CV
          </button> */}
          <a href="https://www.facebook.com/burhan.rabbani.417529">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://github.com/burhanit11">
            <span className="bannerIcon">
              <AiOutlineGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/burhanit11/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
