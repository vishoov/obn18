
import { useTheme } from './ThemeContext'

const ThemeToggle = () => {
    const { toggleTheme} = useTheme();
  return (
    <button 
    onClick = {toggleTheme}
    className='bg-blue-500 p-4 text-white'
    >
        Change Theme
    </button>
  )
}

export default ThemeToggle