
import { useTheme } from './ThemeContext'

const ThemeMessage = () => {

    const {theme} = useTheme();

    return (
        <div 

        className={
            theme === "light" ?
            "bg-white p-5 text-black"
            : "bg-black p-5 text-white"
        }
        >
            <h1 className='text-2xl'>
                Current Theme : {theme}
            </h1>
        </div>
  )
}

export default ThemeMessage