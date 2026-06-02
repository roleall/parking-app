
import Header from './components/Header'
import EntradaVeiculo from './components/EntradaVeiculo'
import ListaVeiculos from './components/ListaVeiculos'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <EntradaVeiculo />
        <ListaVeiculos />
      </main>
    </div>
  )
}