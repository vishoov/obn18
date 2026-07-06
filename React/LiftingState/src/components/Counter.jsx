

const Counter = ({count, handleCount}) =>{


    const handleClick =()=>{
        handleCount(count=>count+1);
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={handleClick}>+</button>

        </>
    )
}

export default Counter;