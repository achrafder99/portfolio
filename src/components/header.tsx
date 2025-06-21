import React from 'react';
import Contact from './Contact';

const Header = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='min-h-[8rem] p-6 mt-8 text-sm border-t'>
      © {currentYear}{' '}
      <label htmlFor="Achraf Dardour" className='font-extrabold'>
        Achraf Dardour
      </label>
      <Contact />
    </div>
  );
};

export default Header;
