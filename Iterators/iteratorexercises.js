var users = [
    {
        username: 'larry',
        email: 'larry@foo.com',
        yearsExperience: 22.1,
        favoriteLanguages: ['Perl', 'Java', 'C++'],
        favoriteEditor: 'Vim',
        hobbies: ['Fishing', 'Sailing', 'Hiking'],
        hometown: {
            city: 'San Francisco',
            state: 'CA'
        }
    },
    {
        username: 'jane',
        email: 'jane@test.com',
        yearsExperience: 33.9,
        favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
        favoriteEditor: 'Emacs',
        hobbies: ['Swimming', 'Biking', 'Hiking'],
        hometown: {
            city: 'New York',
            state: 'NY'
        }
    },
    {
        username: 'sam',
        email: 'sam@test.com',
        yearsExperience: 8.2,
        favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
        favoriteEditor: 'Atom',
        hobbies: ['Golf', 'Cooking', 'Archery'],
        hometown: {
            city: 'Fargo',
            state: 'SD'
        }
    },
    {
        username: 'anne',
        email: 'anne@test.com',
        yearsExperience: 4,
        favoriteLanguages: ['C#', 'C++', 'F#'],
        favoriteEditor: 'Visual Studio Code',
        hobbies: ['Tennis', 'Biking', 'Archery'],
        hometown: {
            city: 'Albany',
            state: 'NY'
        }
    },
    {
        username: 'david',
        email: 'david@test.com',
        yearsExperience: 12.5,
        favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
        favoriteEditor: 'VS Code',
        hobbies: ['Volunteering', 'Biking', 'Coding'],
        hometown: {
            city: 'Los Angeles',
            state: 'CA'
        }
    }
];

function printHobbies(array) {
    array.forEach(function (val) {
        val.hobbies.forEach(function (val2) {
            console.log(val2)
        })
    })
}

function printEmails(array) {
    array.forEach(function (val) {
        console.log(val.email);
    })
}

function findHometownByState(array,state){
    return array.find(function(val){
        return val.hometown.state.toLowerCase() === state.toLowerCase();
    })
}

function allLanguages(array){
    return array.reduce(function(acc,val){
        val.favoriteLanguages.forEach(function(val2){
          if(!acc.some(function(val3){
              return val3.toLowerCase() === val2.toLowerCase();
          })){
            acc.push(val2);
          }
        });
        return acc;
    },[])
}

function hasFavoriteEditor(array,editor){
    return array.some(function(val){
        return val.favoriteEditor.toLowerCase() === editor.toLowerCase();
    });
}

function findByUsername(array,name){
    var userObj = array.find(function(val){
        return val.username.toLowerCase() === name.toLowerCase();
    });
    if(!userObj){
        return "There is no user named " + name;
    }
    return userObj
}

console.log(findByUsername(users,"John"));