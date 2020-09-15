/*
    Creating a CRUD App using Deta : https://docs.deta.sh/docs/base/node_tutorial/#building-a-simple-crud-with-deta-base
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const {Deta} = require('deta');
const deta = Deta(dotenv['parsed']['PROJECT_KEY']);
const db = deta.Base('users');

async function signup (email,pswrd)  {
    await db.put({password:pswrd,key:email})
    .then((data)=>{
        console.log(`DATA SENT : ${JSON.stringify(data)}`);
    })
    .catch((err)=>{
        console.log(`ERROR : `+JSON.stringify(err));
    });
}

//Uncomment this
signup('onemoreemail','pswrd');
signup('anotheremail','pswrd');

async function signin (email,pswrd){
    await db.get(email)
    .then((data)=>{console.log(`DATA RECEIVED : ${JSON.stringify(data)}`)})
    .catch((err)=>{console.log(`ERROR : ${JSON.stringify(err)}`)});
};

//Uncomment this
signin('someemail','pswrd');
signin('anotheremail','pswrd');

async function fetchAll(){
    const obj = await db.fetch().next();
    console.log(obj["value"]);
}

//Uncomment this
fetchAll();

