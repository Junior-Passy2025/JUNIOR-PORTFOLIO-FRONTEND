import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    return true;
  }

  return false;
};

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2
        rounded-full
        bg-slate-200
        dark:bg-slate-800
        transition
        duration-300
      "
      aria-label="Changer le thème"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" size={22} />
      ) : (
        <Moon className="text-slate-700" size={22} />
      )}
    </button>
  );
};

export default ThemeToggle;