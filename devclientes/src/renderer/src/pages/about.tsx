import { useQuery } from "@tanstack/react-query"


export function About() {
 
     const { data } = useQuery({
      queryKey: ['version-app'],
      queryFn: async () => {
        const response = await window.api.getVersionApp()
        // console.log(response)
        return response
      }
    })

  return (
      <div className="flex flex-1 flex-col py-12 px-10 text-white">
        <h1 className=" text-xl lg:text-3xl font-semibold mb-4">Página sobre</h1>
        <p>Projeto criado no curso <b>@sujeitoprogamador</b> </p>
        <p>Versão atual do projeto: {data}</p>
      </div>
  )
}
