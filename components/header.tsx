import { useState, useEffect } from "react";
import Link from "next/link"

export default function Header() {
  const [showNav, setShowNav] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [nav, setNav] = useState([
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Our Mission",
      href: "/#mission",
    },
    {
      name: "Our Vision",
      href: "/#version",
    },
    {
      name: "Why Us",
      href: "/#why_us",
    },

    {
      name: "Project Case",
      href: "/#projects",
    },
  ]);


  useEffect(() => {
    console.log("useEffect");
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, []);
  
  return (
    <header className="w-full sm:w-10/12 mx-auto flex items-center justify-between px-4 py-6 font-[GT-America-Bold] ">
      <img src="/logo.png" width={140} height={100} alt="logo" />
      {isMobile && (
        <div
          className=" bg-[#02000b] bg-opacity-30  fixed left-0 right-0 top-0 bottom-0 z-40"
          onClick={() => {
            setShowNav(false);
            setIsMobile(false);
          }}
        ></div>
      )}
      {showNav && (
        <ul
          className=" justify-start sm:justify-center gap-4 text-basic bg-[#02000b] bg-opacity-30 sm:bg-transparent bottom-0 z-50 
      sm:bg-opacity-100  text-white flex fixed right-0 top-0 sm:relative w-40 sm:w-auto flex-col sm:flex-row backdrop-blur-sm 
      sm:backdrop-blur-none p-4 sm:p-0 overflow-hidden"
        >
          {nav.map((el, index) => (
            <Link key={index} href={el.href}>
              <li className="border-r border-transparent sm:border-white px-4 border-opacity-30 leading-none -mr-1">
                {el.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
      {!showNav && (
        <i
          className="block cursor-pointer text-white not-italic"
          onClick={() => {
            setShowNav(true);
            setIsMobile(true);
          }}
        >
          三
        </i>
      )}
      {/* <Web3Button /> */}
    </header>
  );
}
