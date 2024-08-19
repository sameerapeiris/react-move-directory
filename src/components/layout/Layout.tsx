import React from "react";
import Header from "./header/Header";

import Footer from "./footer/Footer";

interface LayoutProps {
  children?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {

  return (
    <>
      <Header />
      <main className="fix">
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
