export default function EntradaVeiculo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 !text-black">
        Entrada de Veículo
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Placa do veículo"
          className="w-full border rounded p-2"
        />

        <div className="flex gap-2">
          <input
            type="time"
            className="w-1/2 border rounded p-2"
          />
          <input
            type="number"
            placeholder="Tempo (min)"
            className="w-1/2 border rounded p-2"
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Registrar Entrada
        </button>
      </form>
    </div>
  )
}