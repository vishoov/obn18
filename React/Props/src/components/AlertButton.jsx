const AlertButton = ({onAlert}) =>{


    return (
        <button onClick = {()=>{onAlert("Button was clicked!!")}} >
        Click Me
        </button>
    )
}

export default AlertButton;