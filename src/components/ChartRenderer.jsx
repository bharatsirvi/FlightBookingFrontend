import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ChartRenderer({ response }) {
  if (!response) return null;

  // Text-only response
  if (response.type === "text") {
    return <p className="text-gray-800 text-lg">{response.answer}</p>;
  }

  let chartOptions;

  if (response.chartType === "pie") {
    // Transform data for pie chart
    const pieData = (response.xAxis || []).map((name, i) => ({
      name,
      y: response.series?.[0]?.data?.[i] || 0,
    }));

    chartOptions = {
      chart: { type: "pie" },
      title: { text: response.title || "Pie Chart" },
      series: [
        {
          name: response.series?.[0]?.name || "Data",
          colorByPoint: true,
          data: pieData,
        },
      ],
    };
  } else {
    // Default chart config for other chart types
    chartOptions = {
      chart: {
        type: response.chartType || "column",
      },
      title: {
        text: response.title || "Chart",
      },
      xAxis: {
        categories: response.xAxis || [],
        title: { text: null },
      },
      yAxis: {
        min: 0,
        title: {
          text: response.yAxisTitle || "Values",
        },
      },
      series: response.series || [],
    };
  }

  return (
    <div className="max-w-4xl mx-auto">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
