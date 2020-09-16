/*
    Creating a CRUD App using Deta : https://docs.deta.sh/docs/base/node_tutorial/#building-a-simple-crud-with-deta-base
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const {Deta} = require('deta');
const deta = Deta(dotenv['parsed']['PROJECT_KEY']);
const db = deta.Base('users');

//Implementation of put(data,key) :
//It is used to insert data or update the data if it already exists
//Replace put by insert to implement insert(data,key)
async function signup (email,pswrd)  {
    await db.put({password:pswrd,key:email})
    .then((data)=>{console.log(`SUCCESS : SIGNUP DONE!`);})
    .catch((err)=>{console.log(`ERROR : SIGNUP FAILED!`);});
}
signup('onemoreemail','pswrd');
signup('anotheremail','pswrd');

//Implementation of get(key) :
//It is used to obtain data fusing the key value
async function signin (email,pswrd){
    await db.get(email)
    .then((data)=>{console.log(`SUCCESS : SIGNIN DONE!`)})
    .catch((err)=>{console.log(`ERROR : SIGNIN FAILED!`)});
};
signin('someemail','pswrd');
signin('anotheremail','pswrd');

//Implementation of delete(key)
//It is used to delete records with a particular key value
async function deleteMail (email,fetchAll){
    await db.delete(email)
    .then((data)=>{
        console.log(`SUCCESS : DELETION DONE!`);
        //Fetches & displays all the item when done
        fetchAll();
    })
    .catch((err)=>{console.log(`ERROR : DELETION FAILED!`)});
}
deleteMail('ddndnnd',fetchAll);

//Implements updation of recors 
async function updatePassword(email,newPassword,fetchAll){
    this.email =email;
    this.newPassword = newPassword;
    await db.update({password:this.newPassword},this.email)
    .then((data)=>{
        console.log(`SUCCESS : UPDATION DONE!`);
        //Fetches & displays all the item when done
        fetchAll();
    })
    .catch((err)=>{console.log(`ERROR : UPDATION FAILED!`)});
    
}
updatePassword('onemoreemail','cmplxpswrd',fetchAll);

//Fetches all the records from the database
//If a particular key isn't send then it shows all the users
async function fetchAll(){
    const obj = await db.fetch().next();
    console.log(obj["value"]);
}
//fetchAll();

