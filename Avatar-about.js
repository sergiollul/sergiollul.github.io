// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/_BOD1509_formato_photoshop-about.png'}
        width={750}
        height={3060}
        alt=''
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
