import { useState } from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validação básica
    if (!username.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos')
      return
    }

    if (username.length < 3) {
      setError('Usuário deve ter no mínimo 3 caracteres')
      return
    }

    if (password.length < 4) {
      setError('Senha deve ter no mínimo 4 caracteres')
      return
    }

    // Chamar função de login
    const loginSuccess = onLogin(username, password)
    if (!loginSuccess) {
      setError('Usuário ou senha incorretos!')
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-slate-900 text-white p-4 shadow">
        <h1 className="text-xl font-semibold">
          Sistema de Estacionamento
        </h1>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center !text-black mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block !text-black font-semibold mb-2">
                Usuário
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Digite seu usuário"
              />
            </div>

            <div>
              <label className="block !text-black font-semibold mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Digite sua senha"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer font-semibold"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Credenciais de teste:<br />
            Usuário: <strong>admin</strong><br />
            Senha: <strong>1234</strong>
          </p>
        </div>
      </main>
    </div>
  )
}
