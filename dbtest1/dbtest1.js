const header = new Headers();
header.append('mode','cors');

//SENDS A REQUEST TO FETCH ALL THE KARMA VALUES FOR THE EMOJIS
fetch('http://localhost:63200/',{'method':'GET'})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    //DISPLAYING ALL THE KARMA VALUES OF EMOJIS
    $('.air-karma').html(``+data['air']);
    $('.earth-karma').html(``+data['earth']);
    $('.fire-karma').html(``+data['fire']);
    $('.space-karma').html(``+data['space']);
    $('.water-karma').html(``+data['water']);
})
.catch(err=>{console.error(err);});

$(document).ready(function(){
    
    //HANDLING UP BUTTONS
    $('.air-karma-up').click(function(){
            console.log('AIR KARMA UP');
            $('.air-karma').html(Number($('.air-karma').html())+1);
            fetch('http://localhost:63200/increase?air',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});
    });
    $('.earth-karma-up').click(function(){
            console.log('EARTH KARMA UP');
            $('.earth-karma').html(Number($('.earth-karma').html())+1);
            fetch('http://localhost:63200/increase?earth',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});
    });
    $('.fire-karma-up').click(function(){
            console.log('FIRE KARMA UP');
            $('.fire-karma').html(Number($('.fire-karma').html())+1);
            fetch('http://localhost:63200/increase?fire',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});
    });
    $('.space-karma-up').click(function(){
            $('.space-karma').html(Number($('.space-karma').html())+1);
            console.log('SPACE KARMA UP');
            fetch('http://localhost:63200/increase?space',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});
    });
    $('.water-karma-up').click(function(){
        $('.water-karma').html(Number($('.water-karma').html())+1);
        console.log('WATER KARMA UP');
        fetch('http://localhost:63200/increase?water',{'method':'POST'})
        .then(res=>res.text())
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{console.error(err);});        
    });

    //HANDLING DOWN BUTTONS
    $('.air-karma-down').click(function(){
        console.log('AIR KARMA DOWN');    
        $('.air-karma').html(Number($('.air-karma').html())-1);
            fetch('http://localhost:63200/decrease?air',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});    
    });

    $('.earth-karma-down').click(function(){
            console.log('EARTH KARMA DOWN');
            $('.earth-karma').html(Number($('.earth-karma').html())-1);
            fetch('http://localhost:63200/decrease?earth',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});
    });

    $('.fire-karma-down').click(function(){
            console.log('FIRE KARMA DOWN');
            $('.fire-karma').html(Number($('.fire-karma').html())-1);
            fetch('http://localhost:63200/decrease?fire',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});
    });
    $('.space-karma-down').click(function(){
            console.log('SPACE KARMA DOWN');
            $('.space-karma').html(Number($('.space-karma').html())-1);
            fetch('http://localhost:63200/decrease?space',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});
    });
    $('.water-karma-down').click(function(){
            console.log('WATER KARMA DOWN');   
            $('.water-karma').html(Number($('.water-karma').html())-1);
            fetch('http://localhost:63200/decrease?water',{'method':'POST'})
            .then(res=>res.text())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{console.error(err);});     
    });
});