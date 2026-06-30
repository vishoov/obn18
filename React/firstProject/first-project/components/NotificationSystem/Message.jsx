

const Message = ({type, message}) => {

    // if(type=="error"){
    //     return (
    //         <p style={{color:"red"}} >{message}</p>
    //     )
    // }else{
    //     return (
    //         <p style={{color:"green"}} >{message}</p>

    //     )
    // }

    return (
        <div> 
            <p style={{color:type=="error"?"blue":"yellow"}}>{message}</p>
        </div>
    )
  
}

export default Message