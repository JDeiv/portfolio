import React from "react";

import Link from "next/link";

//own components
import Nav from "../components/Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo*/}
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              David <span className="text-acent">.</span>
            </h1>
          </Link>

          {/* desktop Nav */}

          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button>Crear Ahora</Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
