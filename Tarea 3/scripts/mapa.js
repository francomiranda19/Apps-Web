function mapa() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "../cgi-bin/comunas.py");
        xhr.onload = (data) => {
                let comunas_con_avistamientos = JSON.parse(data.currentTarget.responseText);
                console.log(comunas_con_avistamientos);
                let TILES = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
                let mymap = L.map("mapa").setView([-33.4500000, -70.6666667], 5);
                L.tileLayer(TILES, {minZoom: 2, maxZoom: 18}).addTo(mymap);
                let comunas = comunas_con_avistamientos.comunas;
                for (let i = 0; i < comunas.length; i++) {
                        let title = "Avistamientos informados aquí: " + comunas[i].cantidad;
                        let lat = comunas[i].lat;
                        let lng = comunas[i].lng;
                        let marker = L.marker([lat, lng], {title: title}).addTo(mymap);
                        let html = ``;
                        let imagen = 0;
                        for (let j = 0; j < comunas[i].cantidad; j++) {
                                let id_avistamiento = comunas[i].id[j];
                                let dia_hora = comunas[i].dia_hora[j];
                                let tipo = comunas[i].tipo[j];
                                let estado = comunas[i].estado[j];
                                html += `
                                <b><u>Información de avistamiento</u></b><br>
                                Día y hora: ${dia_hora}<br>
                                Tipo: ${tipo}<br>
                                Estado: ${estado}<br>
                                `
                                for (let k = 0; k < comunas[i].total[j]; k++) {
                                        let ruta = comunas[i].ruta[imagen++];
                                        html += `
                                        <img src="../media/${ruta}" alt="Imagen de un ${tipo}"><br>
                                        `
                                }
                                html += `
                                <a href="../cgi-bin/info-avistamiento.py?id=${id_avistamiento}">Ver avistamiento</a><br>
                                `
                        }
                        marker.bindPopup(html);
                }
        };
        xhr.send()
}