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

  return <div></div>;
}

export default NavBar;
