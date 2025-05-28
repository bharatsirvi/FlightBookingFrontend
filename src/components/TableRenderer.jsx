export default function TableRenderer({ response }) {
  if (!response || response.type !== "table") return null;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">{response.title}</h2>
      <table className="table-auto border border-collapse w-full">
        <thead>
          <tr>
            {response.columns.map((col, index) => (
              <th key={index} className="border px-4 py-2 bg-gray-200">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {response.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
