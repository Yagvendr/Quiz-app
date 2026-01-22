 import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <header className="header">
      <h1>React Quiz</h1>
      <button className="theme-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
