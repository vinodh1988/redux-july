const Raw=({message,changeMessage})=>{
    return (
        <div>
             <h5>{message}</h5>
             <button onClick={changeMessage}>Change Message</button>
        </div>
    )
}

export default Raw;