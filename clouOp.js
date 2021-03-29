const fs = require('fs')

const newUser2 = {
    user : "monica",
    category : 1,
    address : "Chingolo"

}

const defaultUser = {
    user:"nuevo user",
    category: 3,
    address:"escalada 12"
}


const stringUser = JSON.stringify(defaultUser)
const [,,arg= `${stringUser}`] = process.argv
console.log

const read = () => {

    fs.readFile('./clients/clients.json',"utf-8", (err,success) =>{
    if (err) {
        console.log(err)
    }
    else {
        try {
            const parseData = JSON.parse(success)
            console.log(typeof parseData);
        }
        catch{
            console.log(err)
        }
        
    }
}
)
}    



const addUser = () => {
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
    
    })
}

const deleteUser = () =>{
    fs.readFile('./clients/clients.json','utf-8', (err,data) =>{
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
    
    })
}

const modifyUser = () =>{
    fs.readFile('./clients/clients.json','utf-8', (err,data) =>{
        if(err){
            console.log(err,"no pudimos leer")
        }
        else {
            const user = JSON.parse(data)
            user.clientes.splice(0,1,newUser2)
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
    
    })
}


module.exports = {addUser, deleteUser,read,modifyUser}