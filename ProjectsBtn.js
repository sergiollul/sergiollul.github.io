// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowDown } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-10 mt-[-40px]'>
      <a
        href="/English CV - Sergio Sanchez.pdf"
        download="English CV - Sergio Sanchez.pdf"
        className='relative w-[155px] h-[155px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/Untitled-1.png'}
          width={141}
          height={148}
          alt=''
          className='animate-spin-slow w-full h-full max-w-[117px] max-h-[123px]'
        />
        <HiArrowDown className='absolute text-4xl group-hover:translate-y-2 transition-all duration-300' />
      </a>
    </div>
  );
};

export default ProjectsBtn;
