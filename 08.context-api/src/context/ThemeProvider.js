import React from 'react'

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const themes = {
        color: '#000',
        background: '#eee'
    };
    const [theme, setTheme] = React.useState(themes)

    React.useEffect(() => {
        if(localStorage.getItem('LocalTheme')){
            const LocalTheme = JSON.parse(localStorage.getItem('LocalTheme'))
            setTheme(LocalTheme)
        }
    }, []);

    const cambiarColor = (valor) => {
        setTheme(valor);
        localStorage.setItem('LocalTheme', JSON.stringify(valor));
        console.log(valor)
    }
    return (
        // //Aca se exporta
        <ThemeContext.Provider value={{theme, cambiarColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;