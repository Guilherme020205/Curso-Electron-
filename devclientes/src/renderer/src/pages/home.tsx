import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export function Home() {
  const queryClient = useQueryClient()

  // buscar clientes
  const { data } = useQuery({
    queryKey: ['customers'],
    queryFn: async () => {
      const response = await window.api.fetchAllCustomers()
      console.log(response)
      return response
    }
  })

  // async function handleAdd(){
  //
  // }

  // async function handleCustomerById( ) {
  //     const docId = "9530b1b6-74d7-472c-aa1b-050986d51bdb";
  //     const response = await window.api.fectCustoemersById(docId);
  //     console.log(response)
  // }

  // async function handleDeleteCustomer() {
  //     const docId = "9530b1b6-74d7-472c-aa1b-050986d51bdb";
  //     const response = await window.api.deleteCustomer(docId);
  //     console.log(response)
  // }

  return (
    <div className="flex-1 flex flex-col py-12 text-white">
      <div className="px-10">
        <h1 className="text-white text-xl lg:text-3xl font-semibold mb-4">Todos os clientes</h1>
      </div>

      <section className="flex flex-col gap-6 w-full h-screen overflow-y-auto px-10 pb-[200px]">
        {data?.map((customer) => (
          <Link to="/" key={customer._id} className="bg-gray-800 px-4 py-3 rounded">
            <p className="mb-2 font-semibold text-lg">{customer.name}</p>
            <p className="text-lg">
              <span className="font-semibold">Email: </span>
              {customer.email}
            </p>
            {customer.phone && (
              <p><span>Telefone: </span>{customer.phone}</p>
            )}
          </Link>
        ))}
      </section>
    </div>
  )
}
