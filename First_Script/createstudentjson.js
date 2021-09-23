
function createStudent(name,surname){
    var studentObj = {
        firstname : name,
        lastname: surname
    }
    return studentObj;
}

student1 = createStudent("John","Snow");
student2 = createStudent("Harry","Maguire");
student3 = createStudent("Jane","Austin");

var students = [student1,student2,student3];

function findStudentByFirstName(firstname){
    for(var i = 0;i<students.length;i++){
        if(students[i].firstname.toLowerCase()==firstname.toLowerCase() ){
            return true;
        }
    }
    return false;
}

console.log(findStudentByFirstName("Jane"));