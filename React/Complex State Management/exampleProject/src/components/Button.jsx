

const Button = ({buttonText, variant="primary", onClick}) => {
    const className = variant === "primary"? "bg-white text-black w-[150px] p-5":'bg-black text-white p-5 w-[150px]'
    return (
    <button className={className} onClick={onClick}>
        {buttonText}

    </button>
  )
}

export default Button