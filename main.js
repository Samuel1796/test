let day = 10;
let year = 2022;
let month='October';
let firstname="Bankah";
let secondname="Anthony";
let fullname=firstname+" "+secondname;
console.log(fullname);
day=30;
console.log(day+2);
let title = "Grief Child";
let author ="Giovanni";
let readers = 40;
let result= `The novel ${title} written by ${author} has ${readers} likes`;
console.log(result);

const greet=()=>{
    return "Hello World"
}

const Message=greet();
console.log(Message);

const bill=(products,tax)=>{
    let total=0;
   
    for (let i=0;i< products.length ;i++){
        total+=products[i]+products[i]*tax;
        return total;
    }
    
}
const outcome=bill([10,15,30],0.2);
console.log("The outcome is",outcome);

const soap={
    name:"Kleesoft",
    year:2022,
    brand: "Neco"
}
console.log(`THE SOAP IS ${soap.name} .IT WAS MADE IN ${soap.year} BY ${soap.brand}`);



const games=["COD","PUBG","PES"]
const phone=(brand)=>{
    console.log(`Your phone is ${brand}`);
}
let num=5;
for(let i=0;i<4;i++){
   
     console.log(games[i])
   };

   games.forEach(element => {
    console.log(`They are ${element }`)
   });



