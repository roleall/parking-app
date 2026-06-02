export default function ListaVeiculos() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">
        Veículos Estacionados
      </h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th>Placa</th>
            <th>Entrada</th>
            <th>Tempo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td>ABC-1D23</td>
            <td>10:30</td>
            <td>120 min</td>
            <td>
              <button className="text-blue-600 hover:underline">
                Comprovante
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}