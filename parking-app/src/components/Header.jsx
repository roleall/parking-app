export default function Header({ onLogout, currentUser }) {
  return (
    <header className="bg-slate-900 text-white p-4 shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Sistema de Estacionamento
        </h1>
        {currentUser && (
          <div className="flex items-center gap-4">
            <span className="text-sm">Bem-vindo, <strong>{currentUser}</strong></span>
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-200 cursor-pointer"
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </header>
  )
}