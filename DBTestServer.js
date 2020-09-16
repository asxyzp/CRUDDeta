/*
    Basic example of server side handling & database updates
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const path = require('path');
const http = require('http');
const dotenv = require('dotenv').config({'path':path.join(__dirname,'.env')});
const karma = require('./database');

//CREATING A SERVER
const server = http.createServer((req,res)=>{
    //Allows Cross Origin Requests (CORs) by setting appropriate headers
    res.setHeader('Access-Control-Allow-Origin','*');
    res.writeHead(200,{'Content-type':'application/json'});

    if(req.url='/'){
        console.log(`NEW REQUEST from ${req.url}`);
        async function getValues(){
            const result = await karma.getKarma();
            console.log(`RESULT : `+JSON.stringify(result));
            res.end(JSON.stringify(result));
        }
        getValues();
    }
    
    //For increasing karma of a particular emoji
    if(req.url.indexOf('/increase?=')!=-1){

    }
    //For decreasing the karma of a particular emoji
    else if(req.url.indexOf('/decrease?=')!=-1){
        
    }
});

//ASSIGNS A PORT ON WHICH THE SERVER WILL RUN
const port = dotenv['parsed']['PORT'] || 5000;
server.listen(port,()=>{
    console.log(`SERVER STARTED ON PORT ${port}`);
});