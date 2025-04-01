export function Create(){

    async function handleAddCustomer() {

        const doc = {
            name: "Guilherme",
            email: "gui@gmail.com",
            phone: "999999999",
            address: "Rua x centro",
            role: "Dev front-end",
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