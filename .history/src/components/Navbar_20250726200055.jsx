import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar({ toggleSidebar }) {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 800 });
    const userTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialMode = userTheme === "dark" || (!userTheme && prefersDark);
    setIsDark(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);

    // Scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const navItems = [
    "home",
    "about",
    "skills",
    "work",
    "services",
    "testimonials",
    "contact",
  ];

  return (
    <motion.header data-aos="fade-down"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
      ${scrolled
          ? "bg-white/70 dark:bg-deepMint-900/70 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-deepMint-900 shadow-md"
        }`}>
      <nav className="container mx-auto flex items-center  dark:text-deepMint-100 justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-2xl font-bold text-deepMint-600 dark:text-deepMint-100"
        >
          Mohamed Hossam
        </motion.a>

        {/* Navigation  Links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 300 }}
            >
              <motion.a
                href={`#${item}`}
                onClick={() => setActiveLink(item)}
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                  backgroundColor: "rgba(188,80,144,0.1)", // soft accent background
                  color: "#bc5090",
                }}

                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`px-2 py-1 rounded-md text-sm font-medium transition ${activeLink === item
                  ? "bg-accentDark/20 text-accent font-semibold"
                  : "text-textLight dark:text-textDark"
                  }`}
              // className="px-2 py-1 rounded-md text-sm font-medium text-deepMint-600 dark:text-deepMint-100 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Toggle Dark Mode */}
          <motion.button
            onClick={toggleDarkMode}
            whileTap={{ rotate: 360 }}
            transition={{ duration: 0.4 }}
            className="text-xl text-deepMint-500 dark:text-deepMint-100"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            <FontAwesomeIcon icon={isDark ? icons.sun : icons.moon} />
          </motion.button>
          {/* Sidebar Toggle for Mobile */}
          <button onClick={toggleSidebar} title="Open Menu" className="md:hidden text-2xl text-deepMint-600 dark:text-deepMint-50">
            <FontAwesomeIcon icon={icons.Bars} />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
