const header = new Headers();
header.append('mode','cors');

//SENDS A REQUEST TO FETCH ALL THE KARMA VALUES FOR THE EMOJIS
fetch('http://localhost:63200/',{'method':'GET'})
.then(res=>res.json())
.then(data=>{
    //DISPLAYING ALL THE KARMA VALUES OF EMOJIS
    $('.air-karma').html(``+data['air']);
    $('.earth-karma').html(``+data['earth']);
    $('.fire-karma').html(``+data['fire']);
    $('.space-karma').html(``+data['space']);
    $('.water-karma').html(``+data['water']);
})
.catch(err=>{console.error(err);});