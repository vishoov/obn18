import {useEffect, useState} from 'react';

const HarryPotter = () =>{

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function fetchBooks(){
            try{
            const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books');

            if(!response.ok) throw new Error("Failed to fetch books")
            
                const data = await response.json();

                setBooks(data);
                setLoading(false);
                console.log(data)

            }
        catch(err){
            console.error(err.message);
        }
        }

        fetchBooks();
    }, [])


    if(loading){
        return (
            <div style={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h3>Loading...</h3>

            </div>
        )
    }


    return (
        <div>
            <h1>Harry Potter Books</h1>

            <div style={{height:"100%", width:"100%",  display:'flex', alignItems:'center', justifyContent:"center", gap:'10px', flexWrap:'wrap'}}>
                {
                    books.map((book)=>{
                        return <div style={{height:"auto", width:"300px", display:"flex", flexDirection:"column"}}>
                        <img src={book.cover} alt={book.title}/>
                        <h2>{book.title}</h2>
                        <h4>{book.releaseDate}</h4>
                        <h4>{book.pages}</h4>
                        <h3>{book.description}</h3>
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default HarryPotter;