"use client";

import { toggleTheme } from "@/store/features/themeSlice";
import { RootState } from "@/store/store";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ThemeToggler = () => {
  // wire up later
  const dispatch = useDispatch();
  const isDark = useSelector((store: RootState) => store.theme.isDarkMode);

  // this use effect add a prefer color scheme of the use on each page during changing the route. this reset the color mode on each page. if you change the theme and change the page that will reset the theme to prefer color.

  // useEffect(() => {
  //   const lightMode = window.matchMedia(
  //     "(prefers-color-scheme: light)",
  //   ).matches;
  //   if (lightMode) {
  //     dispatch(toggleTheme(false));
  //   } else {
  //     dispatch(toggleTheme(true));
  //   }
  // }, [dispatch]);
  return (
    <button className="relative flex items-center w-20 h-9 px-1 overflow-hidden rounded-full bg-slate-200 border border-border-default  cursor-pointer transition-colors">
      {/* track icons */}
      <Sun
        className={`absolute left-1.75 h-5.25 w-5.25 z-10 ${
          isDark ? "text-warning" : "text-white"
        }`}
        onClick={() => {
          dispatch(toggleTheme(false));
        }}
      />
      <Moon
        className={`absolute right-2 h-5.25 w-5.25 z-10 ${
          isDark ? "text-text-primary" : "text-text-muted"
        }  `}
        onClick={() => dispatch(toggleTheme(true))}
      />

      {/* thumb */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-primary shadow-sm transition-transform duration-300 ${
          isDark ? "translate-x-10.5" : "translate-x-0"
        }`}
      />
    </button>
  );
};

// export default ThemeToggler;
