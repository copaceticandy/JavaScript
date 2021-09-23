var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

  function addSpeaker(key,name){
      var obj = {};
      obj[key] = name;
      nestedObject.speakers.push(obj);
  }

  addSpeaker("name","schit")
  console.log(nestedObject.speakers);