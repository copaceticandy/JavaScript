var people = ["Greg", "Mary", "Devon", "James"];
for(var i=0;i<people.length;i++){
    console.log(people[i]);
}
people.shift();
people.pop();
people.unshift("Matt")
people.push("Jody");

for (var i = 0; i < people.length; i++) {
    if(people[i]==="Mary"){
        console.log(people[i]);
        break
    }
    console.log(people[i]);
}

console.log(people.slice(2,people.length));
console.log(people);
console.log(people.indexOf("Foo"));
people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
console.log(people.splice(2,1,"Elizabeth","Artie"));
console.log(people);
var withBob = people.concat("Bob");
console.log(withBob);