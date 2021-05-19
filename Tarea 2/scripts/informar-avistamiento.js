let regiones = {
    "Región de Tarapacá": ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"],
    "Región de Antofagasta": ["Antofagasta", "Calama", "Maria Elena", "Mejillones", "Ollague", "San Pedro Atacama", "Sierra Gorda", "Taltal", "Tocopilla"],
    "Región de Atacama": ["Alto del Carmen", "Caldera", "Chañaral", "Copiapo", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"],
    "Región de Coquimbo": ["Andacollo", "Combarbala", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Mincha", "Monte Patria", "Ovalle", "Paihuano", "Punitaqui", "Rio Hurtado", "Salamanca", "Vicuña"],
    "Región de Valparaíso": ["Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concon", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernandez", "La Calera", "La Cruz", "La Ligua", "Limache", "Llay Llay", "Los Andes", "Nogales", "Olmue", "Papudo", "Pencahue", "Petorca", "Puchuncavi", "Putaendo", "Quillota", "Quilpue", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa Maria", "Santo Domingo", "Valparaiso", "Villa Alemana", "Viña del Mar", "Zapallar"],
    "Región del Libertador Bernardo Ohiggins": ["Chepica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machali", "Malloa", "Marchigue", "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta Tilcoco", "Rancagua", "Rengo", "Requinoa", "San Fernando", "San Vicente", "Santa Cruz"],
    "Región del Maule": ["Cauquenes", "Chanco", "Colbun", "Constitucion", "Curepto", "Curico", "Empedrado", "Hualañe", "Licanten", "Linares", "Longavi", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Rio Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquen", "Villa Alegre", "Yerbas Buenas"],
    "Región del Biobío": ["Alto Bio Bio", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepcion", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpen", "Hualqui", "Laja", "Lebu", "Los Alamos", "Los Angeles", "Lota", "Mulchen", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Barbara", "Santa Juana", "Talcahuano", "Tirua", "Tome", "Tucapel", "Yumbel"],
    "Región de La Araucanía": ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautin", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquen", "Pucon", "Puerto Saavedra", "Puren", "Renaico", "Temuco", "Teodoro Schmidt", "Tolten", "Traiguen", "Victoria", "Vilcun", "Villarrica"],
    "Región de Los Lagos": ["Ancud", "Calbuco", "Castro", "Chaiten", "Chonchi", "Cochamo", "Curaco de Velez", "Dalcahue", "Fresia", "Frutillar", "Futaleufu", "Hualaihue", "Llanquihue", "Los Muermos", "Maullin", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldon", "Purranque", "Puyehue", "Queilen", "Quellon", "Quemchi", "Quinchao", "Rio Negro", "San Juan", "San Pablo"],
    "Región Aisén del General Carlos Ibáñez del Campo": ["Aysen", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higins", "Rio Ibañez", "Tortel"],
    "Región de Magallanes y la Antártica Chilena": ["Antartica", "Laguna Blanca", "Porvenir", "Primavera", "Puerto Natales", "Punta Arenas", "Rio Verde", "San Gregorio", "Timaukel", "Torres del Paine"],
    "Región Metropolitana de Santiago": ["Alhue", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchali", "Curacavi", "El Bosque", "El Monte", "Estacion Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipu", "Maria Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolen", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquin", "San Jose de Maipo", "San Miguel", "San Pedro", "San Ramon", "Santiago", "Talagante", "Tiltil", "Vitacura"],
    "Región de Los Ríos": ["Corral", "Futrono", "La Union", "Lago Ranco", "Lanco", "Los Lagos", "Mafil", "Mariquina", "Paillaco", "Panguipulli", "Rio Bueno", "Valdivia"],
    "Región Arica y Parinacota": ["Arica", "Camarones", "Gral. Lagos", "Putre"],
    "Región del Ñuble": ["Bulnes", "Chillan", "Chillan Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquen", "Pemuco", "Pinto", "Portezuelo", "Quillon", "Quirihue", "Ranquil", "San Carlos", "San Fabian", "San Ignacio", "San Nicolas", "Trehuaco", "Yungay"]
};

let formularios = 1;
let imagenes = 1;

function calcular_comunas() {
    let region = document.getElementsByName("region")[0].selectedIndex;
    let comunas = document.getElementsByName("comuna")[0];

    // Se eliminan comunas pertenecientes a otras regiones
    for (let i in comunas) {
        comunas.options.remove(i);
    }

    comunas.options.add(new Option("Elija una opción"));
    // Se muestran comunas según su región
    if (region === 1) {
        let comunas_region = regiones["Región de Tarapacá"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 2) {
        let comunas_region = regiones["Región de Antofagasta"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 3) {
        let comunas_region = regiones["Región de Atacama"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 4) {
        let comunas_region = regiones["Región de Coquimbo"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 5) {
        let comunas_region = regiones["Región de Valparaíso"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 6) {
        let comunas_region = regiones["Región del Libertador Bernardo Ohiggins"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 7) {
        let comunas_region = regiones["Región del Maule"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 8) {
        let comunas_region = regiones["Región del Biobío"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 9) {
        let comunas_region = regiones["Región de La Araucanía"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 10) {
        let comunas_region = regiones["Región de Los Lagos"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 11) {
        let comunas_region = regiones["Región Aisén del General Carlos Ibáñez del Campo"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 12) {
        let comunas_region = regiones["Región de Magallanes y la Antártica Chilena"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 13) {
        let comunas_region = regiones["Región Metropolitana de Santiago"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 14) {
        let comunas_region = regiones["Región de Los Ríos"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 15) {
        let comunas_region = regiones["Región Arica y Parinacota"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 16) {
        let comunas_region = regiones["Región del Ñuble"];
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    }
}

function actual_time() {
    let fecha = document.getElementsByName("dia-hora-avistamiento")[formularios - 1];

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let mes = (month < 10) ? "0" + month : month;
    let day = today.getDate()
    let dia = (day < 10) ? "0" + day : day;
    let hour = today.getHours();
    let hora = (hour < 10) ? "0" + hour : hour;
    let minute = today.getMinutes();
    let minuto = (minute < 10) ? "0" + minute : minute;
    fecha.placeholder = year + "-" + mes + "-" + dia + " " + hora + ":" + minuto;
}

function agregar_imagen() {
    // Se aumenta la cantidad de imagenes y se crea el nuevo input
    imagenes++;

    let input = document.getElementsByClassName("imagenes")[formularios - 1].childNodes;
    let newInput = input[1].cloneNode();
    let fotos = document.getElementsByClassName("imagenes")[formularios - 1];
    let boton = document.getElementsByClassName("boton-agregar")[formularios - 1];

    // Se setea nuevo id para el nuevo input
    // Se setea un nuevo input sin ningún archivo
    newInput.value = "";
    fotos.appendChild(newInput);

    // Si ya se agregaron 5 fotos, el botón desaparece
    if (imagenes === 5) {
        boton.style.visibility = "hidden";
    }
}

function crear_nuevo_formulario() {
    // El nuevo formulario se crea solo si pasa la validación
    if (validar(false)) {
        let boton = document.getElementsByClassName("boton-agregar")[formularios - 1];
        boton.style.visibility = "visible";

        // Se cambia el número del nombre para efectos de facilidad
        document.getElementsByName("dia-hora-avistamiento-" + formularios)[0].name = "dia-hora-avistamiento-" + (formularios + 1);
        document.getElementsByName("tipo-avistamiento-" + formularios)[0].name = "tipo-avistamiento-" + (formularios + 1);
        document.getElementsByName("estado-avistamiento-" + formularios)[0].name = "estado-avistamiento-" + (formularios + 1);
        let info = document.getElementsByClassName("info-avistamiento")[0];
        let newInfo = info.cloneNode(true);

        // El nombre original vuelve
        document.getElementsByName("dia-hora-avistamiento-" + (formularios + 1))[0].name = "dia-hora-avistamiento-" + formularios;
        document.getElementsByName("tipo-avistamiento-" + (formularios + 1))[0].name = "tipo-avistamiento-" + formularios;
        document.getElementsByName("estado-avistamiento-" + (formularios + 1))[0].name = "estado-avistamiento-" + formularios;
        console.log(newInfo.childNodes);
    
        //document.write(nuevasFotos);
        boton.style.visibility = "hidden";

        // Se deshabilita la información de avistamiento del formulario anterior
        document.getElementsByName("dia-hora-avistamiento-" + formularios)[0].disabled = true;
        document.getElementsByName("tipo-avistamiento-" + formularios)[0].disabled = true;
        document.getElementsByName("estado-avistamiento-" + formularios)[0].disabled = true;
        let fotos = document.getElementsByName("foto-avistamiento");
        for (let foto of fotos) {
            foto.disabled = true;
        }
        
        // Se aumenta la cantidad de formularios totales
        formularios++;
        
        // Se inserta el nuevo formulario al final del otro formulario
        info.insertAdjacentElement("afterend", newInfo);
        
        // Se limpia el nuevo formulario
        document.getElementsByName("dia-hora-avistamiento-" + formularios)[0].value = "";
        document.getElementsByName("tipo-avistamiento-" + formularios)[0].selectedIndex = 0;
        document.getElementsByName("estado-avistamiento-" + formularios)[0].selectedIndex = 0;
        
        let newFotos = document.getElementsByClassName("imagenes")[formularios - 1].childNodes;
        newFotos[1].value = "";
        while (newFotos.length > 2) {
            newFotos[2].remove();
        }

        // La cantidad de imagenes vuelve a ser la inicial
        imagenes = 1;
    }
}

function cerrar_ventana_emergente() {
    let ventana = document.getElementsByClassName("ventana-emergente")[0];

    // En caso de apretar la opción "No..." se regresa al formulario
    ventana.style.visibility = "hidden";
}

/*------------------------------ VALIDACIONES -------------------------------*/
let errores = "";
function validar_region() {
    let i = document.getElementsByName("region")[0].selectedIndex;

    // Se verifica que se haya seleccionado una región
    if (i === 0) {
        errores += "Debe elegir una región\n"
        return false
    } else {
        return true;
    }
}

function validar_comuna() {
    let i = document.getElementsByName("comuna")[0].selectedIndex;

    // Se verifica que se haya seleccionado una comuna
    if (i === 0) {
        errores += "Debe elegir una comuna\n";
        return false;
    } else {
        return true;
    }
}

function validar_sector() {
    let sec = document.getElementsByName("sector")[0].value;
    let secRegex = /^[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    // Si no se ingresó sector, está correcto
    if (sec.length === 0) {
        return true;
    }
    // Si el sector supera los 100 caracteres hay un error
    if (sec.length > 100) {
        errores += "Nombre del sector demasiado largo\n";
        return false;
    }

    // Se verifica que el sector solo posea caracteres alfa numéricos
    if (sec.match(secRegex)) {
        return true;
    } else {
        errores += "Nombre del sector inválido\n";
        return false;
    }
}

function validar_nombre() {
    let name = document.getElementsByName("nombre")[0].value;
    let nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    // Si no se ingresa nombre, hay un error
    if (name.length === 0) {
        errores += "Debe ingresar nombre\n";
        return false;
    }
    // Si el nombre tiene más de 200 caracteres hay un error
    if (name.length > 200) {
        errores += "Nombre demasiado largo\n";
        return false;
    }

    // Se verifica que el nombre solo contenga letras
    if (name.match(nameRegex)) {
        return true;
    } else {
        errores += "Nombre inválido\n";
        return false;
    }
}

function validar_email() {
    let correo = document.getElementsByName("email")[0].value;
    let correoRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    // Si no se ingresó correo hay un error
    if (correo.length === 0) {
        errores += "Debe ingresar email\n";
        return false;
    }

    // Si el email tiene más de 100 caracteres hay un error
    if (correo.length > 100) {
        errores += "Email demasiado largo\n";
        return false;
    }
    // Se testea que se cumpla el formato de email
    if (correo.match(correoRegex)) {
        return true;
    } else {
        errores += "Email incorrecto, no cumple formato\n";
        return false;
    }
}

function validar_celular() {
    let cel = document.getElementsByName("celular")[0].value;
    let celRegex = /^[+][0-9]+$/;

    // Si no hay número de celular, se acepta
    if (cel.length === 0) {
        return true;
    }

    // Si el número de celular tiene largo mayor a 15, hay error
    if (cel.length > 15) {
        errores += "Número de celular demasiado largo\n";
        return false;
    }

    // Se testea que se solo hayan números y que el primer carácter sea un +
    if (cel.match(celRegex)) {
        return true;
    } else {
        errores += "Número de celular inválido\n"
        return false;
    }
}

function validar_dia_hora() {
    let fecha = document.getElementsByName("dia-hora-avistamiento-" + formularios)[0].value;
    let fechaRegex = /^\d{2,4}\-\d{1,2}\-\d{1,2}[\s]([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    
    // Si no se ingresó fecha, hay error
    if (fecha.length === 0) {
        errores += "Debe ingresar día y hora\n";
        return false;
    }
    // Si la fecha ingresada es demasiado larga, hay error
    if (fecha.length > 20) {
        errores += "Día y hora ingresados son demasiado largos\n";
        return false;
    }

    // Se verifica que se cumpla el formato pedido
    if (fecha.match(fechaRegex)) {
        return true;
    } else {
        errores += "Día y hora no cumple el formato solicitado\n";
        return false;
    }
}

function validar_tipo() {
    let i = document.getElementsByName("tipo-avistamiento-" + formularios)[0].selectedIndex;
    // Se verifica que se haya seleccionado una comuna
    if (i === 0) {
        errores += "Debe elegir un tipo\n";
        return false;
    } else {
        return true;
    }
}

function validar_estado() {
    let i = document.getElementsByName("estado-avistamiento-" + formularios)[0].selectedIndex;
    // Se verifica que se haya seleccionado una comuna
    if (i === 0) {
        errores += "Debe elegir un estado\n";
        return false;
    } else {
        return true;
    }
}

function validar_foto() {
    let cantidad = document.getElementsByClassName("imagenes")[formularios - 1].childNodes[1].files.length;
    //let cantidad = document.getElementsByName("foto-avistamiento")[formularios - 1].files.length;

    // Si no se ha agregado ninguna foto, hay un error
    if (cantidad === 0) {
        errores += "Debe enviar al menos una foto\n";
        return false;
    } else {
        return true;
    }
}

function validar_extension_imagen(node) {
    let fileValue = node.value;
    let extensiones = /(.jpg|.jpeg|.png|.gif)$/i;
    // Se chequea si el archivo ingresado efectivamente es una imagen
    if (!extensiones.exec(fileValue)) {
        alert("El archivo ingresado no tiene un formato de imágen válido");
        node.value = "";
        return false;
    } else {
        return true;
    }
}

function validar(activar_ventana) {
    // Se realizan todas las validaciones necesarias para enviar la información
    let validaciones = [
        validar_region(),
        validar_comuna(),
        validar_sector(),
        validar_nombre(),
        validar_email(),
        validar_celular(),
        validar_dia_hora(),
        validar_tipo(),
        validar_estado(),
        validar_foto()
    ];

    const valueIsTrue = (element) => element === true;

    // Si se quiere enviar la información
    if (activar_ventana) {
        // Si se pasan todas las validaciones, se muestra la ventana emergente
        if (validaciones.every(valueIsTrue)) {
            document.getElementsByClassName("ventana-emergente")[0].style.visibility = "visible";
            return true;
        } else {
            alert(errores);
            errores = "";
            return false;
        }
    }
    // Si se quiere informar otro avistamiento
    else {
        // Si se pasan las validaciones necesarias, se crea el nuevo formulario
        if (validaciones.every(valueIsTrue)) {
            return true;
        } else {
            alert(errores);
            errores = "";
            return false;
        }
    }
}