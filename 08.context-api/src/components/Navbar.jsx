import React from 'react'
import {ThemeContext} from '../context/ThemeProvider'

export const Navbar = () => {
    const {theme, cambiarColor} = React.useContext(ThemeContext);

    return (
        <div style={
            {
                background: theme.background,
                color: theme.color
            }
        }>
            <h1>Navbar</h1>
            <label htmlFor="">Color de fondo</label>
            <input 
                type="color" 
                onChange={e => cambiarColor({...theme, background: e.target.value})}
            />
            <label htmlFor="">Color de texto</label>
            <input 
                type="color" 
                onChange={e => cambiarColor({...theme, color: e.target.value})}
            />
        </div>
    )
}
