import React from 'react';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import './main-layout.scss';

type TMainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: TMainLayoutProps) => {
  return (
    <div className='main-layout-wrapper'>
      <Header />

      {children}

      <Footer />
    </div>
  );
};
