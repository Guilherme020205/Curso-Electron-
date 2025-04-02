import { Link } from "react-router-dom"


export function Home(){

    async function handleAdd(){
        const response = await window.api.fetchAllCustomers()
        console.log(response)
    }

    async function handleCustomerById( ) {
        const docId = "9530b1b6-74d7-472c-aa1b-050986d51bdb";
        const response = await window.api.fectCustoemersById(docId);
        console.log(response)
    }

    async function handleDeleteCustomer() {
        const docId = "9530b1b6-74d7-472c-aa1b-050986d51bdb";
        const response = await window.api.deleteCustomer(docId);
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
            <button onClick={handleCustomerById}>
                BUSCAR USUARIOS PELO ID
            </button>
            <button onClick={handleDeleteCustomer}>
                Deletar USUARIOS PELO ID
            </button>
        </>
    )
}