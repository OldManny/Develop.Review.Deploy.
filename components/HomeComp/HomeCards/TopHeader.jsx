import Image from 'next/image';
import { useTheme } from 'next-themes';
import Title from '@components/HomeComp/Title/Title';

// Import both images
import homeHeaderLight from "@/public/homeHeaderLight.jpg";
import homeHeaderDark from "@/public/homeHeaderDark.jpg";

const TopHeader = () => {
  const { theme } = useTheme(); // Use the theme

  // Select the image based on the theme
  const headerImage = theme === 'light' ? homeHeaderLight : homeHeaderDark;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={headerImage}
        alt="Background Image"
        fill       
        quality={100}
        priority
      />

      {/* Title Component */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Title />
      </div>
    </div>
  );
}

export default TopHeader;
