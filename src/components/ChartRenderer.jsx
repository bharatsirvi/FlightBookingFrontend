import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ChartRenderer({ response }) {
  if (!response) return null;

  if (response.type === "text") {
    return (
      <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-gray-200/50 shadow-lg backdrop-blur-sm">
        <p className="text-gray-800 text-lg leading-relaxed font-medium">
          {response.answer}
        </p>
      </div>
    );
  }

  let chartOptions;

  if (response.chartType === "pie") {
    const pieData = (response.xAxis || []).map((name, i) => ({
      name,
      y: response.series?.[0]?.data?.[i] || 0,
    }));

    chartOptions = {
      chart: {
        type: "pie",
        backgroundColor: "transparent",
        style: {
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
      },
      title: {
        text: response.title || "Pie Chart",
        style: {
          fontSize: "24px",
          fontWeight: "700",
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
            style: {
              fontSize: "12px",
              fontWeight: "600",
              textOutline: "none",
            },
          },
          showInLegend: true,
          borderWidth: 3,
          borderColor: "white",
          shadow: {
            color: "rgba(0,0,0,0.1)",
            offsetX: 2,
            offsetY: 2,
            opacity: 0.3,
            width: 5,
          },
        },
      },
      colors: [
        "#3b82f6",
        "#8b5cf6",
        "#ef4444",
        "#10b981",
        "#f59e0b",
        "#ec4899",
        "#14b8a6",
        "#f97316",
      ],
      series: [
        {
          name: response.series?.[0]?.name || "Data",
          colorByPoint: true,
          data: pieData,
        },
      ],
      legend: {
        layout: "horizontal",
        align: "center",
        verticalAlign: "bottom",
        itemStyle: {
          fontWeight: "600",
          fontSize: "14px",
        },
      },
    };
  } else {
    chartOptions = {
      chart: {
        type: response.chartType || "column",
        backgroundColor: "transparent",
        style: {
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
      },
      title: {
        text: response.title || "Chart",
        style: {
          fontSize: "24px",
          fontWeight: "700",
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        },
      },
      xAxis: {
        categories: response.xAxis || [],
        title: { text: null },
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: "600",
            color: "#374151",
          },
        },
        lineColor: "#e5e7eb",
        tickColor: "#e5e7eb",
      },
      yAxis: {
        min: 0,
        title: {
          text: response.yAxisTitle || "Values",
          style: {
            fontSize: "14px",
            fontWeight: "600",
            color: "#374151",
          },
        },
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: "600",
            color: "#374151",
          },
        },
        gridLineColor: "#f3f4f6",
      },
      plotOptions: {
        column: {
          borderRadius: 8,
          borderWidth: 0,
          shadow: {
            color: "rgba(0,0,0,0.1)",
            offsetX: 2,
            offsetY: 2,
            opacity: 0.3,
            width: 3,
          },
        },
        bar: {
          borderRadius: 8,
          borderWidth: 0,
          shadow: {
            color: "rgba(0,0,0,0.1)",
            offsetX: 2,
            offsetY: 2,
            opacity: 0.3,
            width: 3,
          },
        },
        line: {
          lineWidth: 3,
          shadow: {
            color: "rgba(0,0,0,0.1)",
            offsetX: 2,
            offsetY: 2,
            opacity: 0.3,
            width: 3,
          },
          marker: {
            radius: 6,
            lineWidth: 2,
            lineColor: "white",
          },
        },
        area: {
          fillOpacity: 0.7,
          lineWidth: 3,
          shadow: {
            color: "rgba(0,0,0,0.1)",
            offsetX: 2,
            offsetY: 2,
            opacity: 0.3,
            width: 3,
          },
        },
      },
      colors: [
        "#3b82f6",
        "#8b5cf6",
        "#ef4444",
        "#10b981",
        "#f59e0b",
        "#ec4899",
        "#14b8a6",
        "#f97316",
      ],
      series: response.series || [],
      legend: {
        itemStyle: {
          fontWeight: "600",
          fontSize: "14px",
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderColor: "#e5e7eb",
        borderRadius: 12,
        shadow: {
          color: "rgba(0,0,0,0.1)",
          offsetX: 2,
          offsetY: 2,
          opacity: 0.3,
          width: 5,
        },
        style: {
          fontSize: "13px",
          fontWeight: "600",
        },
      },
    };
  }

  return (
    <div className="mt-8">
      <div className="max-w-5xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm border border-gray-200/50 shadow-2xl">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{
            style: {
              borderRadius: "16px",
              overflow: "hidden",
            },
          }}
        />

        {/* Modern accent border */}
        <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
      </div>
    </div>
  );
}
