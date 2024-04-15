// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-11 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine size={28}/>
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine size={28}/>
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine size={28}/>
      </Link>
    </div>
  );
};

export default Socials;
