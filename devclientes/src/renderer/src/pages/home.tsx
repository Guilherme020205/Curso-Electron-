import { Link } from "react-router-dom"


export function Home(){

    async function handleAdd(){
        const response = await window.api.fetchUsers();
        console.log(response)
    }

    return(
        <>
            <h1>Home</h1>
            <Link to={"/create"}>Ir para creat</Link>
            <br /><br />
            <button onClick={handleAdd}>
                BUSCAR USUARIOS
            </button>
        </>
    )
}