import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ChartRenderer({ response }) {
  if (!response) return null;

  if (response.type === "text") {
    return <p className="text-lg">{response.description}</p>;
  }

  if (response.type === "table") {
    const rows = response.data;
    return (
      <div className="overflow-x-auto border rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              {Object.keys(rows[0] || {}).map((key) => (
                <th key={key} className="text-left px-4 py-2">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="even:bg-gray-50">
                {Object.values(row).map((val, j) => (
                  <td key={j} className="px-4 py-2">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const chartOptions = {
    title: { text: response.description },
    xAxis: { categories: response.data.labels },
    series: [
      {
        data: response.data.values,
        type: response.type === "time-series" ? "line" : response.type,
      },
    ],
  };

  return (
    <div className="mt-4">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
