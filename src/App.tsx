import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyles } from "./globalStyles";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { FadeIn } from "./animations";
import ReactGA from "react-ga4";
import useLocalStorage from "./hooks/useLocalStorage";
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  useEffect(() => {
    if (getLocalStorage("theme")) {
      const storedTheme = getLocalStorage("theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
      }
      return;
    }

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkMode ? "dark" : "light");
    setLocalStorage("theme", prefersDarkMode ? "dark" : "light");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
    setLocalStorage("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Analytics />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <main>
          <FadeIn>
            <Hero />
          </FadeIn>
          <FadeIn delay="0.2s">
            <Projects />
          </FadeIn>
          <FadeIn delay="0.3s">
            <About />
          </FadeIn>
          <FadeIn delay="0.4s">
            <Contact />
          </FadeIn>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
