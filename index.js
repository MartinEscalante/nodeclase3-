const fs = require('fs')
const { stringify } = require('querystring')

const {read,addUser, deleteUser,modifyUser} = require('./clouOp')




// -------------------- LEER EL CODIGO -------------------------

// fs.readFile('./clients/clients.json',"utf-8", (err,success) =>{
//     if (err) {
//         console.log(err)
//     }
//     else {
//         try {
//             const parseData = JSON.parse(success)
//             console.log(typeof parseData);
//         }
//         catch{
//             console.log(err)
//         }
        
//     }
// }
// )


// ESCRIBIR UN ARCHIVO NUEVO, EN ESTE CASO JSON 
// const newUser = {
//     user : "lopez",
//     category : 4,
//     address : "san lorenzo"
// }




// fs.writeFile('./users.json',JSON.stringify(newUser), (err, success) =>{
//     if(err){
//         console.log(err)
//     }
//     else {
//         console.log(success, "agregado")
//     }


// })


// LEER UN ARCHIVO NUEVO, EN ESTE CASO JSON 

// const newUser = {
//     user : "lopez",
//     category : 4,
//     address : "san lorenzo"
// }

// fs.appendFile('./users.json',JSON.stringify(newUser, null,2), (err, success) =>{
//     if(err){
//         console.log(err)
//     }
//     else {
//         console.log(success, "Leido")
//     }


// })

 /* 
 ---------------------------- agregamos a un json un nuevo usuario y lo leimos -------------------------------------------
const newUser2 = {
    user : "jose",
    category : 5,
    address : "Chingolo"

}


fs.readFile('./clients/clients.json','utf-8', (err,data) =>{
    if(err){
        console.log(err,"no pudimos leer")
    }
    else {
        const user = JSON.parse(data)
        user.clientes.push(newUser2)
        fs.writeFile("./clients/clients.json", JSON.stringify(user, null, 2), (err, success) => {
            if (err) {
            console.log(err);
            }
            else {
                console.log(data,"funciona");
            }
        }
        )
    }

}) */


/*-------------------------------------- eliminamos ----------------------------------- */


/*fs.readFile('./clients/clients.json','utf-8', (err,data) =>{
    if(err){
        console.log(err,"no pudimos leer")
    }
    else {
        const user = JSON.parse(data)
        user.clientes.splice(0,1)
        fs.writeFile("./clients/clients.json", JSON.stringify(user, null, 2), (err, success) => {
            if (err) {
            console.log(err);
            }
            else {
                console.log(data,"funciona");
            }
        }
        )
    }

}) */










