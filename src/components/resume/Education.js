import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering"
            subTitle="University of  Science & Technology (2021 - 2025)"
            result="3.32/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="FSC - Pre Engineering"
            subTitle="Govt Ghazi Umara Khan Degree College (2017 - 2020)"
            result="828/1100"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sadbar kaly  Secondary School (2015 - 2017)"
            result="828/1100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Web development - (2023 - Present)"
            result="Islamabad"
            des="My skilled MERN stack developer with 2+ years of experience in full-stack development. My specialize in React.js, Next.js, Node.js, Express.js, and MongoDB. I have worked as a Frontend Web Developer at DEVELO IT SOLUTIONS (PVT) Ltd., where I created and designed websites using HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, MUI, React.js, and Next.js"
          />
          <ResumeCard
            title="Front-end Developer "
            subTitle="DEVELO IT SOLUTIONS (PVT) ltd. - (2022 - 2023)"
            result="Islamabad"
            des="As a Frontend Web Developer at DEVELO IT SOLUTIONS (PVT) ltd., I
create, design, and oversee websites that turn my clients' visions into
reality. I have honed my skills in HTML5, CSS3, Bootstrap, Tailwind
CSS, JavaScript, MUI, React.js, and Next.js over the course of 2+ years."
          />
          <ResumeCard
            title="Web Developer Training"
            subTitle="React JS  - (2021 - 2022)"
            result="Bannu"
            des="The Bunnu economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
