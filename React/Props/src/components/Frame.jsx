const Frame = ({children, title})=>{
    
    return (
        <div className="frame" style={{border:"10px solid white", borderRadius:"10px"}}>
            <h3>{title}</h3>
            <div className="innerDetails">
                {/* some dynamic info */}
                {children}
            </div>
        </div>
    )
}

export default Frame;