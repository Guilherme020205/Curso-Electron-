import { Link } from "react-router-dom"


export function Home(){
    return(
        <>
            <h1>Home</h1>
            <Link to={"/create"}>Ir para creat</Link>
        </>
    )
}