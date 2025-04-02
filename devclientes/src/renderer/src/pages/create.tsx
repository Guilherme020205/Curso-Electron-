export function Create(){

    async function handleAddCustomer() {

        const doc = {
            name: "jlljljljllherme",
            email: "jlljljljl@gmail.com",
            phone: "444444444",
            address: "Rua x sfsdcentro",
            role: "Dev front-edddddddnd",
            status: true
        }


        const response = await window.api.addCustomer(doc)
        console.log(response)
    }

    return(
        <>
            <h1>Create</h1>

            <button onClick={handleAddCustomer}>Cadastro</button>
        </>
    )
}