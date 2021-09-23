var nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
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

function addLanguage(language,greeting){
    var langObj = nestedObject.data.languages;
    langObj[language] = {"hello": greeting};
}

addLanguage("German","Gudentag");
console.log(nestedObject.data.languages);

