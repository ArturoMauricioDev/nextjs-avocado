import React, { PropsWithChildren } from "react";
import Navbar from "@components/Navbar/Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">This is the footer</footer>
      <style jsx>
        {`
          .container {
            background: salmon;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
