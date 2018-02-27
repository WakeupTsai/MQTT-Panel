var samples = 20;
var speed = 250;
var charts = [];

var mq5Values = [];
var mq7Values = [];
var mq131Values = [];
var mq135Values = [];

var pir1Values = [];
var pir2Values = [];
var pir3Values = [];

mq5Values.length = samples;
mq7Values.length = samples;
mq131Values.length = samples;
mq135Values.length = samples;

pir1Values.length =samples;
pir2Values.length =samples;
pir3Values.length =samples;

mq5Values.fill(0);
mq7Values.fill(0);
mq131Values.fill(0);
mq135Values.fill(0);

pir1Values.fill(0);
pir2Values.fill(0);
pir3Values.fill(0);

var labels = [];
labels.length = samples;
labels.fill(0);

function initializeChart() {
  charts.push(
    new Chart(document.getElementById("mq5Chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: mq5Values,
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          lineTension: 0.25,
          pointRadius: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: speed * 1.5,
          easing: 'linear'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    }),
    new Chart(document.getElementById("mq7Chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: mq7Values,
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          lineTension: 0.25,
          pointRadius: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: speed * 1.5,
          easing: 'linear'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    }),
    new Chart(document.getElementById("mq131Chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: mq131Values,
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          lineTension: 0.25,
          pointRadius: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: speed * 1.5,
          easing: 'linear'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    }),
    new Chart(document.getElementById("mq135Chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: mq135Values,
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          lineTension: 0.25,
          pointRadius: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: speed * 1.5,
          easing: 'linear'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    }),
    new Chart(document.getElementById("pir1Chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: pir1Values,
          backgroundColor: 'rgba(0, 102, 255, 0.1)',
          borderColor: 'rgb(0, 102, 255)',
          borderWidth: 2,
          lineTension: 0.25,
          pointRadius: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: speed * 1.5,
          easing: 'linear'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    }),
    new Chart(document.getElementById("pir2Chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: pir2Values,
          backgroundColor: 'rgba(0, 102, 255, 0.1)',
          borderColor: 'rgb(0, 102, 255)',
          borderWidth: 2,
          lineTension: 0.25,
          pointRadius: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: speed * 1.5,
          easing: 'linear'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    }),
    new Chart(document.getElementById("pir3Chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: pir3Values,
          backgroundColor: 'rgba(0, 102, 255, 0.1)',
          borderColor: 'rgb(0, 102, 255)',
          borderWidth: 2,
          lineTension: 0.25,
          pointRadius: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: speed * 1.5,
          easing: 'linear'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    })
  );
}
