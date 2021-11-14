/*El peso de cada desviador es en gramos*/
/*En los desviadores el primero siempre es el delantero y el segundo trasero */
db.bicicletas.deleteMany({})
db.bicicletas.insertMany([
    {
        marca:"Scott",
        modelo:"Addict Gravel Tuned", 
        preciobicicleta:8000, 
        cuadro:{
            carbono: "Addict Gravel Disc HMX", 
            talla:"XS-49"
        },  
        ruedas:{
            tipo:"DT Swiss",
            cubiertas:{
                tipo:"Schwalbe",
                medida: {
                    h:700,
                    w: 45
                }
            },
        },
        componentes:["horquilla", "frenos", "manillar","juego de dirección", "sillín", "tija de sillin", "bielas","palancasdecambios", "discodefreno", "potencia"],       
        desviadores:[ {
                    tipo:"SRAM RED eTap AXS",
                    pesomedio: 280
                }, {
                    tipo:"Shimano, XTR",
                    pesomedio: 237
                } ],
        sillín:{
            tipo:"Syncros",
            Características:["Rieles de carbono", "Con montura directa"]
        },
        cassette:["SRAM FORCE", "12 Speed"],
        date: new Date("01/07/2021"), 
        montaña: true,
        carretera: true,
        electrica: false, 
},
    {marca:"BMC",modelo:"Fourstroke 01 LT ONE", preciobicicleta:8000, cuadro:{carbono: "Fourstroke 01", talla:"S-52"}, ruedas:{tipo:"CROSSMAX PRO", cubiertas:{ tipo:"Vittoria Barzo", medida: { h:29, w:2.5}},},componentes:["horquilla", "frenos", "manillar","juego de dirección", "sillín", "tija de sillin", "bielas","palancasdecambios", "discodefreno", "potencia"], desviadores:[{ tipo:"Shimano, Altus", peso:295}, {Tipo:"Sram XX1", pesomedio:355}], sillín:{ tipo:"Fizik", Características:["Rieles de carbono", "Con montura directa"]}, cassette:["SRAM XG", "12 Speed"], date: new Date("01/03/2019"), montaña: true, carretera: false, electrica: false,},
    {marca:"Moustache", modelo:"Samedi", preciobicicleta:8000, cuadro:{aluminio: "Fourstroke 01", talla:"M-54"}, ruedas:{tipo:"CROSSMAX PRO", cubiertas:{ tipo:"Maxxis Assegai", medida: { h:29, w:2.5}},}, componentes:["horquilla", "frenos", "manillar","juego de dirección", "sillín", "tija de sillin", "bielas","palancasdecambios", "discodefreno", "potencia"], desviadores: {delantero:"Shimano, Altus", trasero:"Shimano Dura-Ace"}, sillín:{ tipo:"Moustache, Performance", Características:["Rieles de carbono", "Con montura directa"]}, cassette:["SRAM XG", "12 Speed"], date: new Date("01/01/2021"), montaña: false, carretera: false, electrica: true,},
    {marca:"Cube",modelo:"HVRT CF Zero", preciobicicleta:6000, cuadro:{carbono: "HVRT Aero Design", talla:"L-56"}, ruedas:{tipo:"Rondo X HUNT", cubiertas:{ tipo:"Continental", medida: { h:29, w:2.5}},}, componentes:["horquilla", "frenos", "manillar","juego de dirección", "sillín", "tija de sillin", "bielas","palancasdecambios", "discodefreno", "potencia"], desviadores:[{ tipo:"Shimano Dura-Ace", pesomedio:85}, {Tipo:"Sram XX1", pesomedio:355}], sillín:{ tipo:"ALMS CF", Características:["Rieles de carbono", "Con montura directa"]}, cassette:["SRAM XG", "12 Speed"], date: new Date("01/03/2019"), montaña: false, carretera: true, electrica: false,},
    {marca:"Trek",modelo:"Slash 9.8 GX", preciobicicleta:7000, cuadro:{carbono: "OCLV Mountain", talla:"XS-49"}, ruedas:{tipo:"Bontrager", cubiertas:{ tipo:"Bontrager SE5", medida: { h:700, w:45}},}, componentes:["horquilla", "frenos", "manillar","juego de dirección", "sillín", "tija de sillin", "bielas","palancasdecambios", "discodefreno", "potencia"], desviadores:[{ tipo:"Shimano Dura-Ace", pesomedio:85}, {Tipo:"Sram XX1", pesomedio:355}], sillín:{ tipo:"Bontrager Arvada", Características:["Rieles de carbono", "Con montura directa"]}, cassette:["SRAM XG", "12 Speed"], date: new Date("01/01/2016"), montaña: true, carretera: false, electrica: false,},
    {marca:"Giant",modelo:"PROPEL ADVANCED PRO", preciobicicleta:6000, cuadro:{carbono: "Advanced-Grade Composite", talla:"XL-58"}, ruedas:{tipo:"Giant SLR 1", cubiertas:{ tipo:"CADEX Race 25", medida: { h:700, w:25}},}, componentes:["horquilla", "frenos", "manillar","juego de dirección", "sillín", "tija de sillin", "bielas","palancasdecambios", "discodefreno", "potencia"], desviadores:[{ tipo:"Shimano, Altus", pesomedio:295}, {Tipo:"SRAM Force", pesomedio:322}], sillín:{ tipo:"Giant Fleet SL", Características:["Rieles de carbono", "Con montura directa"]}, cassette:["SRAM XG", "12 Speed"], date: new Date("01/03/2019"), montaña: false, carretera: true, electrica: false,},
    {marca:"Cervélo",modelo:"Aspero-5", preciobicicleta:8000, cuadro:{carbono: "Gravel Carbon", talla:"XL-58"}, ruedas:{tipo:"Reserve Carbon", cubiertas:{ tipo:"Panaracer Grave", medida: { h:700, w:38}},}, componentes:["horquilla", "frenos", "manillar","juego de dirección", "sillín", "tija de sillin", "bielas","palancasdecambios", "discodefreno", "potencia"], desviadores:[{ tipo:"Shimano GRX", pesomedio:96}, {Tipo:"SRAM Force", pesomedio:322}], sillín:{ tipo:"Prologo Dimension", Características:["Rieles de carbono", "Con montura directa"]}, cassette:["SRAM Force", "12 Speed"], date: new Date("01/01/2019"),montaña: true,carretera: true, electrica: false,},
])