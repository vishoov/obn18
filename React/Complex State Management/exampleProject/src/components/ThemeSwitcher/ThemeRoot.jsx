


import { ThemeProvider } from "./ThemeContext";
import ThemeMessage from "./ThemeMessage";
import ThemeToggle from "./ThemeToggle";



const ThemeRoot = () => {


        
  return (
    <ThemeProvider>
        <ThemeToggle />
        <ThemeMessage />
    </ThemeProvider>
  )
}

export default ThemeRoot