import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

import { Routes } from './routes'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
