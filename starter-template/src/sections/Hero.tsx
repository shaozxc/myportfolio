import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
//orbit images
import { HeroOrbit } from "@/components/HeroOrbit";

import Mars from "./";
import Earth from "../assets/icons/planet-earth-svgrepo-com.png";
import PlanetSystem from "../assets/icons/planet-svgrepo-com.png";
import Saturn from "../assets/icons/saturn-svgrepo-com.png";
import Satelite from "../assets/icons/satellite-svgrepo-com.png";
import Uranus from "../assets/icons/uranus-svgrepo-com.png";
import Star from "../assets/icons/star2.svg";

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='bg-transparent absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div
          className='absolute inset-0 -z-30 opacity-5 '
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className='hero-ring size-[620px]'></div>
        <div className='hero-ring size-[820px]'></div>
        <div className='hero-ring size-[1020px]'></div>
        <div className='hero-ring size-[1220px]'></div>

        <HeroOrbit size={772} rotation={-80}>
          <Image
            src={Mars}
            alt='Mars'
            className='bg-transparent size-[48px] '
          />
        </HeroOrbit>
        <HeroOrbit size={490} rotation={80}>
          <Image
            src={Earth}
            alt='Earth'
            className='bg-transparent size-[48px] '
          />
        </HeroOrbit>
        <HeroOrbit size={672} rotation={160}>
          <Image
            src={Saturn}
            alt='Saturn'
            className='bg-transparent size-[96px] '
          />
        </HeroOrbit>
        <HeroOrbit size={958} rotation={150}>
          <Image
            src={PlanetSystem}
            alt='PlanetSystem'
            className='bg-transparent size-[96px] '
          />
        </HeroOrbit>
        <HeroOrbit size={760} rotation={150}>
          <Image
            src={Satelite}
            alt='Satelite'
            className='bg-transparent size-[32px] '
          />
        </HeroOrbit>
        <HeroOrbit size={760} rotation={320}>
          <Image
            src={Uranus}
            alt='Uranus'
            className='bg-transparent size-[48px] '
          />
        </HeroOrbit>
        <HeroOrbit size={760} rotation={340}>
          <Star className=' bg-transparent size-10 text-cyan-300/30' />
        </HeroOrbit>
        <HeroOrbit size={360} rotation={140}>
          <Star className=' bg-transparent size-7 text-cyan-300/80' />
        </HeroOrbit>
        <HeroOrbit size={460} rotation={140}>
          <Star className=' bg-transparent size-15 text-cyan-300/20' />
        </HeroOrbit>
        <HeroOrbit size={820} rotation={210}>
          <Star className=' bg-transparent size-7 text-cyan-300/40' />
        </HeroOrbit>
        <HeroOrbit size={350} rotation={90}>
          <Star className=' bg-transparent size-10 text-cyan-300/60' />
        </HeroOrbit>
        <HeroOrbit size={690} rotation={40}>
          <Star className=' bg-transparent size-12 text-cyan-300/70' />
        </HeroOrbit>
        <HeroOrbit size={460} rotation={-240}>
          <Star className=' bg-transparent size-5 text-cyan-300/20' />
        </HeroOrbit>
        <HeroOrbit size={350} rotation={-80}>
          <Star className=' bg-transparent size-10 text-cyan-300/60' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={-100}>
          <Star className=' bg-transparent size-12 text-cyan-300/60' />
        </HeroOrbit>
        <HeroOrbit size={360} rotation={-60}>
          <Star className=' bg-transparent size-5 text-cyan-300/30' />
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className='flex flex-col items-center gap-0.5'>
          <Image
            src={memojiImage}
            alt='person peaking from behind laptop'
            className='size-[48px]'
          />

          <div className='bg-gray-700 border border-gray-500 px-4 py-2 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium bg-transparent'>
              Currently Available{" "}
            </div>
          </div>
          <div className='max-w-lg mx-auto'>
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide'>
              Building exceptional user experiences
            </h1>
            <p className='mt-4 text-center text-white/70 md:text-lg'>
              I specialize in designing and building
              exceptional full-stack websites with the use
              of the latest technology. Let your dream
              project be my canvas.
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
            <button className=' card inline-flex items-center gap-2 border-2 border-cyan-300/80 px-6 h-12 rounded-xl'>
              <span className='font-semibold'>
                My Projects
              </span>
              <ArrowDown className='size-4' />
            </button>
            <button className='inline-flex items-center gap-2 border border-white bg-white px-6 text-gray-900 h-12 rounded-xl'>
              <span className='bg-transparent'>👋</span>

              <span className='font-semibold  text-gray-900 bg-transparent'>
                Contact me
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
