import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello i'm <br />
              <span className="text-blue-400">Cornelius.s</span>
            </h1>
            <p className="max-2-[500px] mb-9 text-white/80">
              I excel at crafting website and manajemen Datatbase, I am
              proficient in various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/asset/cv/CORNELIUS-CV.pdf"
                download
                className="uppercase flex items-center gap-2 border border-blue-400 rounded-full px-4 py-2 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-500">
                <span>Download CV </span>
                <FiDownload className="text-xl" />
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-400 rounded-full flex justify-center items-center text-blue-400 text-base hover:bg-blue-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};
export default Home;
