let regiones = {
    "Región de Tarapacá": ['Camiña','Huara','Pozo Almonte','Iquique','Pica','Colchane','Alto Hospicio'],
    "Región de Antofagasta": ['Tocopilla','Maria Elena','Ollague','Calama','San Pedro Atacama','Sierra Gorda','Mejillones','Antofagasta','Taltal'],
    "Región de Atacama": ['Diego de Almagro','Chañaral','Caldera','Copiapo','Tierra Amarilla','Huasco','Freirina','Vallenar','Alto del Carmen'],
    "Región de Coquimbo": ['La Higuera','La Serena','Vicuña','Paihuano','Coquimbo','Andacollo','Rio Hurtado','Ovalle','Monte Patria','Punitaqui','Combarbala','Mincha','Illapel','Salamanca','Los Vilos'],
    "Región de Valparaíso": ['Petorca','Cabildo','Papudo','La Ligua','Zapallar','Putaendo','Santa Maria','San Felipe','Pencahue','Catemu','Llay Llay','Nogales','La Calera','Hijuelas','La Cruz','Quillota','Olmue','Limache','Los Andes','Rinconada','Calle Larga','San Esteban','Puchuncavi','Quintero','Viña del Mar','Villa Alemana','Quilpue','Valparaiso','Juan Fernandez','Casablanca','Concon','Isla de Pascua','Algarrobo','El Quisco','El Tabo','Cartagena','San Antonio','Santo Domingo'],
    "Región del Libertador Bernardo Ohiggins": ['Mostazal','Codegua','Graneros','Machali','Rancagua','Olivar','Doñihue','Requinoa','Coinco','Coltauco','Quinta Tilcoco','Las Cabras','Rengo','Peumo','Pichidegua','Malloa','San Vicente','Navidad','La Estrella','Marchigue','Pichilemu','Litueche','Paredones','San Fernando','Peralillo','Placilla','Chimbarongo','Palmilla','Nancagua','Santa Cruz','Pumanque','Chepica','Lolol'],
    "Región del Maule": ['Teno','Romeral','Rauco','Curico','Sagrada Familia','Hualañe','Vichuquen','Molina','Licanten','Rio Claro','Curepto','Pelarco','Talca','Pencahue','San Clemente','Constitucion','Maule','Empedrado','San Rafael','San Javier','Colbun','Villa Alegre','Yerbas Buenas','Linares','Longavi','Retiro','Parral','Chanco','Pelluhue','Cauquenes'],
    "Región del Biobío": ['Tome','Florida','Penco','Talcahuano','Concepcion','Hualqui','Coronel','Lota','Santa Juana','Chiguayante','San Pedro de la Paz','Hualpen','Cabrero','Yumbel','Tucapel','Antuco','San Rosendo','Laja','Quilleco','Los Angeles','Nacimiento','Negrete','Santa Barbara','Quilaco','Mulchen','Alto Bio Bio','Arauco','Curanilahue','Los Alamos','Lebu','Cañete','Contulmo','Tirua'],
    "Región de La Araucanía": ['Renaico','Angol','Collipulli','Los Sauces','Puren','Ercilla','Lumaco','Victoria','Traiguen','Curacautin','Lonquimay','Perquenco','Galvarino','Lautaro','Vilcun','Temuco','Carahue','Melipeuco','Nueva Imperial','Puerto Saavedra','Cunco','Freire','Pitrufquen','Teodoro Schmidt','Gorbea','Pucon','Villarrica','Tolten','Curarrehue','Loncoche','Padre Las Casas','Cholchol'],
    "Región de Los Lagos": ['San Pablo','San Juan','Osorno','Puyehue','Rio Negro','Purranque','Puerto Octay','Frutillar','Fresia','Llanquihue','Puerto Varas','Los Muermos','Puerto Montt','Maullin','Calbuco','Cochamo','Ancud','Quemchi','Dalcahue','Curaco de Velez','Castro','Chonchi','Queilen','Quellon','Quinchao','Puqueldon','Chaiten','Futaleufu','Palena','Hualaihue'],
    "Región Aisén del General Carlos Ibáñez del Campo": ['Guaitecas','Cisnes','Aysen','Coyhaique','Lago Verde','Rio Ibañez','Chile Chico','Cochrane','Tortel',"O'Higins"],
    "Región de Magallanes y la Antártica Chilena": ['Torres del Paine','Puerto Natales','Laguna Blanca','San Gregorio','Rio Verde','Punta Arenas','Porvenir','Primavera','Timaukel','Antartica'],
    "Región Metropolitana de Santiago": ['Tiltil','Colina','Lampa','Conchali','Quilicura','Renca','Las Condes','Pudahuel','Quinta Normal','Providencia','Santiago','La Reina','Ñuñoa','San Miguel','Maipu','La Cisterna','La Florida','La Granja','Independencia','Huechuraba','Recoleta','Vitacura','Lo Barrenechea','Macul','Peñalolen','San Joaquin','La Pintana','San Ramon','El Bosque','Pedro Aguirre Cerda','Lo Espejo','Estacion Central','Cerrillos','Lo Prado','Cerro Navia','San Jose de Maipo','Puente Alto','Pirque','San Bernardo','Calera de Tango','Buin','Paine','Peñaflor','Talagante','El Monte','Isla de Maipo','Curacavi','Maria Pinto','Melipilla','San Pedro','Alhue','Padre Hurtado'],
    "Región de Los Ríos": ['Lanco','Mariquina','Panguipulli','Mafil','Valdivia','Los Lagos','Corral','Paillaco','Futrono','Lago Ranco','La Union','Rio Bueno'],
    "Región Arica y Parinacota": ['Gral. Lagos','Putre','Arica','Camarones'],
    "Región del Ñuble": ['Cobquecura','Ñiquen','San Fabian','San Carlos','Quirihue','Ninhue','Trehuaco','San Nicolas','Coihueco','Chillan','Portezuelo','Pinto','Coelemu','Bulnes','San Ignacio','Ranquil','Quillon','El Carmen','Pemuco','Yungay','Chillan Viejo']
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
        let comunas_region = regiones["Región de Tarapacá"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 2) {
        let comunas_region = regiones["Región de Antofagasta"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 3) {
        let comunas_region = regiones["Región de Atacama"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 4) {
        let comunas_region = regiones["Región de Coquimbo"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 5) {
        let comunas_region = regiones["Región de Valparaíso"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 6) {
        let comunas_region = regiones["Región del Libertador Bernardo Ohiggins"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 7) {
        let comunas_region = regiones["Región del Maule"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 8) {
        let comunas_region = regiones["Región del Biobío"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 9) {
        let comunas_region = regiones["Región de La Araucanía"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 10) {
        let comunas_region = regiones["Región de Los Lagos"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 11) {
        let comunas_region = regiones["Región Aisén del General Carlos Ibáñez del Campo"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 12) {
        let comunas_region = regiones["Región de Magallanes y la Antártica Chilena"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 13) {
        let comunas_region = regiones["Región Metropolitana de Santiago"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 14) {
        let comunas_region = regiones["Región de Los Ríos"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 15) {
        let comunas_region = regiones["Región Arica y Parinacota"].sort();
        for (let c of comunas_region) {
            let option = new Option(c);
            comunas.options.add(option);
        }
    } if (region === 16) {
        let comunas_region = regiones["Región del Ñuble"].sort();
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
    if (imagenes == 5) {
        boton.style.visibility = "hidden";
    }
}

function crear_nuevo_formulario() {

    // El nuevo formulario se crea solo si pasa la validación
    if (validar(false)) {
        let boton = document.getElementsByClassName("boton-agregar")[formularios - 1];
        boton.style.visibility = "visible";
        let info = document.getElementsByClassName("info-avistamiento")[formularios - 1];
        let newInfo = info.cloneNode(true);
    
        //document.write(nuevasFotos);
        boton.style.visibility = "hidden";

        // Se deshabilita la información de avistamiento del formulario anterior
        document.getElementsByName("dia-hora-avistamiento")[formularios - 1].disabled = true;
        document.getElementsByName("tipo-avistamiento")[formularios - 1].disabled = true;
        document.getElementsByName("estado-avistamiento")[formularios - 1].disabled = true;
        let fotos = document.getElementsByName("foto-avistamiento");
        for (foto of fotos) {
            foto.disabled = true;
        }
        
        // Se aumenta la cantidad de formularios totales
        formularios++;
        
        // Se inserta el nuevo formulario al final del otro formulario
        info.insertAdjacentElement("afterend", newInfo);
        
        // Se limpia el nuevo formulario
        document.getElementsByName("dia-hora-avistamiento")[formularios - 1].value = "";
        document.getElementsByName("tipo-avistamiento")[formularios - 1].selectedIndex = 0;
        document.getElementsByName("estado-avistamiento")[formularios - 1].selectedIndex = 0;
        
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
    if (i == 0) {
        errores += "Debe elegir una región\n"
        return false
    } else {
        return true;
    }
}

function validar_comuna() {
    let i = document.getElementsByName("comuna")[0].selectedIndex;

    // Se verifica que se haya seleccionado una comuna
    if (i == 0) {
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
    if (sec.length == 0) {
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
    if (name.length == 0) {
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
    if (correo.length == 0) {
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
    if (cel.length == 0) {
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
    let fecha = document.getElementsByName("dia-hora-avistamiento")[formularios - 1].value;
    let fechaRegex = /^\d{2,4}\-\d{1,2}\-\d{1,2}[\s]([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    
    // Si no se ingresó fecha, hay error
    if (fecha.length == 0) {
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
    let i = document.getElementsByName("tipo-avistamiento")[formularios - 1].selectedIndex;
    // Se verifica que se haya seleccionado una comuna
    if (i == 0) {
        errores += "Debe elegir un tipo\n";
        return false;
    } else {
        return true;
    }
}

function validar_estado() {
    let i = document.getElementsByName("estado-avistamiento")[formularios - 1].selectedIndex;
    // Se verifica que se haya seleccionado una comuna
    if (i == 0) {
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
    if (cantidad == 0) {
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

    const valueIsTrue = (element) => element == true;

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