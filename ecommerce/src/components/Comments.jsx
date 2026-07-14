import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { Filter } from "./Filter";
export const Comments=()=>{
    const [comment,setComment]=useState([])
    const [likes,setLikes]=useState("")
    useEffect(()=>{
        async function getComment(){
        try{
            const response=await fetch('https://dummyjson.com/comments');
            if(!response.ok){
                throw new Error("User comments not found"); 
            }
            const data=await response.json()
            setComment(data.comments)
            console.log(data)
        }catch(err){
            console.error(err)
        }
    }
    getComment()
    },[])
   const filtered=comment.filter((comm)=>{
    return comm.likes.toString().includes(likes)
   })
    return(
        <div>
            <div>
               <Filter likes={likes} setLikes={setLikes}/>
            </div>
        <div className="comments-container">
  {filtered.map((ele) => (
    <CommentCard key={ele.id} comment={ele} />
  ))}
</div>
        </div>
    )
}