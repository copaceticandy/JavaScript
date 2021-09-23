var personObject = (function invokeRightAway(){
    var person = "Elie";
    return {
        getName: function(){
            return person;
        },
        setName: function(newName){
            person = newName;
        }
    };
})();
(personObject.setName)("John");
console.log((personObject.getName)());