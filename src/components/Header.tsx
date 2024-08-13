import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            Car Dealer App
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
