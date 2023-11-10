import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/provider/AuthProvider'
import { Navbar } from './ui/Navbar'

import './index.css'

function App() {

  return (
    <AuthProvider>
      <div className="container mt-20 mx-auto px-12 py-2">
        <AppRouter />
      </div>
    </AuthProvider>
  )
}

export default App
