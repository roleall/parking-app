
import { useState } from 'react'
import Header from './components/Header'
import EntradaVeiculo from './components/EntradaVeiculo'
import ListaVeiculos from './components/ListaVeiculos'
import Login from './components/Login'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const handleLogin = (username, password) => {
    // Validação simples (em produção usar autenticação real)
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true)
      setCurrentUser(username)
      return true
    }
    return false
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser('')
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Header onLogout={handleLogout} currentUser={currentUser} />

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <EntradaVeiculo />
        <ListaVeiculos />
      </main>
    </div>
  )
}