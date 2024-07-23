import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
//this is used to provide values to the ThemeContect below it.
//the values it provides, it gets them from theme.btn


export default function useTheme() {
    return useContext(ThemeContext);
}