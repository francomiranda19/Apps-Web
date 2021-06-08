function graficos() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../cgi-bin/datos.py");
    xhr.onload = (data) => {
        let json = JSON.parse(data.currentTarget.responseText);

        // Gráfico 1
        let grafico_1 = {
            title: {text: "<b>Cantidad de avistamientos informados por día</b>"},
            xAxis: {categories: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], title: {text: "<b>Día</b>"}},
            yAxis: {plotLines: [{value: 0, width: 1, color: "#808080"}], title: {text: "<b>Cantidad</b>"}},
            legend: {layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0},
            series: [{name: "Cantidad de avistamientos", color: "#e84118", data: [0, 0, 0, 0, 0, 0, 0]}],
            plotOptions: {line: {dataLabels: {enabled: true}}}
        };
        grafico_1.series[0].data = json["y1"];
        $("#grafico-1").highcharts(grafico_1);

        // Gráfico 2
        let grafico_2 = {
            chart: {type: "pie", plotBackGroundColor: "#f8f9fa", plotShadow: false},
            title: {text: "<b>Cantidad y porcentaje de avistamientos informados según tipo</b>"},
            tooltip: {pointFormat: "<b>{point.y} ({point.percentage: .2f}%)</b>"},
            plotOptions: {pie: {allowPointSelect: true, cursor: "pointer", dataLabels: {enabled: true, format: "<b>{point.name} </b><br>{point.y} ({point.percentage: .2f}%)"}}},
            series: [{
                name: "Tipos",
                colorByPoint: true,
                data: [
                    {name: "Arácnido", y: 0, color: "#e84118"},
                    {name: "Insecto", y: 0, color: "#0097e6"},
                    {name: "Miriápodo", y: 0, color: "#44bd32"},
                    {name: "No sé", y: 0, color: "#dcdde1"}
                ]
            }]
        };
        for (let i in json["y2"]) {
            grafico_2.series[0].data[i].y = json["y2"][i];
        }
        $("#grafico-2").highcharts(grafico_2);

        // Gráfico 3
        let grafico_3 = {
            title: {text: "<b>Cantidad de avistamientos informados por mes según estado</b>"},
            xAxis: {categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], title: {text: "<b>Mes</b>"}},
            yAxis: {plotLines: [{value: 0, width: 1, color: "#808080"}], title: {text: "<b>Cantidad</b>"}},
            legend: {layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0},
            series: [
                {type: "column", color: "#e84118", name: "Vivo", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
                {type: "column", color: "#0097e6", name: "Muerto", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
                {type: "column", color: "#44bd32", name: "No sé", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
            ],
            plotOptions: {line: {dataLabels: {enabled: true}}}
        };
        grafico_3.series[0].data = json["vivo"];
        grafico_3.series[1].data = json["muerto"];
        grafico_3.series[2].data = json["no se"];
        $("#grafico-3").highcharts(grafico_3);
    }
    xhr.send();
}

function init() {
    graficos();
}