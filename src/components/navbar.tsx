import React, { useEffect, useState } from "react";
import { SiSamsungpay } from "react-icons/si";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleToggleTheme = () => {
    let newTheme = "";
    theme === "dark" ? (newTheme = "light") : (newTheme = "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="md:fixed bg-[#1E213B] md:h-full h-20 md:w-20 w-full flex md:flex-col flex-row justify-between items-center rounded-b-2xl md:rounded-b-none md:rounded-r-2xl z-50 top-0 left-0 sticky">
      <div className="bg-[#7C5FF8] md:w-full w-20 flex justify-center items-center md:rounded-r-2xl rounded-b-2xl md:h-20 h-full cursor-pointer hover:bg-[#6d54dc] transition-colors">
        <SiSamsungpay size={38} className="text-white" />
      </div>
      <div className="md:w-full w-40 md:h-40 h-full rounded-br-2xl flex md:flex-col flex-row items-center justify-between text-[#7F82B1]">
        <div className="flex items-center justify-center w-full h-[50%]">
          <button onClick={handleToggleTheme}>
            {theme === "dark" ? (
              <MdLightMode size={20} />
            ) : (
              <MdDarkMode size={20} />
            )}
          </button>
        </div>
        <div className="w-full rounded-br-2xl h-[50%] flex justify-center items-center border-l md:border-l-0 border-t-0 md:border-t border-[#4a4c6c] text-white">
          <FaUserCircle size={33} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
