$(function($) {
    $("#grafico-1").highcharts({
        title: {text: "<b>Cantidad de avistamientos informados por día</b>"},
        xAxis: {categories: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], title: {text: "<b>Día</b>"}},
        yAxis: {plotLines: [{value: 0, width: 1, color: "#808080"}], title: {text: "<b>Cantidad</b>"}},
        legend: {layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0},
        series: [{name: "Cantidad de avistamientos", color: "#e84118", data: [25, 23, 21, 20, 22, 25, 23]}],
        plotOptions: {line: {dataLabels: {enabled: true}}}
    });

    $("#grafico-2").highcharts({
        chart: {type: "pie", plotBackGroundColor: "#f8f9fa", plotShadow: false},
        title: {text: "<b>Cantidad y porcentaje de avistamientos informados según tipo</b>"},
        tooltip: {pointFormat: "<b>{point.y} ({point.percentage: .2f}%)</b>"},
        plotOptions: {pie: {allowPointSelect: true, cursor: "pointer", dataLabels: {enabled: true, format: "<b>{point.name} </b><br>{point.y} ({point.percentage: .2f}%)"}}},
        series: [{
            name: "Tipos",
            colorByPoint: true,
            data: [
                {name: "Arácnido", y: 560, color: "#e84118"},
                {name: "Insecto", y: 400, color: "#0097e6"},
                {name: "Miriápodo", y: 300, color: "#44bd32"},
                {name: "No sé", y: 53, color: "#dcdde1"}
            ]
        }]
    });

    $("#grafico-3").highcharts({
        title: {text: "<b>Cantidad de avistamientos informados por mes según estado</b>"},
        xAxis: {categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], title: {text: "<b>Mes</b>"}},
        yAxis: {plotLines: [{value: 0, width: 1, color: "#808080"}], title: {text: "<b>Cantidad</b>"}},
        legend: {layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0},
        series: [
            {type: "column", colorByPoint: false, color: "#e84118", name: "Vivo", data: [25, 23, 21, 43, 21, 32, 44, 33, 67, 10, 15, 50]},
            {type: "column", colorByPoint: false, color: "#0097e6", name: "Muerto", data: [20, 18, 19, 25, 23, 21, 43, 21, 40, 30, 20, 10]},
            {type: "column", colorByPoint: false, color: "#44bd32", name: "No sé", data: [15, 17, 11, 15, 20, 25, 23, 30, 31, 33, 35, 40]}
        ],
        plotOptions: {line: {dataLabels: {enabled: true}}}
    });
});