import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
    isDarkTheme: true,
    togThemeHdl: () => {}
})

interface ThemePropsInterface {
    children?: JSX.Element | Array<JSX.Element>
}

export function MyThemeContextProvider(props: ThemePropsInterface): ReactElement {
    const [isDarkTheme, setIsDarkTheme ] = useState(false);

    useEffect(() => {
      if (isLocalStorageNotEmpty()) {
          const isDarkTheme: boolean = JSON.parse(localStorage.getItem("isDarkTheme")!);
          isDarkTheme && document!.querySelector("body")!.classList.add(`dark`)

          setIsDarkTheme(() => {
            return isDarkTheme
          })
      }
      else {
          localStorage.setItem("isDarkTheme", `false`)
          document!.querySelector("body")!.classList.remove(`dark`)
          setIsDarkTheme(false)
      }
    });

    function isLocalStorageNotEmpty(): boolean {
        return !!localStorage.getItem("isDarkTheme")
    }

    function toggleThemeHandler(): void {
      const isDarkTheme: boolean = JSON.parse(localStorage.getItem("isDarkTheme")!)
      setIsDarkTheme(!isDarkTheme)
      document!.querySelector("body")!.classList.toggle("dark")
      localStorage.setItem("isDarkTheme", `${!isDarkTheme}`)
    }

    return (
        <MyThemeContext.Provider value={{isDarkTheme: true, togThemeHdl: toggleThemeHandler}}>
            {props.children}
        </MyThemeContext.Provider>
    )
}