function filterKey(array,key){
    return array.filter(function(obj){
        return obj[key]
    });
}

var objs = [{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}]
var key = "isHilarious";

console.log(filterKey(objs,key));