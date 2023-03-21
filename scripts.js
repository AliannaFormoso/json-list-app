let supermercados = {
    "Dia": [
        {
            "departamento": "cuidado personal", 
            "localizacion":"inicio del segundo piso",
            "productos": [
                {
                    "nombre": "apositos",
                    "marca": "bonte",
                    "caracteristicas": "superadherentes, superconfortables, suaves, transpilables, hipoalergenicos",
                    "precio": 1.05,
                    "presentacion": "caja de 30 unidades",
                    "oferta": true,
                    "PeriodoVigencia": ["30/12/2022", "10/01/2024"],
                    "consumoHabitual": false,
                    "adquirido": true
                }, 
                {
                    "nombre": "solucion para lentes de contacto",
                    "marca": "hansaplast",
                    "caracteristicas": "solucion unica para limpieza y desinfeccion de todo tipo de lentes de contacto",
                    "precio": 2.13,
                    "presentacion": "botella de 180 ml",
                    "oferta": false,
                    "PeriodoVigencia": ["10/01/2023", "30/11/2023"],
                    "consumoHabitual":true,
                    "adquirido": false,
                    "instrucciones": "inmediatamente despues de quitarse las lentes limpielas con 8 gotas de solucion"

                }
            ]
        },
        {
            "departamento": "verduras y hortalizas",
            "localizacion": "centro del primer piso",
            "productos":[
                {
                    "nombre": "menestra de verduras",
                    "marca": "vegecampo",
                    "caracteristicas": "natural fuente de proteinas",
                    "precio": 1.19,
                    "presentacion": "bolsa de 1 kg",
                    "oferta":true,
                    "PeriodoVigencia": ["28/02/2023", "28/06/2023"],
                    "consumoHabitual": true,
                    "adquirido":true,
                    "instrucciones": "poner en agua con sal y en ebullicion de 10 a 12 minutos y luego eliminar el agua de la coccion y aderezar"
                },
                {
                    "nombre": "patatas fritas",
                    "marca": "McCain",
                    "caracteristicas": "forno julienne, corte fino, 171 kcl/100gr",
                    "precio": 2.89,
                    "presentacion": "bolsa de 600gr",
                    "oferta":false,
                    "PeriodoVigencia":["30/01/2023", "28/06/2023"],
                    "consumoHabitual":false,
                    "adquirido":false,
                    "instrucciones": "hornear por 12 minutos"
                }
            ]
        }

    ],

    "Ahorramas": [
        {
            "departamento": "carniceria",
            "localizacion": "derecha del primer piso",
            "productos":[
                {
                    "nombre": "osobuco",
                    "unidadMedida": "kg",
                    "precio": 2.87,
                    "oferta":true,
                    "PeriodoVigencia":["10/03/2023", "30/04/2023"],
                    "consumoHabitual":true,
                    "adquirido":false
                },
                {
                    "nombre": "chuleta de ternera",
                    "unidadMedida":"kg",
                    "precio": 4.67,
                    "oferta":false,
                    "PeriodoVigencia":["10/03/2023", "30/05/2023"],
                    "consumoHabitual":false,
                    "adquirido":true
                }                
            ]
        },
        {
                    "departamento": "el obrador",
                    "localizacion": "izquierda del primer piso",
                    "productos":[
                        {
                            "nombre": "rosquillas",
                            "unidadMedida": "unidad",
                            "precio": 1.75,
                            "oferta":true,
                            "PeriodoVigencia":["28/02/2023", "05/04/2023"],
                            "consumoHabitual":true,
                            "adquirido":true
                        },
                        {
                            "nombre": "roscon",
                            "unidadMedida": "unidad",
                            "precio": 2.02,
                            "oferta":false,
                            "PeriodoVigencia":["20/03/2023", "15/04/2023"],
                            "consumoHabitual":false,
                            "adquirido":false
                        }
                    ]
        }
    ]

}


function getDiaCaracteristicas() {
    document.write(`<h3>Caracteristicas:</h3>`);
    document.write(`<p>`)
    document.write(supermercados.Dia[0].productos[1].caracteristicas);
    document.write(`<h3>Precio (EUR):</h3>`);
    document.write(`<p>`)
    document.write(supermercados.Dia[0].productos[1].precio);
    document.write(`<h3>Unidad:</h3>`);
    document.write(`<p>`)
    document.write(supermercados.Dia[0].productos[1].presentacion);
    document.write(`<h3>Periodo de Vigencia:</h3>`);
    document.write(`<p>`)
    document.write(supermercados.Dia[0].productos[1].PeriodoVigencia);
    document.write(`<h3>Instrucciones:</h3>`);
    document.write(`<p>`)
    document.write(supermercados.Dia[0].productos[1].instrucciones);
    document.write(`<br>`)
    document.write(`<br>`)
    document.write(`<button>`);
    document.write(`<a href="index.html">Volver</a>`)
}


function getAhorramasCaracteristicas() {
    document.write(`<h3>Precio (EUR):</h3>`);
    document.write(`<p>`)
    document.write(supermercados.Ahorramas[1].productos[1].precio);
    document.write(`<h3>Unidad de Medida:</h3>`);
    document.write(`<p>`)
    document.write(supermercados.Ahorramas[1].productos[1].unidadMedida);
    document.write(`<h3>Periodo de Vigencia:</h3>`);
    document.write(`<p>`)
    document.write(supermercados.Ahorramas[1].productos[1].PeriodoVigencia);
    document.write(`<br>`)
    document.write(`<br>`)
    document.write(`<button>`);
    document.write(`<a href="index.html">Volver</a>`)
    
}

