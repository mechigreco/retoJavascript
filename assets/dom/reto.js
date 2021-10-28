// Reto 1
const frasePalindroma = document.querySelector("#botonPalindromo");

frasePalindroma.addEventListener("click", function(){
    const fraseaCorroborar = prompt("Ingrese la frase o palabra: ");
    const sinEspacio = fraseaCorroborar.replace(/ /g, "");
    const cantidad = sinEspacio.length;
    const frase = sinEspacio.split('')
    console.log(frase);

    const subcadena = [...frase]
    const reves = subcadena.reverse();
    console.log(subcadena);
    console.log(reves);
    var flag ;
   for (let index = 0; index < cantidad ; index++) {
       console.log("f ", frase[index]);
       console.log("r",reves[index]);
       if (frase[index] == reves[index]){
           flag = true;
       } else{
           flag = false;
       }
   }
   
     
    document.getElementById("palindromo").innerHTML= template(flag, fraseaCorroborar)
});

function template(rta, fr){
     
    return `<p> Es ${fr}  palindroma??? <br>La respuesta es... ${rta} </p>`
}
// Reto 2
const losPaises = ["Kazajistan","Argentina", "Brazil", "Paraguay", "Peru", "Republica Dominicana", "El Salvador"]; //, "Estados Unidos de America"];
const btnPaises = document.querySelector("#botonLongestCountry");
const mayor = []
var nmayor=0, npais,nn=0;
var ubi = 0;
btnPaises.addEventListener("click", function(){
    losPaises.forEach(element => {
        const sinEspacio = element.replace(/ /g, "");
        console.log(sinEspacio);
        const longitud = sinEspacio.length
        console.log(longitud);
        mayor.push(longitud);
        
    });
    
    
    console.log(mayor);
    
    var max = Math.max(...mayor);
    console.log(max);
    
    for (let i = 0; i < mayor.length; i++) {
        const element = mayor[i];
        if (element==max){
             ubi = i;
        }
    }

    console.log("cantidad de letras", losPaises[ubi]);
    document.getElementById("country").innerHTML= template(losPaises[ubi], max)
    
});
function template(pais, letras){
     
    return `<p> El pais  ${pais}  tiene ${letras} letras, por tanto es el mayor </p>`
}

// Reto 3

const retoGrados = document.querySelector("#grados");
const inputF = document.querySelector("#far");
retoGrados.addEventListener("click", function(){
    const retornar = farenhaitToCelsius(inputF.value)
    document.getElementById("formula").innerHTML= `<p> ${inputF.value} grados F son ${retornar} grados C </p>`
});

function farenhaitToCelsius(far){
    const convertidor = (far-32)*5/9;
    return convertidor; 
    

}



// Reto 4
const retoPar = document.querySelector("#cantidadParametros");
retoPar.addEventListener("click", function(){
    cantidadParams(1,2,3, 'hola', 4,6,7,10,8);


    function cantidadParams(){
        var args = [].slice.call(arguments);
        cant = args.length;
        console.log(args);
        console.log(cant);
        return document.getElementById("parametros").innerHTML= `<p> La cantidad de parametros enviada a la funcion es= ${cant}  </p>`
    }
})
