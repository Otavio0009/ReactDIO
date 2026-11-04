import React, {useState, useEffect} from "react";

const App = () => {

    /*const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/
    const [usuario, setUsuario] = useState("");
    const [count, setCount] = useState(0);
    const [usuarios, setUsuarios] = useState(["Otávio", "Olivia", "Orfelia"]);

    /*useEffect (() => {
        setTimeout(() => {
            setUsuario([...usuarios, "Oriom"]);
        }, 3000);
    }, [])*/

    const handelAddUser = () => {
        setUsuarios([...usuarios, usuario]);
        setUsuario("");
    };

    useEffect(() => {
        setCount(usuarios.length)
    }, [usuarios])
    

    return (
        <>
            <div className="App">
                <h1>Hello DIO!</h1>
                <h3>Total: {count}</h3>
                {/*<p>1 + 1 = {1+1}</p>
                {arr.map(item => {
                    return (<p>{item} * 9 = {item * 9} </p>)
                })} */}
                <div>
                    <input value={usuario} onChange={(event)=> setUsuario(event.target.value)} />
                    <button onClick={handelAddUser}>Adicionar</button>
                </div>
                <hr />
                {usuarios.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        </>
    );
};

export default App;