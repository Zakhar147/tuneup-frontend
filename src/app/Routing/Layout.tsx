import React, { ReactNode } from 'react';

import Background from '@shared/ui/Background';
import { Navbar } from '@widgets/Navbar';
// import Footer from '@widgets/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Background>
    <Navbar />
    <main>
      {children}
    </main>
    {/* <Footer /> */}
  </Background>
);