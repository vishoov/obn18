
const Card = ({children}) => {
    
  return (
    <div>
        This is the card component
        <div className="p-5 bg-amber-50 text-2xl text-black">
        {children}
        </div>
    </div>
  )
}

export default Card