import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FilterForm } from '@/components/FilterForm';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FilterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
