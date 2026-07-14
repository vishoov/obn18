export const Filter=({likes,setLikes})=>{
    return(
       <div>
           <div>
               <input
               value={likes}
               style={{backgroundColor:"white"}}
               onChange={(e)=>setLikes(e.target.value)}
              />
                   </div>
       </div>
    )
   }