import Meta from "./Meta";

const listaMock = [{
    "id": '1',
    "detalles": 'Correr por 30 minutos',
    "periodo": 'dia',
    "eventos": 1,
    "icono": '🏃',
    "meta": 365,
    "plazo": '2024-12-31',
    "completado": 35
},
{
    "id": '2',
    "detalles": 'Leer libros',
    "periodo": 'año',
    "eventos": 6,
    "icono": '📚',
    "meta": 6,
    "plazo": '2024-12-31',
    "completado": 2
},
{
    "id": '3',
    "detalles": 'Viajar',
    "periodo": 'año',
    "eventos": 6,
    "icono": '✈️',
    "meta": 6,
    "plazo": '2024-12-31',
    "completado": 0
}
];

function Lista() {
    return (
        listaMock.map(meta => <Meta {...meta}></Meta>)
    );
}

export default Lista;