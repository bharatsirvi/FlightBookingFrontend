export default function TableRenderer({ response }) {
  if (!response || response.type !== "table") return null;

  return (
    <div className="mt-4 p-4">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
        {response.title}
      </h2>

      <div className="overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-800 to-slate-900">
                {response.columns.map((col, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 text-left text-sm font-semibold text-white tracking-wider uppercase border-r border-slate-700 last:border-r-0"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {response.data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 text-sm text-gray-800 border-r border-gray-200/60 last:border-r-0 group-hover:text-gray-900 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <span className="relative">
                          {cell}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded opacity-0 transition-opacity duration-300 -z-10"></div>
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modern accent border */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>
    </div>
  );
}
