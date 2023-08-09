alert("¡Bienvenido a tu programa de entrenamiento de músculos!");

// Declarar los nombres de cada músculo.
const opcionesMusculos = ["piernas", "pecho", "espalda", "hombros", "brazos"];

function mostrarEjercicios(musculo) {
    let ejercicios = "";

    if (musculo === "piernas") {
        ejercicios = "Sentadillas, Peso muerto rumano, Extension de cuadriceps.";
    } else if (musculo === "pecho") {
        ejercicios = "Press de banca plano , Press de banca inclinado con mancuernas, Apertura en maquina.";
    } else if (musculo === "espalda") {
        ejercicios = " Remo con barra, Remo en polea baja , Jalon al pecho.";
    } else if (musculo === "hombros") {
        ejercicios = "Press militar, Elevaciones laterales, Elevaciones frontales.";
    } else if (musculo === "brazos") {
        ejercicios = "Curl de bíceps, Extension de triceps en polea, Curl martillo.";
    } else {
        ejercicios = "No se encontraron ejercicios para ese músculo.";
    }

    return ejercicios;
}

function mostrarInformacionDetallada(musculo) {
    switch (musculo) {
        case "piernas":
            return "Aquí hay más información sobre los ejercicios para piernas: Sentadillas principalmente trabajan los Cuádriceps (parte frontal del muslo), glúteos (principalmente glúteo mayor), isquiotibiales (parte posterior del muslo) . Peso Muerto Rumano trabajan los Isquiotibiales (parte posterior del muslo), glúteos (principalmente glúteo mayor).Extensión de Cuádriceps hacen un enfoque en Cuádriceps (parte frontal del muslo), especialmente el músculo vasto lateral y el músculo vasto medial.";
        case "pecho":
            return "Aquí hay más información sobre los ejercicios para pecho: Press de Banca Plano principalmente trabajan loa músculos pectorales mayores (parte central), tríceps y deltoides anterior (parte frontal de los hombros). Press de Banca Inclinado con Mancuernas trabajan los músculos pectorales mayores (parte superior), tríceps y deltoides anterior (parte frontal de los hombros). Apertura en Máquina van a trabajar músculos pectorales mayores, especialmente las fibras musculares que se estiran y contraen durante el movimiento de apertura.";
        case "espalda":
            return "Aquí hay más información sobre los ejercicios para espalda: Remo en barra principalmente trabajan los músculos dorsales anchos , músculos romboides. Remo en polea baja trabaja los músculos dorsales anchos , músculos romboides,y músculos erector de la columna (en la espalda baja). Jalon al pecho los  musculos más solicitados en este ejercicio son los dorsales y tambien la parte del músculo trapecio (parte superior)";
        case "hombros":
            return "Aquí hay más información sobre los ejercicios para hombros: Press Militar, este ejercicio se enfoca en el deltoides anterior y lateral.Elevaciones Laterales para trabajar el deltoides lateral. Elevaciones Frontales se enfoca en el deltoides anterior"

        case "brazos":
            return "Aquí hay más información sobre los ejercicios para brazos:Curl de Bíceps trabaja la cabeza corta del biceps. Curl de Bíceps Martillo trabaja tanto la cabeza corta como la cabeza larga del bíceps. Extension de triceps en pole trabaja el músculo del tríceps braquial. Esta es la parte posterior del brazo y consiste en tres cabezas: lateral, medial y larga. El ejercicio de extensión de tríceps en polea se enfoca en las tres cabezas del tríceps";
        default:
            return "No se encontró información detallada para ese músculo.";
    }
}

// Solicitar al usuario que elija un músculo.
const seleccion = prompt("Elige un músculo para entrenar: piernas, pecho, espalda, brazos o hombros").toLowerCase();

if (opcionesMusculos.includes(seleccion)) {
    const ejerciciosSeleccionados = mostrarEjercicios(seleccion);
    alert(`Ejercicios para ${seleccion}: ${ejerciciosSeleccionados}`);
} else {
    alert("Selección inválida. Por favor, elige uno de los músculos disponibles.");
}
const deseaMasInfo = prompt("¿Deseas saber más sobre los ejercicios? (si/no)").toLowerCase();
if (deseaMasInfo === "si") {
    const informacionDetallada = mostrarInformacionDetallada(seleccion);
    alert(informacionDetallada);
} else if (deseaMasInfo === "no") {
    alert("te perdiste informacion valiosa")
} else {
    alert("Porfavor ingrese si o no ")
}
alert("¡A entrenar se ha dicho!");




