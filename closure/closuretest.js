var instructorModuleRefactored = (function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    function displayAllInstructors(){
        return instructors;
    }
    function addNewInstructor(instructor){
        instructors.push(instructor);
        return instructors;
    }
    return {
        showInstructors: displayAllInstructors(),
        addInstructor: addNewInstructor
    }
})();

console.log(instructorModuleRefactored);
// console.log(instructorModuleRefactored.showInstructors);
// console.log(instructorModuleRefactored.addInstructor("Annie"));
// console.log(instructorModuleRefactored.showInstructors);