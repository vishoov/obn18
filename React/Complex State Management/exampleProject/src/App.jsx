import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import CounterControls from './components/CounterControls'
import CounterDisplay from './components/CounterDisplay'
import CounterWrapper from './components/CounterWrapper'
import PropDrilling from './components/PropDrilling/PropDrilling'
import ThemeRoot from './components/ThemeSwitcher/ThemeRoot'

function App() {


  return (
    // Tailwind = one class per CSS declaration. You compose them instead of writing CSS.
    // p-8    -> padding: 2rem   (the scale is 1 = 0.25rem, so 8 = 2rem)
    // max-w-4xl + mx-auto -> cap the width and center it horizontally
    // flex flex-col gap-16 -> vertical stack with a 4rem gap between children
    //                         (gap replaces the <br/> spacer hack)
    <div className="p-8 max-w-4xl mx-auto flex flex-col gap-16">

      <ThemeRoot  />



      <PropDrilling />

      {/* A "section" is just a div with its own layout classes. */}
      <section className="flex flex-col gap-4">
        {/* text-3xl = font-size, font-bold = font-weight, text-left = text-align */}
        <h1 className="text-3xl font-bold text-left">Custom Components</h1>

        {/* flex makes children sit in a row; flex-wrap lets them drop to the
            next line on small screens; gap-3 spaces them without margins. */}
        <div className="flex flex-wrap gap-3">
          <Button buttonText={"Click Me"} variant={"primary"} onClick={()=>console.log("clicked")}/>
          <Button buttonText={"Whatsapp"} variant={"secondary"} onClick={()=>console.log("Clicked another button")}/>
          <Button buttonText={"Here to help"} variant={"primary"}/>
          <Button buttonText={"Plz click"} />
        </div>
      </section>

      <section>
        <Card>
          <p>Name:"Alex"</p>
          <p>Name: Aman</p>
        </Card>
      </section>

      <CounterWrapper>
        {/* Responsive prefixes: no prefix = mobile first, md: kicks in at >=768px.
            So this is a column on phones and a row on tablets and up.
            items-center -> cross-axis centering, justify-between -> spread apart.
            border + rounded-lg + p-6 -> a simple card frame. */}
        <div className="app-shell flex flex-col md:flex-row items-center justify-between gap-6 border rounded-lg p-6">
          <CounterDisplay />
          <CounterControls />
        </div>
      </CounterWrapper>

    </div>
  )
}

export default App
