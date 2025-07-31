import React from "react";
import Title from "../layouts/Title";
import {
  e_commerce,
  brandbird,
  chating_app,
  calculator,
  e_commerce2,
  jobpotal,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Crypto Profit Calculator"
          url={"https://crypto-profit-calculator-delta.vercel.app/"}
          gitHubLink={"https://github.com/burhanit11/CryptoProfitCalculator"}
          des=" This is a Crypto Profit Calculator web app that lets users calculate potential profits or losses from cryptocurrency trades. Users can input buy/sell prices, quantity, and fees to instantly see their net profit. Simple, fast, and user-friendly interface."
          src={calculator}
        />
        <ProjectsCard
          url={"https://solarbazar.vercel.app/"}
          gitHubLink={"https://github.com/burhanit11/"}
          title="E-commerce Website (Multi Vendor)"
          des="SolarBazar is a MERN stack multi-vendor platform for buying and selling solar products. It includes vendor registration, admin approval, product management, user auth, cart, and secure checkout—built for performance and a seamless user experience."
          src={e_commerce}
        />
        <ProjectsCard
          title="Jobs Potal"
          url={"https://jobportal-smoky-ten.vercel.app/"}
          gitHubLink={"https://github.com/burhanit11/jobportal/"}
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={jobpotal}
        />
        <ProjectsCard
          title="E-commerce Website"
          url={"https://greenmind-sigma.vercel.app/"}
          gitHubLink={"https://github.com/burhanit11/greenmind"}
          des="GreenMind is a modern and responsive e-commerce website for plant shopping. It features clean design, product listings, categories, search, and a smooth user experience—perfect for browsing and buying indoor and outdoor plants."
          src={e_commerce2}
        />

        <ProjectsCard
          gitHubLink="https://github.com/burhanit11/landing-page"
          url="https://landing-page-sigma-ivory.vercel.app/"
          title="Landing Page"
          des="A landing page is a standalone web page designed specifically for marketing or advertising campaigns. Its primary goal is to convert visitors into leads or customers by focusing on a single call-to-action."
          src={brandbird}
        />
        <ProjectsCard
          gitHubLink="https://github.com/burhanit11/react-chat-app"
          url="https://react-chat-app-eight-opal.vercel.app/"
          title="Chatting App"
          des=" This is a real-time chat application built with React. It allows users to send and receive messages instantly in a sleek, user-friendly interface. Ideal for one-on-one conversations with smooth performance and responsive design."
          src={chating_app}
        />
      </div>
    </section>
  );
};

export default Projects;
