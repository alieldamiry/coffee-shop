import React from 'react';
import NavBar from './Appbar';
import Footer from './Sections/Footer/Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>
      {children}
    </main>
    <Footer />
  </>
);
export default Layout;
