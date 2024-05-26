"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
    return (
      <section className="lg:py-16 mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start mt-1"
          >
            <h1 className="text-[#677FB2] mt-0 text-3xl sm:text-4xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent color-[#744DA3]">
                Hi, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Ikram Lablaida",
                  1000,
                  "Web Developer",
                  1000,
                  "Data Scientist",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl">
              Data is a game-changer. It fuels innovation, drives decisions
              <span className="block"> and shapes industries.</span>
              <span
                className="block"
                style={{
                  color: "#34B995",
                  fontWeight: "bold",
                  marginTop: "9px",
                }}
              >
                Architecting Tomorrows Insights
              </span>
            </p>
            <div>
              <Link href="/My Cover Letter.pdf" legacyBehavior>
                <a
                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white mt-3"
                  target="_blank"
                >
                  Hire Me
                </a>
              </Link>
              <Link href="/cvvf.pdf" legacyBehavior>
                <a
                  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                  target="_blank"
                  download
                >
                  <span className="block bg-[#34B995] hover:bg-slate-800 rounded-full px-5 py-2">
                    Download CV
                  </span>
                </a>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-1 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[150px] lg:w-[400px] lg:h-[400px] relative m-1">
              <Image
                src="/images/iko.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={250}
                height={250}
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  