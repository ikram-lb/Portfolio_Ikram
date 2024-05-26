"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton.jsx";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">

  <li style={{ display: 'flex', alignItems: 'center' ,marginBottom: '1rem' }}>
    <span className="icon">
      <Image src="/Images/spring boot.png" alt="Spring Boot Icon" width={50} height={20} />
    </span>
    <span style={{ marginLeft: '0.5rem' }}>Spring Boot</span>
  </li>
  <li style={{ display: 'flex', alignItems: 'center' , marginBottom: '1rem'}}>
    <span className="icon">
      <Image src="/Images/angular-3.svg" alt="Angular Icon" width={50} height={20} />
    </span>
    <span style={{ marginLeft: '0.5rem' }}>Angular js</span>
  </li>
  <li style={{ display: 'flex', alignItems: 'center' , marginBottom: '1rem' }}>
    <span className="icon">
      <Image src="/Images/mysql.jpg" alt="SQL Icon" width={60} height={5} />
    </span>
    <span style={{ marginLeft: '0.5rem' }}>My SQL</span>
  </li>
  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15rem' }}>
    <span className="icon">
      <Image src="/Images/node.jpeg" alt="Node Icon" width={60} height={5} />
    </span>
    <span style={{ marginLeft: '0.5rem' } } className=" mg-10">Node js</span>
  </li>
</ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1 rem' }}>
        <span>
        <Image src="/Images/enset.jpeg"  width={60} height={5} />
        </span> 
          <span>Big Data and Cloud Computing Engineering At Enset Mohemmadia</span></li>
        
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1 rem' }}>
          <span>
            <Image src="/Images/est.png"  width={50} height={5}>
            </Image>
            </span>
          <span>Computer Engineering At EST-LaaYoune</span></li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to Mongo DB   
          <span style={{ display: 'block' ,fontWeight: 'bold' }} className="text-[#677FB2] ">Mongo DB</span> </li>
        <li>Oracle Cloud Infrastructure 
        <span style={{display: 'block', fontWeight: 'bold' }} className="text-[#677FB2] ">Oracle Academy </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Volontering",
    id: "volenterings",
    content: (
      <ul className="list-disc pl-2">
      <li style={{ display: 'flex', alignItems: 'center' ,marginBottom: '1rem' }}>
     <span className="icon">
      <Image src="/Images/LDX_white-removebg.png" alt="Spring Boot Icon" width={50} height={20} />
     </span>
     <span style={{ marginLeft: '0.5rem' }}> Membre in Organisation cell at LDX </span>
     </li>
     <li style={{ display: 'flex', alignItems: 'center' ,marginBottom: '1rem' }}>
     <span className="icon">
      <Image src="/Images/digigirlzLogo.png" alt="Spring Boot Icon" width={50} height={20} />
     </span>
     <span style={{ marginLeft: '0.5rem' }}> Mentor at Digigirlzs </span>
     </li>
     <li style={{ display: 'flex', alignItems: 'center' ,marginBottom: '1rem' }}>
     <span className="icon">
      <Image src="/Images/logo jlm.png" alt="Spring Boot Icon" width={50} height={20} />
     </span>
     <span style={{ marginLeft: '0.5rem' }}> Responsable of Communication in JLM  </span>
     </li>
    </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/Images/ikram.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          a second-year Big Data & Cloud Computing engineering student. With a fervent dedication to data science, I specialize in machine learning, statistical modeling, and data analysis. My goal is to extract meaningful narratives from complex datasets, empowering strategic decision-making through actionable insights.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("volenterings")}
              active={tab === "volenterings"}
            >
              {" "}
              Volontering{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
