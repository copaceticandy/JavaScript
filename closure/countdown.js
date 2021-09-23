function countDown(number){

    function logNumber(){
        if(number===1){
            console.log("DONE!");
            clearInterval(tracker);
        }
        else{
            console.log(--number);
        }
    }
    var tracker = setInterval(logNumber,1000);
}

countDown(6);