import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Title from '/components/HomeComp/Title/Title';

import homeHeaderDark from "/public/homeHeaderDark.jpg";
import homeHeaderLight from "/public/homeHeaderLight.jpg";

const TopHeader = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ height: '100vh' }}>Loading...</div>; // Or any other placeholder
  }

  const backgroundImage = theme === 'light' ? homeHeaderLight : homeHeaderDark;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        quality={100}
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Title />
      </div>
    </div>
  );
}

export default TopHeader;


