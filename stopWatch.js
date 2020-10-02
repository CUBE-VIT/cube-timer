//Define vars to hold time values
let sec = 0;
let min = 0;
let ms = 0;

let disSec=0;
let disMin=0;
let disMs=0;


let interval =null;

let status= "stopped";

let times=[];
function stopWatch(){

    ms++;

    //Logic to determine when to increment next value
    if(ms / 100 === 1){
        ms = 0;
        sec++;

        if(sec / 60 === 1){
            sec = 0;
            min++;
        }

    }

    
    if(ms< 10){
        disMs ="0"+ ms.toString();
    }
    else disMs=ms;

    if(sec< 10){
        disSec ="0"+ sec.toString();
    }
    else disSec=sec;

    if(min< 10){
        disMin ="0"+ min.toString();
    }
    else disMin=min;

    //Display updated time values to user
    document.getElementById("display").innerHTML = disMin + ":" + disSec + ":" + disMs;

}
function start(){

    if (status=="stopped"){
        interval= window.setInterval(stopWatch,11);


        status="started";
        console.log(status);

    }

    else{

        window.clearInterval(interval);

        status="stopped startwala";
        console.log(status);

    }
}

function display(){

    window.clearInterval(interval);
    document.getElementById("display").innerHTML=disMin + ":" + disSec + ":" + disMs;
    status="stopped";
    console.log(status);
}                                                                                                      

function reset(){
    sec = 0;
    min = 0;
    ms = 0;
    document.getElementById("display").innerHTML="0"+ min+  ":" +"0"+sec + ":" +"0"+ ms;
}


function save(){
    var e="<br>";
    times.push(disMin + ":" + disSec + ":" + disMs);
    for(i=0;i<times.length;i++){
        e += times[i] + '<br>';
        console.log("Pushing" +disMin + ":" + disSec + ":" + disMs);
    }
    document.getElementById("sidenav").innerHTML=e;
    console.log(times);
}