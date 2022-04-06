import Navbar from '../components/navbar';
import Hero from '../components/hero';
import ProfileService from '../components/profileService';

import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [navbarClasses, setNavbarClasses] = useState<String>('');

  useEffect(() => {
    const handleScroll = () => {
      if (rootRef.current !== null) {
        const {y} = rootRef.current.getBoundingClientRect();
        
        if (y <= -56) {
          setNavbarClasses('scrolled');
        } else {
          setNavbarClasses('');
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div ref={rootRef}>
        <Navbar classes={navbarClasses}/>
        <Hero/>
        <ProfileService/>
        <h1>hoa</h1>
    </div>
  );
}

export default Home;