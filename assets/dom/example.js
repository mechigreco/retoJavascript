// const id_home = document.getElementById("home");

// console.log(typeof id_home);
// console.log(id_home);

// const article = document.getElementsByTagName("article");
// console.log(article);

// const $clases = document.getElementsByClassName('item');
// console.log($clases);

// const $query = document.querySelector(".item");
// console.log($query);

// const $queryAll = document.querySelectorAll(".item");
// console.log($queryAll);

// const $item = document.querySelector(".item p")
// console.log($item.innerHTML);

// const texto = 'hhhhhh';
// $item.innerHTML = `<h1> ${texto} </h1>`;

// // 
// const $itemes = document.querySelectorAll(".item");
// console.log("Node List", $itemes);

// const itemes_copy = [...$itemes]; // spread operator
// console.log("Array", itemes_copy);

/*Arreglo de objetos que contengan:
1. título, texto 
2. Debe tener un HTML listo
3. debe usar un ciclo para pintar el arreglo en HTML*/

 
const valores = [
    {"name":"Jose", "apodo":"Pepe"},
    {"name":"Maria", "apodo":"Mary"},
    {"name":"Susana", "apodo":"Susi"},
    {"name":"Fernando", "apodo":"Nando"},
    {"name":"Francisco", "apodo":"Pancho"},
];
const $imprimir = document.getElementById('muestraValor');
console.log($imprimir);
console.log(valores.length);
console.log(datos());
// let user =[] ;
// let apodo =[] ;
// let cadena = [];

function datos() {
    let user =[] ;
    let apodo =[] ;
    for (let index = 0; index < valores.length; index++) {
         user =[]; 
         apodo = [];
         user[index]= valores[index].name;
         apodo[index] = valores[index].apodo;
        
        console.log("El nombre es= ", user[index],"el apodo es=", apodo[index]);
        
        document.getElementById("muestraValor").innerHTML = `<h1>El nombre es ${user[index]} y el apodo ${apodo[index]}</h1>`
       
       
        
        
    }
    
    
    
}

const user = {
    email: "email@email.com",
    pwd: "12345"
};

const login_form = document.querySelector("#loginForm");
const response = document.querySelector(".response");


function template(sms){
    var respuesta = `<p> ${sms} </p>`
    return respuesta
}

login_form.addEventListener("submit", function(event){
    console.log('entro');
    event.preventDefault(); //evita que el evento submit envie datos a traves de la url en el form.
    console.log(event.target); // devuelve el elemento
    console.log(login_form["email"]);
    console.log(login_form["pass"]);

    const email = login_form["email"];
    const password = login_form["pass"];

    const rta = user.email === email.value && user.pwd === password.value ? "Login" : "Error";


    console.log(email.value, password.value);
    console.log(rta);
    
    response.innerHTML = template(rta)
    response.classList.add("colorTexto")
    

});


