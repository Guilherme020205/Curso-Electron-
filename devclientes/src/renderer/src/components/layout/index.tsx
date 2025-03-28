import * as Collapsible from '@radix-ui/react-collapsible'
import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Sidebar } from '../sidebar'
export default function Layout() {
  return (
    <Collapsible.Root>
      <Sidebar />

      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Outlet />
      </div>
    </Collapsible.Root>
  )
}
