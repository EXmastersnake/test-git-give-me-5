let age = 28;
// let texte ="Voulez vous jouer à un jeu ?"       
// let city = true;

// console.log(age)
// console.log(texte)
// console.log(city)

let prenom = "Morgan"

console.log("Je m'appel " + prenom)
console.log('Je m\'appel ' + prenom)
console.log(`Je m'appel ${prenom}`)

console.log("Je m'appel " + prenom + "J'ai" + age + "ans")
console.log(`Je m'appel ${prenom} J'ai ${age} ans`)
console.log (`Mon age ${age}ans`)



const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];

console.log (fruits)
fruits.unshift("pomme");

console.log (fruits)
fruits.push("banane");

const personne = {
    prenom: "Morgan",
    nom: "Thuillier",
    age: 28,
    passions: ["Jeux video", "Cinéma", "Comics"],
    adresse : {
        rue : "rue Broca",
        ville : "Paris",
        pays : "France"
        }
    };
 console.log(`${personne.prenom} est agé de ${personne.age} ans, il habite à ${personne.adresse.ville}`)

 personne.passions.push ("Manga")
 console.log(personne.passions)

 personne.adresse.rue = "akihabara"
 personne.adresse.ville = "Tokyo"
 personne.adresse.pays = "Japon"
 

//  const todos = [
//     {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//     },
//     {
//     id: 2,
//     text: "Balade au vieux Lille"
//    ,
//     isCompleted: true,
//     },
//     {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//     },
//    {
//     id: 4,
//     text: "Regarder la TV",
//     isCompleted: false,
//     },
//    ];
//    console.log(todos[0].text); 


age = 15

if(age >= 18){
    console.log("La personne est majeur")
} else {
    console.log('La personne est mineur')
}

// console.log(prime)

// nouvelle variable 'performance' vous lui donner la valeur que vous 
// voulez, et on initialise également une variable prime a 0

//     si perf >= 90 => prime de 200 
//     si perf >= 80 => prime de 150
//     si perf >= 70 => prime de 100
//     si perf >= 70 => prime de 0

//     vu votre performance de xxx vous gagnez une prime de xx

let perf = 80 //(0-100)
let prime = 0 

if(perf >=90){
    prime =200
}else if(perf >=80){
    prime =150
}else if (perf >=70){
    prime =100
}else{
    prime =0
}

    // console.log("vu votre\"performance\"de " + perf + " vous gagnez une prime de "+prime+"€" )

// let x=12 
// let message = x > 10 ? "commande permise " : "commande non permise";
// console.log(message);

let txt1 ="que fait vous aujourd'hui ?"
let txt2 ="Bienvenu dans le html"

let message = txt1.length > txt2.length ? "txt1 plus grand": txt1.length < txt2.
length ? "txt1 plus petit": "les text sont égaux"; 
console.log(message)


let vehicule =  {
    id: 11456,
    matricule:"GH 114654 -59",
    type: "c",
    age: 5,
}

// type : v=voiture : c=camion
//console.log(vehicule.type == "v"?"voiture":"camion")

// <=5 ans : age normal
// >5 : vehicule age
 
// console.log(vehicule.age <= 5? ' age normal': 'vehicule agé')
// console.log(vehicule.age > 5? 'vehicule agé ': 'age normal')

// let age1 = prompt('indiquez votre 1')
// console.log(age1)
// let result ='';

//mineur / majeur / retraité 
//0-18    18-60      60+





// switch (true) {
//     case age1 >= 0 && age1 <18:
//         console.log("mineur");
//         break;
//     case age1 >= 18 && age1 <60:
//         console.log("majeur");
//         break
//     case age1 >=60:
//         console.log("retraité");
//         break
//         default:
//         console.log("erreur");
// }

// let grade =prompt('rensignez votre grade')
// let salaire = 0
//     junior - confirmé - senior
//salaire :
//     1800      2500       3200

//afficher dans la console:
//avec votre grade xxxx vous gagnez un salaire de xxx€

// switch (grade){
//     case "junior" :
//         salaire=1800
//         break
//     case "confirmé" :
//         salaire=2500
//         break
//     case "senior" :
//         salaire=3200
//         break
//         default:
//     salaire="erreur"
// }
// console.log ("vu votre\"grade\"de" + salaire"vous gagnez un salaire "+salaire+")

// let nbRoue = prompt("indique moi le nb de roue de ton véhicule (2,4,6...)")
// let result = ''

// switch(nbRoue){
//   case "2"
//        result= "moto"
//        break


// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"]
// console.log('fruits')
// document.write("i stocke la valeur x lors du passage n°xx dans la boucle<br>")



// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
//   console.log(text)
//    }
//    document.write(text)

//    const todos = [
//        {
//            id: 1,
//            text:"Faire les courses",
//            isCompleted: true,

//        },
//        {
//            id: 2,
//            text:"Balade au vieux Lille",
//            isCompleted: true,
//         },
//         {   
//            id: 3,
//            text:"preparer le diner",
//            isCompleted: false,
//         },
//         {
//            id: 4,
//            text:"regarde la tv",
//            isCompleted: false,
//        }
//    ]
// console.log (todos [0].text.length)

// let resultbis = ''
// for(let i = 0; i<todos.length; i++){
//     message = todos [i] .isCompleted? 'complétée': 'non complétée';
//     todos [i].longueur = todos[i].text.length
//     resultBis +=`la tache $ {todos[i].text} est ${message}, elle
//     contient ${todos [i].longueur} <br>`
// }

// document.write(resultbis)

// console.log = 0
// let index = 0
// while(indenx<todos.length){
// }

// cars = ["BMW","Volvo","Saab", "Ford", "Fiat", "Audi"];
// let i=0

// while (cars[i] ){
//     document.whrite(`la voiture ${cars[i]}contient ${cars [i].
//     length} lettres `)
//     i++
// }

// Créer un nouveau tableau ou chaque élément est la longueur du nom
// de voiture respective
// résultat attendu => [3,5,4,4,4,4]
// let tab = []
// for(let i=0; i<cars.length; i++){
//     tab.push(cars[i].length)
// }
// console.log(tab)

// Cars.forEarch(function(todo){
//     document.write(todo.text +"br");
//    });


// todos.forEach(function(todo) {
// });

// todos.forEach(function (todo){
//     document.write(`la tache est ${todo.isCompleted?
//         'complétée':'non complétée'}<br>`) 
// });

// let listetodo=cars.map(function
//     return cars.length)

// var1=5
// console.log(produit(var1,14,21))

// function produit(para1, para2, para3){
//     return para1 * para2* para3
// }
// function minToSec(min){
//     return min * 60
// }
// console.log(minToSec(60))
// console.log(minToSec(10))
// console.log(minToSec(25))
// let x =15
// let testSec =minToSec(x)
// console.log(testSec)

// let tableau=["aze", 'b', 3]
// function getfirst (tableauOne){
//     return tableauOne[0]
// }
// console.log(getfirst(tableau))
// console.log(getfirst(todos))
// console.log(getfirst(cars))

// let phrase1 ="zerty azerty"
// let phrase2 ="azzerthhfddf"

// function compareLongueur(strA, strB){
//     if(strA.length>strB.length){
//         return strA.length>strB.length
// }
// message = compareLongueurBis(phrase1, phrase2) ? 'phrase1 plus 
// longue' : 'phrase 2 plus longue'
// console.log(message)

// function compare(str1, str2){
//     return str1.length>str2.length?'prhrase1 plus longue': 'phrase 2
//     plus longue'
// }

// console.log(compare(phrase1, phrase2))

// let grandephrase = 'bonjour nous somme le 17 mars'


