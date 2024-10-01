import { disconnect } from "process";
import StarIcon from "../assets/icons/star2.svg";

export const TapeSection = () => {
  const words = [
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "WordPress",
    "Apollo GraphQL",
    "Firebase",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "GatsbyJS",
    "NuxtJS",
    "Hugo",
  ];

  return (
    <div className='py-16'>
      <div className='bg-gradient-to-r from-cyan-400 to-indigo-400 -rotate-3 overflow-x-none -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 py-4'>
            {words.map((word) => (
              <div key={word} className='inline-flex gap-4'>
                <span className='text-gray-900  uppercase font-bold text-m'>
                  {word}
                </span>
                <StarIcon className='size-6 text-gray-900 -rotate-12' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
