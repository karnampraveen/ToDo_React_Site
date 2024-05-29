import { createContext, useContext, useState } from 'react'

// we start by creating our global object and this makes the context
const ToggleBGContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        //manages current theme and toggles theme
        setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'))
    }

    return(
        //ToggleBGContext.Provider is a component to wrap around components to access the contexts value
        //Pass value that we want to share througout the tree using the "value" prop
        //wraps around the children , making the props passed to it available at every component
        <ToggleBGContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ToggleBGContext.Provider>
    )

}

//uses useContext() to consume the ToggleBGContext context
const useTheme = () => {
    //consumes the information made available by the .Provider
    return useContext(ToggleBGContext)
}

export { ThemeProvider, useTheme }