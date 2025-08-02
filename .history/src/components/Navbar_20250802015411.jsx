import { useState, useEffect } from "react";
import ModalForm from './ModalForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { fetchCategories, selectCategories } from "../redux/categories";
import { useDispatch, useSelector } from "react-redux";

function Navbar({ toggleSidebar }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const MotionLink = motion(Link);
  const [showModal, setShowModal] = useState(false);
  const [showCategoriesList, setShowCategoriesList] = useState(false);
  const dispatch = useDispatch()

  const categories = useSelector(selectCategories);

  const staticNav = ['home'];

  const dynamicNav = categories.map((cat) => cat.id)


  const navItems = [...staticNav, ...dynamicNav];




  useEffect(() => {
    AOS.init({ duration: 800 });

    const userTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialMode = userTheme === "dark" || (!userTheme && prefersDark);
    setIsDark(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);

    dispatch(fetchCategories());

    // Scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [dispatch, isDark]);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <motion.header data-aos="fade-down"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
      ${scrolled
          ? "bg-white/70 dark:bg-deepMint_900/70 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-deepMint_900 shadow-md"
        }`}>
      <nav className="container mx-auto flex items-center  dark:text-deepMint_100 justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-deepMint_600 dark:text-deepMint_100"
        >
          Todo List
        </Link>

        {/* Navigation  Links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 300 }}
            >
              <MotionLink
                to={`/category/${item}`}
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

              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </MotionLink>
            </motion.li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setShowCategoriesList(prev => !prev)}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            📂 عرض التصنيفات
          </button>
          <AnimatePresence>
            {showCategoriesList && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full right-6 mt-2 w-[200px] max-h-[400px] overflow-y-auto bg-white dark:bg-deepMint_800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-600 z-40"
              >
                <ul className="divide-y dark:divide-gray-700">
                  {categories.map((cat) => (
                    <li key={cat.id} className="p-3 hover:bg-accent/10 dark:hover:bg-accentDark/10 cursor-pointer">
                      <Link
                        to={`/category/${cat.id}`}
                        className="text-textLight dark:text-white font-medium"
                        onClick={() => setShowCategoriesList(false)}
                      >
                        📁 {cat.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            ➕ Add Categories
          </button>

          {/* Toggle Dark Mode */}
          <motion.button
            onClick={toggleDarkMode}
            whileTap={{ rotate: 360 }}
            transition={{ duration: 0.4 }}
            className="text-xl text-deepMint_500 dark:text-deepMint_100"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            <FontAwesomeIcon icon={isDark ? icons.sun : icons.moon} />
          </motion.button>
          {/* Sidebar Toggle for Mobile */}

          <button onClick={toggleSidebar} title="Open Menu" className="md:hidden text-2xl text-deepMint_600 dark:text-deepMint_50">
            <FontAwesomeIcon icon={icons.Bars} />
          </button>


          {showModal && <ModalForm onClose={() => setShowModal(false)} />}
        </div>
      </nav>
    </motion.header >
  );
}

export default Navbar;
