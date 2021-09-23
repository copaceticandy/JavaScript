function arrayManipulation(array,command,location,value=""){
    if(command.toLowerCase()==="remove"){
        if(location.toLowerCase()==="end"){
            return array.splice(array.length-1,1)[0];
        }
        if(location.toLowerCase()==="beginning"){
            return array.splice(0,1)[0];
        }   
    }
    if(command.toLowerCase()==="add"){
        if(location.toLowerCase()==="end"){
            array.splice(array.length,0,value);
            return array;
        }
        if(location.toLowerCase()==="beginning"){
            array.splice(0,0,value);
            return array;
        }
        
    }
}
console.log(arrayManipulation([1,2,3],"add","beginning",5));