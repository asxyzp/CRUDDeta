/*
    Basic example of server side handling & database updates
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const url = require('url');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv').config({'path':path.join(__dirname,'.env')});
const karma = require('./database');

//CREATING A SERVER
const server = http.createServer((req,res)=>{

    //Allows Cross Origin Requests (CORs) by setting appropriate headers
    res.setHeader('Access-Control-Allow-Origin','*');
    
    
    if(req.url=='/'){
        res.writeHead(200,{'Content-type':'application/json'});
        console.log(`NEW REQUEST from ${req.url}`);
        async function getValues(){
            const result = await karma.getKarma();
            console.log(`RESULT : `+JSON.stringify(result));
            res.end(JSON.stringify(result));
        }
        getValues();
    }

    //For increasing karma of a particular emoji
    else if(req.url.indexOf('/increase?')!=-1){
        res.writeHead(200,{'Content-type':'text/plain'});
        const requested_url = `http://127.0.0.1:5500`+req.url;
        const url = new URL(requested_url);
        if(url.search.substr(1)=='fire'){
            karma.increaseFire();
        }
        else if(url.search.substr(1)=='earth'){
            karma.increaseEarth();
        }
        else if(url.search.substr(1)=='air'){
            karma.increaseAir();
        }
        else if(url.search.substr(1)=='space'){
            karma.increaseSpace();
        }
        else if(url.search.substr(1)=='water'){
            karma.increaseWater();
        }
        res.end('Y');
    }
    
    //For decreasing the karma of a particular emoji
    else if(req.url.indexOf('/decrease?')!=-1){
        res.writeHead(200,{'Content-type':'text/plain'});
        const requested_url = `http://127.0.0.1:5500`+req.url;
        const url = new URL(requested_url);
        if(url.search.substr(1)=='fire'){
            karma.decreaseFire();
        }
        else if(url.search.substr(1)=='earth'){
            karma.decreaseEarth();
        }
        else if(url.search.substr(1)=='air'){
            karma.decreaseAir();
        }
        else if(url.search.substr(1)=='space'){
            karma.decreaseSpace();
        }
        else if(url.search.substr(1)=='water'){
            karma.decreaseWater();
        }
        res.end('Y');
    }
});

//ASSIGNS A PORT ON WHICH THE SERVER WILL RUN
const port = dotenv['parsed']['PORT'] || 5000;
server.listen(port,()=>{
    console.log(`SERVER STARTED ON PORT ${port}`);
});