import { QueryClientProvider, QueryClient } from 'react-query';
import { BookStore } from './pages';
import './styles/global.css'
import './styles/reset.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookStore />
    </QueryClientProvider>
  )
}

export default App
