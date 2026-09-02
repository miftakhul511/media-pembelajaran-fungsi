import { tampilkanMenu } from "./menu.js";

export function tampilkanGrafik() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="grafik-container">
      <h2>Grafik Fungsi Linear</h2>

      <p class="rumus-fungsi">f(x) = ax + b</p>

      <div class="input-group">
        <label for="nilaiA">Nilai a:</label>
        <input type="number" id="nilaiA" value="2">
      </div>

      <div class="input-group">
        <label for="nilaiB">Nilai b:</label>
        <input type="number" id="nilaiB" value="4">
      </div>

      <button id="btnTampilkanGrafik" class="menu-button">
        Tampilkan Grafik
      </button>

      <div class="chart-wrapper">
        <canvas id="grafikChart"></canvas>
      </div>

      <button id="btnKembaliGrafik" class="menu-button">
        Kembali
      </button>
    </div>
  `;

  let chartGrafik = null;

  // Plugin untuk menggambar sumbu X dan Y tepat di titik 0
  const originAxisPlugin = {
    id: "originAxisPlugin",
    afterDraw(chart) {
      const { ctx, chartArea, scales } = chart;
      if (!chartArea || !scales.x || !scales.y) return;

      const xScale = scales.x;
      const yScale = scales.y;

      const x0 = xScale.getPixelForValue(0);
      const y0 = yScale.getPixelForValue(0);

      ctx.save();
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;

      // Garis sumbu Y di x = 0
      if (x0 >= chartArea.left && x0 <= chartArea.right) {
        ctx.beginPath();
        ctx.moveTo(x0, chartArea.top);
        ctx.lineTo(x0, chartArea.bottom);
        ctx.stroke();
      }

      // Garis sumbu X di y = 0
      if (y0 >= chartArea.top && y0 <= chartArea.bottom) {
        ctx.beginPath();
        ctx.moveTo(chartArea.left, y0);
        ctx.lineTo(chartArea.right, y0);
        ctx.stroke();
      }

      ctx.restore();
    }
  };

  function gambarGrafik() {
    const a = parseFloat(document.getElementById("nilaiA").value);
    const b = parseFloat(document.getElementById("nilaiB").value);

    const dataX = [];
    const dataY = [];

    for (let x = -5; x <= 5; x++) {
      dataX.push(x);
      dataY.push(a * x + b);
    }

    const ctx = document.getElementById("grafikChart").getContext("2d");

    if (chartGrafik) {
      chartGrafik.destroy();
    }

    chartGrafik = new Chart(ctx, {
      type: "line",
      data: {
        labels: dataX,
        datasets: [
          {
            label: `f(x) = ${a}x + ${b}`,
            data: dataY,
            borderColor: "#3498db",
            backgroundColor: "#3498db",
            tension: 0,
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 6,
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                size: 14
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Sumbu X",
              font: {
                size: 16,
                weight: "bold"
              }
            },
            min: -5,
            max: 5,
            ticks: {
              stepSize: 1,
              font: {
                size: 13
              }
            },
            grid: {
              color: "#d0d0d0"
            }
          },
          y: {
            title: {
              display: true,
              text: "Sumbu Y",
              font: {
                size: 16,
                weight: "bold"
              }
            },
            min: -10,
            max: 10,
            ticks: {
              stepSize: 2,
              font: {
                size: 13
              }
            },
            grid: {
              color: "#d0d0d0"
            }
          }
        }
      },
      plugins: [originAxisPlugin]
    });
  }

  document.getElementById("btnTampilkanGrafik").onclick = gambarGrafik;
  document.getElementById("btnKembaliGrafik").onclick = tampilkanMenu;

  // langsung tampilkan grafik awal
  gambarGrafik();
}