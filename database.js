/*
    Setting up Deta Base
    Created By Aashish Loknath Panigrahi
*/
const {Deta} = require('deta');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const deta = Deta(dotenv['parsed']['PROJECT_KEY']);
const db = deta.Base('emoji-karma');

function Karma(fire,water,earth,air,space){
    this.fire=fire;
    this.water=water;
    this.earth=earth;
    this.air=air;
    this.space=space;
    
    this.setKarma = async function(){
        await db.put(
            {
                key:'emoji',
                fire:this.fire,
                water:this.water,
                earth:this.earth,
                air:this.air,
                space:this.space
            })
            .then(()=>{console.log('YASS! DATA IS NOW IN DATABASE.');})
            .catch(()=>{console.log('WHOOPS! SOME ERROR OCCURED.');});
    };

    this.getKarma = async function(){
        const output = await db.get('emoji')
        .then((data)=>{
            return data;
        })
        .catch((err)=>{console.error(err);});
        return output;
    };
    

    //INC/DEC FIRE
    this.increaseFire = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["fire"];
        await db.update({"fire":karma+1},"emoji");
        console.log(await this.getKarma());
    };

    this.decreaseFire = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["fire"];
        await db.update({"fire":karma-1},"emoji");
        console.log(await this.getKarma());
    };

    //INC/DEC WATER
    this.increaseWater = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["water"];
        await db.update({"water":karma+1},"emoji");
        console.log(await this.getKarma());
    };

    this.decreaseWater = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["water"];
        await db.update({"water":karma-1},"emoji");
        console.log(await this.getKarma());
    }

    //INC/DEC AIR
    this.increaseAir = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["air"];
        await db.update({"air":karma+1},"emoji");
        console.log(await this.getKarma());
    };

    this.decreaseAir = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["air"];
        await db.update({"air":karma-1},"emoji");
        console.log(await this.getKarma());
    };

    //INC/DEC EARTH
    this.increaseEarth = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["earth"];
        await db.update({"earth":karma+1},"emoji");
        console.log(await this.getKarma());
    };

    this.decreaseEarth = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["earth"];
        await db.update({"earth":karma-1},"emoji");
        console.log(await this.getKarma());
    };

    //INC/DEC SPACE
    this.increaseSpace = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["space"];
        await db.update({"space":karma+1},"emoji");
        console.log(await this.getKarma());
    };

    this.decreaseSpace = async function(){
        const emojis = await this.getKarma();
        let karma = emojis["space"];
        await db.update({"space":karma-1},"emoji");
        console.log(await this.getKarma());
    };
}

const karma = new Karma(0,0,0,0,0);

//Test Functions
//For getting values which have been already set
async function getValues(){
    const result = await karma.getKarma();
    console.log(result);
    return result;
}

//For setting values which have already been initialized
async function setValues(){
    await karma.setKarma();
    const result = await karma.getKarma();
    console.log(result);
}

//setValues();      //USE ONLY ONCE & THEN COMMENT
//getValues();

//EXPORTING THE OBJECT
module.exports = karma;