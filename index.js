import { countries } from "./countries.js"

// console.table(countries);

const pais = process.argv[2]

if(!pais){
    console.log("Erro! Insira um valor");
}else{
    const listaFiltrada = countries.filter((item)=>{
        return item.name.toLowerCase().includes(pais.toLowerCase())
    })
    console.table(listaFiltrada);
}











// const pais = process.argv[2]

// if(!pais){
//     console.log("Insira um valor");
// } else {
//     const listaFiltrada = countries.filter((item)=>{
//         return item.name.toLowerCase().includes(pais.toLowerCase())
//     });
//     console.table(listaFiltrada);
// }







// const nome = process.argv[2]

// console.log("Ola, Barbosa, eu sou " + nome);


// if(!pais) {
//     console.log("insira um valor, porra!");
// } else {
//     const listaFiltrada = countries.filter((item)=>{
//         return item.name.toLowerCase().includes(pais.toLowerCase())
//     })
//     console.table(listaFiltrada);
// }



// // console.log(pais);

// // console.table(countries);
