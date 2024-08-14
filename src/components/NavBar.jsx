/* eslint-disable react/prop-types */
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [currMode, setCurrMode] = useState(false);
  function handleClick() {
    document.querySelector("html").classList.toggle("dark");
    setCurrMode((e) => !e);
  }
  function handleMenuClick() {
    const btn = document.querySelector(".menuBtn");
    const status = btn.getAttribute("data-state");
    if (!status || status == "closed") {
      btn.setAttribute("data-state", "opened");
      btn.setAttribute("aria-expanded", "true");
    } else {
      btn.setAttribute("data-state", "closed");
      btn.setAttribute("aria-expanded", "false");
    }
    if (!showMenu) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }

    setShowMenu((e) => !e);
  }

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const navigate = useNavigate();

  return (
    <header className="text-gray-900 dark:text-gray-200 flex text-xl justify-between items-center px-4 py-5 lg:px-8 lg:py-10 z-20">
      <img
        src={Logo}
        alt="logo"
        className="h-16 lg:h-20 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="lg:flex gap-8 hidden">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </div>
      <div className="flex gap-5">
        <button className="modeBtn" onClick={handleClick}>
          {!currMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 lg:w-16 dark:stroke-gray-200 stroke-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 lg:w-16 dark:stroke-gray-200 stroke-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </button>
        <button
          className="menuBtn z-10 dark:stroke-gray-200 stroke-gray-800 lg:hidden"
          aria-expanded="false"
          onClick={handleMenuClick}
        >
          <svg
            stroke="var(--button-color)"
            className="hamburger w-12"
            viewBox="0 0 100 100"
          >
            <line
              className="line top"
              x1="90"
              x2="10"
              y1="40"
              y2="40"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            ></line>
            <line
              className="line bottom"
              x1="10"
              x2="90"
              y1="60"
              y2="60"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            ></line>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
