import React from 'react';

const Header = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='min-h-[8rem] p-6 mt-8 text-sm border-t'>
      © {currentYear}{' '}
      <label htmlFor="Achraf Dardour" className='font-extrabold'>
        Achraf Dardour
      </label>
    </div>
  );
};

export default Header;
