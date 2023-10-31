"use client"

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";




const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Name = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-black font-bold">John Sandoval</h2>
      <p className="text-black text-[.6rem]">(Vercel take home assessment)</p>
    </div>
  );
};

const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Name />
      <NavLink text="Question #1" href="/question/1"/>
      <NavLink text="Question #2" href="/question/2" />
      <NavLink text="Question #3" href="/question/3" />
      <NavLink text="Question #4" href="/question/4" />
      <NavLink text="Question #5" href="/question/5" />
      <NavLink text="Question #6" href="/question/6" />
      <NavLink text="Question #7" href="/question/7" />
    </div>
  );
};

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <NavLink text="Question #1" href="/question/1"/>
      <NavLink text="Question #2" href="/question/2" />
      <NavLink text="Question #3" href="/question/3" />
      <NavLink text="Question #4" href="/question/4" />
      <NavLink text="Question #5" href="/question/5" />
      <NavLink text="Question #6" href="/question/6" />
      <NavLink text="Question #7" href="/question/7" />
    </motion.div>
  );
};

const MenuLink = ({ text }: { text: string }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNav;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};