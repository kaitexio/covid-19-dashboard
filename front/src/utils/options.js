export const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        onProgress: 10

    },
    legend: {display: true},
    cornerRadius: 20,
    tooltips: {
        enabled: true,
        borderWidth: 1,
        fill: true,
        lineTension: 0.1,
        borderColor: "#212B36",
        backgroundColor: "#212B36",
        titleFontColor: "#F9FAFB",
        bodyFontColor: "#F9FAFB",
        footerFontColor: "#F9FAFB",
    },
    layout: {padding: 10},
    scales: {
        xAxes: [
            {
                barThickness: 5,
                maxBarThickness: 5,
                barPercentage: 100,
                categoryPercentage: 0.5,
                ticks: {
                    fontColor: "#637381",
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: "#637381",
                    beginAtZero: true,
                    min: 0
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "#637381",
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                    zeroLineColor: "#637381",
                }
            }
        ]
    }
};